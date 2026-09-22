import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  MapPin,
  CheckCircle2,
  Navigation,
  Clock,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { RealMap, MapMarkerItem } from '../components/RealMap';
import { apiGet, apiPost } from '../api/client';
import { RouteData } from '../types';

export const Logistics: React.FC = () => {
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);
  const [optimizeMessage, setOptimizeMessage] = useState<string | null>(null);

  const fetchRoutes = () => {
    return apiGet<RouteData[]>('/routes')
      .then((data) => {
        setRoutes(data);
      })
      .catch((err) => console.error('Error loading routes:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const activeRoute = routes[selectedRouteIndex] || null;

  const handleStatusUpdate = async (nextStatus: string) => {
    if (!activeRoute) return;
    setUpdating(true);
    try {
      await apiPost(`/routes/${activeRoute.id}/status`, { status: nextStatus }, 'PATCH');
      await fetchRoutes();
    } catch (err: any) {
      alert(`Error updating route status: ${err.message}`);
    } finally {
      setUpdating(false);
    }
  };

  const handleOptimize = async () => {
    try {
      const res = await apiPost<any>('/routes/optimize', {});
      setOptimizeMessage(res.message);
      setTimeout(() => setOptimizeMessage(null), 4000);
    } catch (err: any) {
      alert(`Optimization note: ${err.message}`);
    }
  };

  // Prepare map markers from current active route
  const farmMarkers: MapMarkerItem[] = activeRoute
    ? activeRoute.farms.map((farm, idx) => ({
        id: `farm-${idx}`,
        name: farm.name,
        lat: farm.lat,
        lng: farm.lng,
        role: 'FARM',
        locationName: farm.location,
        quantity: farm.quantity,
        crop: activeRoute.crop,
      }))
    : [];

  const destinationItem =
    activeRoute && activeRoute.buyer_lat && activeRoute.buyer_lng
      ? {
          name: `${activeRoute.buyer} Delivery Hub`,
          lat: activeRoute.buyer_lat,
          lng: activeRoute.buyer_lng,
        }
      : undefined;

  const getNextStatus = (current: string) => {
    switch (current) {
      case 'PLANNED':
        return { label: 'Start Pickup Route', status: 'PICKUP' };
      case 'PICKUP':
        return { label: 'Mark in Transit to Hub', status: 'IN TRANSIT' };
      case 'IN TRANSIT':
        return { label: 'Confirm Final Delivery', status: 'DELIVERED' };
      default:
        return null;
    }
  };

  const nextAction = activeRoute ? getNextStatus(activeRoute.status) : null;

  return (
    <div className="logistics-page">
      <PageHead
        tag="SMART POOLED LOGISTICS DISPATCH"
        title="Deliver more with every green route."
        text="Nearby smallholder farm lots are dynamically aggregated into an optimal single-truck pickup sequence."
        action={
          <button
            type="button"
            className="btn btn-secondary optimize-btn"
            onClick={handleOptimize}
          >
            <Sparkles size={16} />
            <span>Optimize Routing Sequence</span>
          </button>
        }
      />

      <main className="logistics-main">
        {optimizeMessage && (
          <div className="alert-banner">
            <CheckCircle2 size={18} />
            <span>{optimizeMessage}</span>
          </div>
        )}

        {loading ? (
          <div className="loading-placeholder">Loading real GIS logistics data…</div>
        ) : !activeRoute ? (
          <div className="empty-placeholder panel">
            <Truck size={42} className="empty-icon" />
            <h3>No active logistics routes</h3>
            <p>
              Place an order from the marketplace or execute the demo flow to generate a pooled route.
            </p>
            <Link to="/marketplace" className="btn btn-primary">
              Visit Marketplace
            </Link>
          </div>
        ) : (
          <div className="logistics-grid">
            {/* Real GIS Route Map */}
            <div className="route-map-panel panel">
              <div className="map-header-row">
                <div className="map-badge">
                  <Navigation size={15} />
                  <span>INTERACTIVE ROUTE TELEMETRY</span>
                </div>
                <span className={`status-badge status-${activeRoute.status.toLowerCase().replace(' ', '-')}`}>
                  {activeRoute.status}
                </span>
              </div>

              <div className="logistics-real-map-container">
                <RealMap
                  markers={farmMarkers}
                  destination={destinationItem}
                  showRoutePolyline={true}
                  height="450px"
                />
              </div>

              <div className="map-legend">
                <div className="legend-item">
                  <span className="legend-dot dot-green"></span>
                  <span>Farm Pickup Stops ({activeRoute.farms.length})</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dot-blue"></span>
                  <span>Buyer Fulfillment Hub</span>
                </div>
                <div className="legend-item">
                  <span className="legend-line dot-dashed"></span>
                  <span>Nearest-Neighbor Pooled Route</span>
                </div>
              </div>
            </div>

            {/* Route Stop Sequence Card */}
            <div className="route-detail-panel panel">
              <div className="route-detail-header">
                <span className="panel-tag">POOLED ROUTE #{activeRoute.code}</span>
                <h2 className="route-crop-title">{activeRoute.crop} Bulk Batch</h2>
                <p className="route-sub">
                  Delivering to <b>{activeRoute.buyer}</b>
                </p>
              </div>

              {/* Waypoint Stops */}
              <div className="route-stops-list">
                <h4>Stop Sequence ({activeRoute.stops} Stops):</h4>
                {activeRoute.farms.map((farm, idx) => (
                  <div className="stop-item" key={idx}>
                    <div className="stop-badge stop-pickup">
                      <span>{idx + 1}</span>
                    </div>
                    <div className="stop-info">
                      <strong>Pickup: {farm.name}</strong>
                      <span className="stop-loc">
                        📍 {farm.location} · {farm.quantity.toLocaleString()} kg
                      </span>
                    </div>
                  </div>
                ))}

                <div className="stop-item destination-stop">
                  <div className="stop-badge stop-delivery">
                    <MapPin size={14} />
                  </div>
                  <div className="stop-info">
                    <strong>Final Delivery: {activeRoute.buyer}</strong>
                    <span className="stop-loc">Consolidated batch unloading</span>
                  </div>
                </div>
              </div>

              <hr className="divider" />

              {/* Route Metrics */}
              <div className="route-facts-grid">
                <div className="fact-box">
                  <span className="fact-label">Total Distance</span>
                  <strong className="fact-val">{activeRoute.distance} km</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Aggregated Load</span>
                  <strong className="fact-val">{activeRoute.load.toLocaleString()} kg</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Total Stops</span>
                  <strong className="fact-val">{activeRoute.stops}</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">Est. Time</span>
                  <strong className="fact-val">1h 45m</strong>
                </div>
              </div>

              {/* Action Button */}
              {nextAction ? (
                <button
                  type="button"
                  className="btn btn-primary status-cta-btn"
                  onClick={() => handleStatusUpdate(nextAction.status)}
                  disabled={updating}
                >
                  <Truck size={18} />
                  <span>{updating ? 'Updating Status…' : nextAction.label}</span>
                </button>
              ) : (
                <div className="delivered-confirmation">
                  <CheckCircle2 size={20} />
                  <span>Route Completed & Produce Delivered</span>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
