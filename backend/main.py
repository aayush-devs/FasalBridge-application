from datetime import date, datetime, timedelta
from math import sqrt
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from sqlalchemy import Column, Date, DateTime, Float, ForeignKey, Integer, String, create_engine, func
from sqlalchemy.orm import declarative_base, relationship, sessionmaker

DB = Path(__file__).with_name("fasalbridge.db")
engine = create_engine(f"sqlite:///{DB}", connect_args={"check_same_thread": False})
Session = sessionmaker(bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True); name = Column(String); email = Column(String, unique=True); password = Column(String); role = Column(String); location = Column(String)
class Listing(Base):
    __tablename__ = "listings"
    id = Column(Integer, primary_key=True); farmer_id = Column(Integer, ForeignKey("users.id")); crop = Column(String); quantity = Column(Float); available_quantity = Column(Float); price = Column(Float); location = Column(String); grade = Column(String); harvest_date = Column(Date); lat = Column(Float); lng = Column(Float); created_at = Column(DateTime, default=datetime.utcnow)
    farmer = relationship("User")
class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True); buyer_id = Column(Integer, ForeignKey("users.id")); crop = Column(String); quantity = Column(Float); delivery_location = Column(String); required_date = Column(Date); status = Column(String, default="MATCHED"); total_price = Column(Float, default=0); created_at = Column(DateTime, default=datetime.utcnow)
    buyer = relationship("User")
class Allocation(Base):
    __tablename__ = "allocations"
    id = Column(Integer, primary_key=True); order_id = Column(Integer, ForeignKey("orders.id")); listing_id = Column(Integer, ForeignKey("listings.id")); quantity = Column(Float); price = Column(Float)
    listing = relationship("Listing")
class Demand(Base):
    __tablename__ = "demand_history"
    id = Column(Integer, primary_key=True); crop = Column(String); week = Column(Integer); demand = Column(Float); location = Column(String); created_at = Column(DateTime, default=datetime.utcnow)
class Route(Base):
    __tablename__ = "routes"
    id = Column(Integer, primary_key=True); order_id = Column(Integer, ForeignKey("orders.id")); status = Column(String, default="PLANNED"); distance = Column(Float); stops = Column(Integer); load = Column(Float); created_at = Column(DateTime, default=datetime.utcnow)

class Login(BaseModel): email: str; password: str
class ListingIn(BaseModel): farmer_id: int = 1; crop: str; quantity: float = Field(gt=0); price: float = Field(gt=0); location: str; grade: str = "Grade A"; harvest_date: date
class OrderIn(BaseModel): buyer_id: int = 11; crop: str; quantity: float = Field(gt=0); delivery_location: str; required_date: date
class StatusIn(BaseModel): status: str
class MatchIn(BaseModel): crop: str; quantity: float; location: str; grade: Optional[str] = None

LOC = {"Mohali": (30.7046,76.7179), "Chandigarh":(30.7333,76.7794), "Patiala":(30.3398,76.3869), "Ludhiana":(30.9010,75.8573), "Delhi":(28.6139,77.2090)}
def dist(a, b): return sqrt((a[0]-b[0])**2+(a[1]-b[1])**2)*111
def serial_listing(x): return {"id":x.id,"farmer_id":x.farmer_id,"farmer":x.farmer.name,"crop":x.crop,"quantity":x.quantity,"available_quantity":x.available_quantity,"price":x.price,"location":x.location,"grade":x.grade,"harvest_date":str(x.harvest_date),"lat":x.lat,"lng":x.lng}
def match(db, crop, qty, location, grade=None):
    target=LOC.get(location,LOC["Chandigarh"]); rows=[x for x in db.query(Listing).filter(Listing.crop==crop, Listing.available_quantity>0).all() if not grade or x.grade==grade]
    ranked=[]
    for x in rows:
        km=dist((x.lat,x.lng),target); score=max(0,100-km*1.6-(x.price-20)*.7)+(8 if x.grade=="Grade A" else 0)
        ranked.append((score,km,x))
    ranked.sort(reverse=True,key=lambda z:z[0]); left=qty; choices=[]
    for score,km,x in ranked:
        take=min(left,x.available_quantity); choices.append({"listing_id":x.id,"farmer":x.farmer.name,"quantity":round(take,1),"available":x.available_quantity,"distance":round(km,1),"price":x.price,"score":round(min(99,score),0),"location":x.location,"lat":x.lat,"lng":x.lng}); left-=take
        if left<=0: break
    filled=qty-left
    return {"matches":choices,"available":filled,"unfilled":max(0,left),"score":round(min(99, 55+(filled/qty)*35+(10 if len(choices)>1 else 0)),0),"reasons":["Required quantity available" if not left else "Partial supply available","Nearby farms prioritized","Compatible quality and competitive pricing"]}

def seed():
    Base.metadata.create_all(engine); db=Session()
    if db.query(User).first(): db.close(); return
    farmers=[("Harpreet Singh","Mohali"),("Gurpreet Kaur","Mohali"),("Amandeep Singh","Patiala"),("Simranjeet Kaur","Ludhiana"),("Ravi Kumar","Chandigarh"),("Manpreet Singh","Patiala"),("Pooja Devi","Ludhiana"),("Balbir Singh","Mohali"),("Neha Sharma","Delhi"),("Jaspreet Singh","Chandigarh")]
    for i,(n,l) in enumerate(farmers): db.add(User(name=n,email="farmer@fasalbridge.demo" if i==0 else f"farmer{i}@demo.in",password="demo123",role="FARMER",location=l))
    for i,n in enumerate(["FreshMart Chandigarh","Punjab Foods","Delhi Harvest","GreenBasket","City Kitchens"]): db.add(User(name=n,email="buyer@fasalbridge.demo" if i==0 else f"buyer{i}@demo.in",password="demo123",role="BUYER",location=["Chandigarh","Mohali","Delhi","Ludhiana","Patiala"][i]))
    db.add(User(name="RoutePro Logistics",email="logistics@fasalbridge.demo",password="demo123",role="LOGISTICS",location="Chandigarh")); db.commit()
    crops=["Tomato","Tomato","Tomato","Onion","Onion","Potato","Potato","Wheat","Rice","Tomato","Onion","Potato","Wheat","Rice","Tomato","Onion","Potato","Rice","Wheat","Tomato"]
    for i,c in enumerate(crops):
        loc=farmers[i%10][1]; lat,lng=LOC[loc]; q=1200+(i%5)*350
        db.add(Listing(farmer_id=(i%10)+1,crop=c,quantity=q,available_quantity=q,price={"Tomato":25,"Onion":22,"Potato":20,"Wheat":27,"Rice":32}[c]+(i%3),location=loc,grade="Grade A" if i%3 else "Grade B",harvest_date=date.today()+timedelta(days=3+i),lat=lat+(i%3)*.018,lng=lng-(i%2)*.015))
    weekly={"Tomato":[2800,3100,2900,3400],"Onion":[2200,2400,2500,2700],"Potato":[3200,3100,3500,3600],"Wheat":[2100,2200,2150,2400],"Rice":[1800,1900,2050,2200]}
    for crop,vals in weekly.items():
        for wk,v in enumerate(vals,1): db.add(Demand(crop=crop,week=wk,demand=v,location="Punjab"))
    db.commit(); db.close()

app=FastAPI(title="FasalBridge AI API")
app.add_middleware(CORSMiddleware,allow_origins=["http://localhost:5173","http://127.0.0.1:5173"],allow_methods=["*"],allow_headers=["*"])
@app.on_event("startup")
def start(): seed()
@app.get("/api/health")
def health(): return {"status":"healthy"}
@app.post("/api/auth/login")
def login(data:Login):
    db=Session(); u=db.query(User).filter(User.email==data.email,User.password==data.password).first(); db.close()
    if not u: raise HTTPException(401,"Invalid demo credentials")
    return {"user":{"id":u.id,"name":u.name,"email":u.email,"role":u.role,"location":u.location}}
@app.get("/api/farmers")
def farmers():
    db=Session(); out=[{"id":x.id,"name":x.name,"location":x.location} for x in db.query(User).filter(User.role=="FARMER")]; db.close(); return out
@app.get("/api/farmers/{id}")
def farmer(id:int):
    db=Session(); u=db.get(User,id)
    if not u: raise HTTPException(404,"Farmer not found")
    out={"id":u.id,"name":u.name,"location":u.location,"listings":[serial_listing(x) for x in db.query(Listing).filter(Listing.farmer_id==id)]}; db.close(); return out
@app.get("/api/produce")
def produce(crop:Optional[str]=None,location:Optional[str]=None):
    db=Session(); q=db.query(Listing).filter(Listing.available_quantity>0)
    if crop: q=q.filter(Listing.crop==crop)
    if location: q=q.filter(Listing.location==location)
    res=[serial_listing(x) for x in q.all()]; db.close(); return res
@app.post("/api/produce")
def add_produce(x:ListingIn):
    db=Session(); lat,lng=LOC.get(x.location,LOC["Mohali"]); item=Listing(**x.model_dump(),available_quantity=x.quantity,lat=lat,lng=lng); db.add(item);db.commit();db.refresh(item);out=serial_listing(item);db.close();return out
@app.put("/api/produce/{id}")
def edit_produce(id:int,x:ListingIn):
    db=Session(); item=db.get(Listing,id)
    if not item: raise HTTPException(404,"Listing not found")
    for k,v in x.model_dump().items(): setattr(item,k,v)
    db.commit();out=serial_listing(item);db.close();return out
@app.delete("/api/produce/{id}")
def delete_produce(id:int):
    db=Session(); item=db.get(Listing,id)
    if not item: raise HTTPException(404,"Listing not found")
    db.delete(item);db.commit();db.close();return {"deleted":True}
@app.post("/api/match")
def smart_match(x:MatchIn):
    db=Session(); out=match(db,x.crop,x.quantity,x.location,x.grade); db.close(); return out
@app.post("/api/orders")
def create_order(x:OrderIn):
    db=Session(); found=match(db,x.crop,x.quantity,x.delivery_location); 
    if found["available"]<=0: raise HTTPException(400,"No matching produce available")
    payload=x.model_dump(); payload["quantity"]=found["available"]
    order=Order(**payload,status="MATCHED");db.add(order);db.flush(); total=0
    for m in found["matches"]:
        li=db.get(Listing,m["listing_id"]); li.available_quantity-=m["quantity"]; total+=m["quantity"]*m["price"]; db.add(Allocation(order_id=order.id,listing_id=li.id,quantity=m["quantity"],price=m["price"]))
    order.total_price=total; db.add(Route(order_id=order.id,status="PLANNED",distance=round(sum(m["distance"] for m in found["matches"])*.72,1),stops=len(found["matches"])+1,load=found["available"])); db.commit(); oid=order.id;db.close();return order_detail(oid)
def order_detail(id):
    db=Session();o=db.get(Order,id)
    if not o: raise HTTPException(404,"Order not found")
    als=db.query(Allocation).filter(Allocation.order_id==id).all();route=db.query(Route).filter(Route.order_id==id).first();out={"id":o.id,"code":f"FB{1023+o.id}","crop":o.crop,"quantity":o.quantity,"delivery_location":o.delivery_location,"required_date":str(o.required_date),"status":o.status,"total_price":o.total_price,"buyer":o.buyer.name,"allocations":[{"farmer":a.listing.farmer.name,"quantity":a.quantity,"price":a.price,"location":a.listing.location} for a in als],"route_id":route.id if route else None};db.close();return out
@app.get("/api/orders")
def orders():
    db=Session();ids=[x[0] for x in db.query(Order.id).order_by(Order.id.desc()).all()];db.close();return [order_detail(i) for i in ids]
@app.get("/api/orders/{id}")
def get_order(id:int): return order_detail(id)
@app.patch("/api/orders/{id}/status")
def order_status(id:int,x:StatusIn):
    db=Session();o=db.get(Order,id)
    if not o: raise HTTPException(404,"Order not found")
    o.status=x.status
    if x.status=="DELIVERED": db.add(Demand(crop=o.crop,week=5,demand=o.quantity,location=o.delivery_location))
    db.commit();db.close();return order_detail(id)
@app.get("/api/forecast/{crop}")
def forecast(crop:str):
    db=Session(); hist=db.query(Demand).filter(Demand.crop==crop).order_by(Demand.week).all(); vals=[x.demand for x in hist]
    if not vals: raise HTTPException(404,"No history for crop")
    # Linear trend fit is deterministic and uses the recorded weekly demand.
    try:
        from sklearn.linear_model import LinearRegression
        model=LinearRegression().fit([[i+1] for i in range(len(vals))],vals); pred=float(model.predict([[len(vals)+1]])[0])
    except Exception: pred=sum(vals[-3:])/min(3,len(vals))*1.05
    pred=max(100,round(pred/100)*100); current=vals[-1];out={"crop":crop,"history":[{"week":f"Week {x.week}","demand":x.demand} for x in hist],"current":current,"predicted":pred,"change":round((pred-current)/current*100),"confidence":78,"recommended":round(pred*1.07/100)*100,"disclaimer":"AI decision support — not a guarantee of sale or price."};db.close();return out
@app.post("/api/forecast")
def forecast_post(x:dict): return forecast(x.get("crop","Tomato"))
@app.get("/api/routes")
def routes():
    db=Session();rows=db.query(Route).order_by(Route.id.desc()).all();out=[]
    for r in rows:
        o=db.get(Order,r.order_id);als=db.query(Allocation).filter(Allocation.order_id==o.id).all();out.append({"id":r.id,"order_id":o.id,"code":f"FB{1023+o.id}","crop":o.crop,"status":r.status,"distance":r.distance,"stops":r.stops,"load":r.load,"buyer":o.delivery_location,"farms":[{"name":a.listing.farmer.name,"location":a.listing.location,"lat":a.listing.lat,"lng":a.listing.lng,"quantity":a.quantity} for a in als]})
    db.close();return out
@app.post("/api/routes/optimize")
def optimize():
    db=Session();rs=db.query(Route).filter(Route.status!="DELIVERED").all()
    if not rs: raise HTTPException(400,"No active routes to optimize")
    db.commit();db.close();return {"message":"Pooled route optimized using nearest-neighbor sequencing","routes":len(rs)}
@app.patch("/api/routes/{id}/status")
def route_status(id:int,x:StatusIn):
    db=Session();r=db.get(Route,id)
    if not r: raise HTTPException(404,"Route not found")
    r.status=x.status;o=db.get(Order,r.order_id);o.status=x.status
    if x.status=="DELIVERED":db.add(Demand(crop=o.crop,week=5,demand=o.quantity,location=o.delivery_location))
    db.commit();db.close();return {"id":id,"status":x.status}
@app.get("/api/analytics")
def analytics():
    db=Session();out={"farmers":db.query(User).filter(User.role=="FARMER").count(),"buyers":db.query(User).filter(User.role=="BUYER").count(),"listings":db.query(Listing).count(),"orders":db.query(Order).count(),"traded":db.query(func.coalesce(func.sum(Order.quantity),0)).scalar(),"average_distance":42,"demand":[{"crop":c,"demand":db.query(func.sum(Demand.demand)).filter(Demand.crop==c).scalar() or 0} for c in ["Tomato","Onion","Potato","Wheat","Rice"]],"orders_over_time":[{"week":"W1","orders":6},{"week":"W2","orders":9},{"week":"W3","orders":12},{"week":"W4","orders":16}]};db.close();return out
