import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  ShoppingBasket,
  Leaf,
  TrendingUp,
  ArrowRight,
  PlusCircle,
  MapPin,
  Layers,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PageHead } from '../components/PageHead';
import { RealMap, MapMarkerItem } from '../components/RealMap';
import { FieldCard } from '../components/FieldCard';
import { apiGet, CROPS } from '../api/client';
import { AnalyticsData, ForecastData, ProduceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const FarmerDashboard: React.FC = () => {
  const { t, translateCrop, translateLocation } = useLanguage();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [produceList, setProduceList] = useState<ProduceItem[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [selectedFieldId, setSelectedFieldId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Promise.all([
      apiGet<AnalyticsData>('/analytics'),
      apiGet<ForecastData>('/forecast/Tomato'),
      apiGet<ProduceItem[]>('/produce'),
    ])
      .then(([analyticsData, forecastData, produceData]) => {
        setAnalytics(analyticsData);
        setForecast(forecastData);
        setProduceList(produceData);
      })
      .catch((err) => console.error('Error fetching dashboard data:', err))
      .finally(() => setLoading(false));
  }, []);

  // Filter produce listings based on selected crop
  const filteredListings =
    selectedCrop === 'All'
      ? produceList
      : produceList.filter((item) => item.crop.toLowerCase() === selectedCrop.toLowerCase());

  // Map markers from real listings
  const mapMarkers: MapMarkerItem[] = filteredListings.map((item) => ({
    id: item.id,
    name: item.farmer,
    lat: item.lat,
    lng: item.lng,
    role: 'FARM',
    crop: item.crop,
    quantity: item.available_quantity,
    price: item.price,
    locationName: item.location,
    grade: item.grade,
  }));

  // Handle locating a field on the map
  const handleLocateField = (item: ProduceItem) => {
    // If the crop is currently filtered out, reset filter to 'All' so marker is visible on map
    if (selectedCrop !== 'All' && selectedCrop.toLowerCase() !== item.crop.toLowerCase()) {
      setSelectedCrop('All');
    }
    setSelectedFieldId(item.id);

    // Smoothly scroll to the map so the user immediately sees the focused farm and opened popup
    setTimeout(() => {
      const mapSection = document.getElementById('regional-farm-map-section');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const chartData = forecast
    ? [
        ...forecast.history,
        { week: t('dash_next_week'), demand: forecast.predicted },
      ]
    : [];

  return (
    <div className="dashboard-page">
      <PageHead
        tag={t('dash_tag')}
        title={t('dash_title')}
        text={t('dash_desc')}
        action={
          <Link className="btn btn-primary" to="/farmer/list-produce">
            <PlusCircle size={18} />
            <span>{t('dash_list_produce_btn')}</span>
          </Link>
        }
      />

      <main className="dashboard-main">
        {/* KPI Metrics */}
        <section className="metrics-grid">
          <article className="metric-card">
            <div className="metric-icon-box">
              <Package size={20} />
            </div>
            <span className="metric-label">{t('dash_kpi_listings')}</span>
            <strong className="metric-value">
              {analytics?.listings || produceList.length || 16}
            </strong>
            <span className="metric-sub">{t('dash_kpi_listings_sub')}</span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <ShoppingBasket size={20} />
            </div>
            <span className="metric-label">{t('dash_kpi_orders')}</span>
            <strong className="metric-value">{analytics?.orders || 8}</strong>
            <span className="metric-sub">{t('dash_kpi_orders_sub')}</span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <TrendingUp size={20} />
            </div>
            <span className="metric-label">{t('dash_kpi_demand')}</span>
            <strong className="metric-value">
              {forecast ? `${forecast.predicted.toLocaleString()} ${t('unit_kg')}` : `3,800 ${t('unit_kg')}`}
            </strong>
            <span className="metric-sub green-sub">
              ↑ {forecast?.change || 35}% {t('dash_kpi_demand_growth')}
            </span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <Leaf size={20} />
            </div>
            <span className="metric-label">{t('dash_kpi_harvest')}</span>
            <strong className="metric-value">
              {forecast ? `${forecast.recommended.toLocaleString()} ${t('unit_kg')}` : `4,100 ${t('unit_kg')}`}
            </strong>
            <span className="metric-sub">{t('dash_kpi_harvest_sub')}</span>
          </article>
        </section>

        {/* AI Forecasting & Market Signal Grid */}
        <section className="forecast-signal-grid">
          <div className="panel forecast-panel">
            <div className="panel-header">
              <div>
                <span className="panel-tag">
                  {t('dash_forecast_tag')} · {forecast?.crop ? translateCrop(forecast.crop).toUpperCase() : translateCrop('Tomato').toUpperCase()}
                </span>
                <h2 className="panel-title">
                  {forecast ? `${forecast.predicted.toLocaleString()} ${t('unit_kg')}` : t('loading')}
                </h2>
                <p className="panel-sub">
                  {t('dash_forecast_sub')}
                </p>
              </div>

              <div className="confidence-meter">
                <span className="confidence-score">{forecast?.confidence || 78}%</span>
                <span className="confidence-label">{t('dash_confidence')}</span>
              </div>
            </div>

            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={230}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#26734d" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#26734d" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" stroke="#728c7c" tick={{ fontSize: 12 }} />
                  <Tooltip
                    formatter={(val: any) => [`${Number(val).toLocaleString()} ${t('unit_kg')}`, t('dash_chart_demand')]}
                    contentStyle={{ background: '#fff', borderRadius: 8, border: '1px solid #e3e8df' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="demand"
                    stroke="#26734d"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#forecastFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="disclaimer-text">
              {t('dash_disclaimer')}
            </p>
          </div>

          <div className="panel signal-panel">
            <span className="panel-tag">{t('dash_opp_tag')}</span>
            <h2 className="signal-title">{t('dash_opp_title')}</h2>
            <div className="signal-highlight">
              <span className="signal-percentage">+{forecast?.change || 35}%</span>
              <p className="signal-note">
                {t('dash_opp_note')}
              </p>
            </div>
            <div className="signal-tips">
              <p>{t('dash_opp_tip')}</p>
            </div>
            <Link className="action-text-link" to="/farmer/list-produce">
              <span>{t('dash_opp_link')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Real Interactive Map Section */}
        <section className="real-map-section" id="regional-farm-map-section">
          {selectedFieldId && (
            <div className="focused-farm-pill">
              <div className="focused-farm-text">
                <MapPin size={15} />
                <span>
                  {t('dash_focus_banner_title')}{' '}
                  <strong>{produceList.find((p) => p.id === selectedFieldId)?.farmer}</strong> (
                  {translateCrop(produceList.find((p) => p.id === selectedFieldId)?.crop || '')} ·{' '}
                  {translateLocation(produceList.find((p) => p.id === selectedFieldId)?.location || '')})
                </span>
              </div>
              <button
                type="button"
                className="reset-focus-btn"
                onClick={() => setSelectedFieldId(null)}
              >
                {t('dash_reset_focus')}
              </button>
            </div>
          )}
          <div className="section-head-bar">
            <div>
              <div className="section-badge">
                <MapPin size={14} />
                <span>{t('dash_gis_badge')}</span>
              </div>
              <h2 className="section-title">{t('dash_gis_title')}</h2>
              <p className="section-subtitle">
                {t('dash_gis_subtitle')}
              </p>
            </div>

            <div className="crop-filter-chips">
              <button
                type="button"
                className={`filter-chip ${selectedCrop === 'All' ? 'filter-chip-active' : ''}`}
                onClick={() => setSelectedCrop('All')}
              >
                {t('all_crops')} ({produceList.length})
              </button>
              {CROPS.map((crop) => {
                const count = produceList.filter((p) => p.crop === crop).length;
                return (
                  <button
                    key={crop}
                    type="button"
                    className={`filter-chip ${selectedCrop === crop ? 'filter-chip-active' : ''}`}
                    onClick={() => setSelectedCrop(crop)}
                  >
                    {translateCrop(crop)} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real Leaflet Map */}
          <div className="dashboard-map-container">
            <RealMap
              markers={mapMarkers}
              selectedId={selectedFieldId}
              onMarkerClick={(marker) => setSelectedFieldId(Number(marker.id))}
              height="460px"
            />
          </div>
        </section>

        {/* Real Field Cards Grid */}
        <section className="field-cards-section">
          <div className="section-head-bar">
            <div>
              <div className="section-badge">
                <Layers size={14} />
                <span>{t('dash_inventory_badge')}</span>
              </div>
              <h2 className="section-title">
                {selectedCrop === 'All' ? t('all_crops') : translateCrop(selectedCrop)}{' '}
                {t('dash_inventory_title')} ({filteredListings.length})
              </h2>
              <p className="section-subtitle">
                {t('dash_inventory_subtitle')}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="loading-placeholder">{t('dash_loading_telemetry')}</div>
          ) : filteredListings.length === 0 ? (
            <div className="empty-placeholder">
              <p>{t('dash_no_fields')} {selectedCrop === 'All' ? t('all_crops') : translateCrop(selectedCrop)}.</p>
            </div>
          ) : (
            <div className="field-cards-grid">
              {filteredListings.map((item) => (
                <FieldCard
                  key={item.id}
                  item={item}
                  isSelected={selectedFieldId === item.id}
                  onSelect={(selected) => setSelectedFieldId(selected.id)}
                  onLocate={handleLocateField}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
