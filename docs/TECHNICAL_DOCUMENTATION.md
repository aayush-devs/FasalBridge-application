# ⚙️ FasalBridge AI — Technical Documentation

## 1. System Overview

FasalBridge AI follows a lightweight client → API → intelligence → persistence architecture.

```text
┌──────────────────────────────┐
│ React + TypeScript Frontend  │
│                              │
│ • Farmer Dashboard           │
│ • Buyer Marketplace          │
│ • Logistics Dashboard        │
│ • Analytics                  │
│ • Live Demo                  │
└──────────────┬───────────────┘
               │
           HTTP / JSON
               │
               ▼
┌──────────────────────────────┐
│       FastAPI Backend        │
│                              │
│ • Authentication             │
│ • Produce Management         │
│ • Orders                     │
│ • Matching Engine            │
│ • Forecasting                │
│ • Route Planning             │
│ • Analytics                  │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌─────────────────┐
│   SQLite     │  │ AI / Algorithms │
│              │  │                 │
│ Users        │  │ Forecasting     │
│ Listings     │  │ Matching        │
│ Orders       │  │ Routing         │
│ Demand       │  │                 │
│ Routes       │  │                 │
└──────────────┘  └─────────────────┘
```

---

## 2. Technology Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Recharts
- Lucide React
- Leaflet
- React-Leaflet

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic
- SQLAlchemy

### Database

- SQLite

### AI / Data Processing

- Scikit-learn
- Linear Regression
- Deterministic heuristic matching
- Nearest-neighbor-style route sequencing

---

## 3. Frontend Architecture

The frontend is implemented as a Vite-powered React + TypeScript application.

Major application areas:

```text
Landing
│
├── Farmer Dashboard
│   └── Produce Listing
│
├── Buyer Marketplace
│   └── Order Flow
│
├── Logistics Dashboard
│   └── Route Management
│
├── Analytics
│
└── Live Hackathon Demo
```

The frontend communicates with the backend through REST APIs.

The API base URL is configurable through:

```env
VITE_API_URL
```

Default:

```text
http://localhost:8000/api
```

---

## 4. Backend Architecture

The backend uses FastAPI.

The MVP contains:

- API application
- SQLAlchemy models
- Database initialization
- Seed data
- Matching logic
- Forecasting logic
- Route planning
- Analytics
- REST endpoints

---

## 5. Database Entities

### User

Represents:

- Farmer
- Buyer
- Logistics operator

### Listing

Represents farmer produce listings.

Important attributes include:

- Crop
- Quantity
- Price
- Quality
- Location

### Order

Represents buyer requirements.

### Allocation

Connects an order with one or more farmer listings.

This enables pooled sourcing.

### Demand

Stores historical crop demand and supports forecasting.

### Route

Stores pooled logistics information including:

- Pickup stops
- Buyer destination
- Estimated distance
- Load
- Status

---

## 6. AI Demand Forecasting

The forecasting pipeline is intentionally transparent.

```text
Historical Demand
       ↓
Data Preparation
       ↓
Linear Regression
       ↓
Next-period Estimate
       ↓
Demand Change
       ↓
Recommendation
```

The MVP:

1. Loads historical weekly demand.
2. Fits Linear Regression when appropriate.
3. Falls back to a recent-demand baseline when necessary.
4. Produces a next-period estimate.
5. Calculates percentage change against the latest observation.
6. Returns a recommendation.

The system treats the forecast as decision support rather than a guarantee.

---

## 7. Farmer-Buyer Matching

The matching engine ranks available farmer listings using multiple factors.

```text
Buyer Requirement
       │
       ▼
Candidate Listings
       │
       ├── Quantity
       ├── Distance
       ├── Price
       └── Quality
       │
       ▼
Match Score
       │
       ▼
Ranked Farmer Lots
```

The API returns:

- Listing IDs
- Farmer names
- Allocated quantities
- Availability
- Distance
- Price
- Match score
- Location
- Match reasons

A lightweight coordinate-distance calculation is used for the MVP.

---

## 8. Pooled Order Allocation

If one farmer cannot fulfill the complete requirement, the order can be split across multiple listings.

Example:

```text
Required = 5,000 kg

Farmer A = 2,000 kg
Farmer B = 1,800 kg
Farmer C = 1,200 kg

Total = 5,000 kg
```

The allocations are stored and then used to generate the logistics route.

---

## 9. Route Planning

The MVP uses a transparent nearest-neighbor-style sequencing method.

```text
Matched Farmers
      ↓
Calculate relative locations
      ↓
Select pickup sequence
      ↓
Add buyer destination
      ↓
Generate pooled route
```

Route output includes:

- Pickup stops
- Buyer destination
- Estimated distance
- Total load
- Route status

This is intentionally simple and explainable for the hackathon MVP.

---

## 10. API Architecture

All APIs are exposed under:

```text
/api
```

### Authentication

```http
GET  /api/health
POST /api/auth/login
```

### Farmers & Produce

```http
GET    /api/farmers
GET    /api/farmers/{id}

GET    /api/produce
POST   /api/produce
PUT    /api/produce/{id}
DELETE /api/produce/{id}
```

### Matching & Orders

```http
POST  /api/match

POST  /api/orders
GET   /api/orders
GET   /api/orders/{id}
PATCH /api/orders/{id}/status
```

### Forecasting

```http
GET  /api/forecast/{crop}
POST /api/forecast
```

### Logistics

```http
GET   /api/routes
POST  /api/routes/optimize
PATCH /api/routes/{id}/status
```

### Analytics

```http
GET /api/analytics
```

Interactive API documentation is provided by FastAPI at:

```text
http://localhost:8000/docs
```

---

## 11. Seed Data

The application uses seeded demo data so the hackathon demonstration is repeatable.

Example locations:

- Mohali
- Chandigarh
- Patiala
- Ludhiana
- Delhi

The seed dataset contains representative farmers, buyers, produce listings, demand history, and logistics information.

---

## 12. Production Considerations

The current repository is a hackathon MVP.

Potential production improvements include:

- Secure password hashing
- JWT/session authentication
- Role-based authorization
- PostgreSQL
- Database migrations
- Request validation
- Rate limiting
- Restricted CORS
- Database backups
- Model monitoring
- Forecast confidence calibration
- Production-grade geospatial routing
- Automated tests
- CI/CD
- Observability

---

## 13. Scalability Roadmap

### Phase 1 — MVP

- React
- FastAPI
- SQLite
- Basic forecasting
- Matching heuristics
- Demo logistics

### Phase 2 — Engineering

- PostgreSQL
- Authentication
- Testing
- CI/CD
- Observability

### Phase 3 — Intelligence

- Larger production datasets
- Forecast model evaluation
- Advanced matching
- Geospatial optimization

### Phase 4 — Scale

- Background jobs
- Caching
- Cloud infrastructure
- API versioning
- Monitoring
- Model retraining

---

## 14. Design Principles

### Transparency over black-box AI

The system exposes match factors and forecasting limitations.

### Operational usefulness

Features are connected to an actual farm-to-market workflow.

### Demo reliability

Seeded data and deterministic algorithms make the hackathon demonstration repeatable.

### Modular growth

The MVP architecture can evolve into production services without requiring the entire application to be rewritten.
