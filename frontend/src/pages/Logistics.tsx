import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  MapPin,
  CheckCircle2,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { RealMap, MapMarkerItem } from '../components/RealMap';
import { apiGet, apiPost } from '../api/client';
import { RouteData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Logistics: React.FC = () => {
  const { t, translateCrop, translateLocation } = useLanguage();
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
        return { label: t('log_btn_pickup'), status: 'PICKUP' };
      case 'PICKUP':
        return { label: t('log_btn_transit'), status: 'IN TRANSIT' };
      case 'IN TRANSIT':
        return { label: t('log_btn_deliver'), status: 'DELIVERED' };
      default:
        return null;
    }
  };

  const nextAction = activeRoute ? getNextStatus(activeRoute.status) : null;

  return (
    <div className="logistics-page">
      <PageHead
        tag={t('log_page_tag')}
        title={t('log_page_title')}
        text={t('log_page_desc')}
        action={
          <button
            type="button"
            className="btn btn-secondary optimize-btn"
            onClick={handleOptimize}
          >
            <Sparkles size={16} />
            <span>{t('log_optimize_btn')}</span>
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
          <div className="loading-placeholder">{t('loading')}</div>
        ) : !activeRoute ? (
          <div className="empty-placeholder panel">
            <Truck size={42} className="empty-icon" />
            <h3>{t('log_empty_title')}</h3>
            <p>
              {t('log_empty_desc')}
            </p>
            <Link to="/marketplace" className="btn btn-primary">
              {t('log_empty_cta')}
            </Link>
          </div>
        ) : (
          <div className="logistics-grid">
            {/* Real GIS Route Map */}
            <div className="route-map-panel panel">
              <div className="map-header-row">
                <div className="map-badge">
                  <Navigation size={15} />
                  <span>{t('log_telemetry_badge')}</span>
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
                  <span>{t('log_legend_stops')} ({activeRoute.farms.length})</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dot-blue"></span>
                  <span>{t('log_legend_hub')}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-line dot-dashed"></span>
                  <span>{t('log_legend_route')}</span>
                </div>
              </div>
            </div>

            {/* Route Stop Sequence Card */}
            <div className="route-detail-panel panel">
              <div className="route-detail-header">
                <span className="panel-tag">{t('log_route_tag')}{activeRoute.code}</span>
                <h2 className="route-crop-title">{translateCrop(activeRoute.crop)} {t('log_batch_title')}</h2>
                <p className="route-sub">
                  {t('log_route_delivering_to')} <b>{activeRoute.buyer}</b>
                </p>
              </div>

              {/* Waypoint Stops */}
              <div className="route-stops-list">
                <h4>{t('log_stops_header')} ({activeRoute.stops}):</h4>
                {activeRoute.farms.map((farm, idx) => (
                  <div className="stop-item" key={idx}>
                    <div className="stop-badge stop-pickup">
                      <span>{idx + 1}</span>
                    </div>
                    <div className="stop-info">
                      <strong>{t('log_stop_pickup')}: {farm.name}</strong>
                      <span className="stop-loc">
                        📍 {translateLocation(farm.location)} · {farm.quantity.toLocaleString()} {t('unit_kg')}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="stop-item destination-stop">
                  <div className="stop-badge stop-delivery">
                    <MapPin size={14} />
                  </div>
                  <div className="stop-info">
                    <strong>{t('log_stop_delivery')}: {activeRoute.buyer}</strong>
                    <span className="stop-loc">{t('log_batch_unloading')}</span>
                  </div>
                </div>
              </div>

              <hr className="divider" />

              {/* Route Metrics */}
              <div className="route-facts-grid">
                <div className="fact-box">
                  <span className="fact-label">{t('log_fact_distance')}</span>
                  <strong className="fact-val">{activeRoute.distance} km</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">{t('log_fact_load')}</span>
                  <strong className="fact-val">{activeRoute.load.toLocaleString()} {t('unit_kg')}</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">{t('log_fact_stops')}</span>
                  <strong className="fact-val">{activeRoute.stops}</strong>
                </div>
                <div className="fact-box">
                  <span className="fact-label">{t('log_fact_time')}</span>
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
                  <span>{updating ? t('log_updating') : nextAction.label}</span>
                </button>
              ) : (
                <div className="delivered-confirmation">
                  <CheckCircle2 size={20} />
                  <span>{t('log_status_delivered')}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
