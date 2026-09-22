import pytest
from datetime import date, timedelta
from fastapi.testclient import TestClient
from main import app, seed_database

client = TestClient(app)


@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    seed_database(force=True)


def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "FasalBridge" in data["service"]


def test_auth_login_success():
    response = client.post(
        "/api/auth/login",
        json={"email": "farmer@fasalbridge.demo", "password": "demo123"},
    )
    assert response.status_code == 200
    data = response.json()
    assert "user" in data
    assert data["user"]["email"] == "farmer@fasalbridge.demo"
    assert data["user"]["role"] == "FARMER"


def test_auth_login_invalid():
    response = client.post(
        "/api/auth/login",
        json={"email": "nonexistent@demo.in", "password": "wrongpassword"},
    )
    assert response.status_code == 401


def test_list_farmers():
    response = client.get("/api/farmers")
    assert response.status_code == 200
    farmers = response.json()
    assert len(farmers) > 0
    assert any(f["name"] == "Harpreet Singh" for f in farmers)


def test_get_farmer_detail():
    response = client.get("/api/farmers/1")
    assert response.status_code == 200
    farmer = response.json()
    assert farmer["id"] == 1
    assert "listings" in farmer
    assert isinstance(farmer["listings"], list)


def test_list_produce():
    response = client.get("/api/produce?crop=Tomato")
    assert response.status_code == 200
    items = response.json()
    assert len(items) > 0
    assert all(item["crop"] == "Tomato" for item in items)


def test_create_and_delete_produce():
    harvest_date = (date.today() + timedelta(days=7)).isoformat()
    payload = {
        "farmer_id": 1,
        "crop": "Tomato",
        "quantity": 850.0,
        "price": 26.5,
        "location": "Mohali",
        "grade": "Grade A",
        "harvest_date": harvest_date,
    }
    create_res = client.post("/api/produce", json=payload)
    assert create_res.status_code == 201
    created = create_res.json()
    assert created["crop"] == "Tomato"
    assert created["quantity"] == 850.0
    item_id = created["id"]

    # Delete
    del_res = client.delete(f"/api/produce/{item_id}")
    assert del_res.status_code == 200
    assert del_res.json()["deleted"] is True


def test_smart_matching_algorithm():
    match_res = client.post(
        "/api/match",
        json={
            "crop": "Tomato",
            "quantity": 2500.0,
            "location": "Chandigarh",
        },
    )
    assert match_res.status_code == 200
    match_data = match_res.json()
    assert "matches" in match_data
    assert len(match_data["matches"]) > 0
    assert match_data["available"] > 0
    assert match_data["score"] > 50
    assert len(match_data["reasons"]) >= 1


def test_create_order_and_route():
    req_date = (date.today() + timedelta(days=4)).isoformat()
    order_res = client.post(
        "/api/orders",
        json={
            "buyer_id": 11,
            "crop": "Tomato",
            "quantity": 1000.0,
            "delivery_location": "Chandigarh",
            "required_date": req_date,
        },
    )
    assert order_res.status_code == 201
    order = order_res.json()
    assert order["crop"] == "Tomato"
    assert order["status"] == "MATCHED"
    assert len(order["allocations"]) > 0
    assert order["route_id"] is not None


def test_demand_forecast():
    res = client.get("/api/forecast/Tomato")
    assert res.status_code == 200
    forecast = res.json()
    assert forecast["crop"] == "Tomato"
    assert len(forecast["history"]) >= 4
    assert forecast["predicted"] > 0
    assert forecast["confidence"] > 0
    assert "disclaimer" in forecast


def test_routes_list_and_status():
    routes_res = client.get("/api/routes")
    assert routes_res.status_code == 200
    routes = routes_res.json()
    assert len(routes) > 0
    first_route = routes[0]
    assert "farms" in first_route
    assert "stops" in first_route
    assert "distance" in first_route
    assert "buyer_lat" in first_route
    assert "buyer_lng" in first_route

    # Test status update
    route_id = first_route["id"]
    update_res = client.patch(f"/api/routes/{route_id}/status", json={"status": "IN TRANSIT"})
    assert update_res.status_code == 200
    assert update_res.json()["status"] == "IN TRANSIT"


def test_analytics_aggregation():
    res = client.get("/api/analytics")
    assert res.status_code == 200
    data = res.json()
    assert "farmers" in data
    assert "buyers" in data
    assert "listings" in data
    assert "demand" in data
    assert "orders_over_time" in data
