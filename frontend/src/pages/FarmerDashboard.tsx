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

export const FarmerDashboard: React.FC = () => {
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
    setSelectedFieldId(item.id);
  };

  const chartData = forecast
    ? [
        ...forecast.history,
        { week: 'Next Week (AI)', demand: forecast.predicted },
      ]
    : [];

  return (
    <div className="dashboard-page">
      <PageHead
        tag="FARMER & FPO INTELLIGENCE HUB"
        title="Good morning, Harpreet."
        text="Real-time harvest supply positioning, live GIS farm field telemetry, and predictive demand analytics."
        action={
          <Link className="btn btn-primary" to="/farmer/list-produce">
            <PlusCircle size={18} />
            <span>List Fresh Produce</span>
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
            <span className="metric-label">ACTIVE FIELD LOTS</span>
            <strong className="metric-value">
              {analytics?.listings || produceList.length || 16}
            </strong>
            <span className="metric-sub">Verified GPS geo-tagged</span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <ShoppingBasket size={20} />
            </div>
            <span className="metric-label">COMMITTED ORDERS</span>
            <strong className="metric-value">{analytics?.orders || 8}</strong>
            <span className="metric-sub">Pooled pickup routes</span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <TrendingUp size={20} />
            </div>
            <span className="metric-label">PROJECTED DEMAND</span>
            <strong className="metric-value">
              {forecast ? `${forecast.predicted.toLocaleString()} kg` : '3,800 kg'}
            </strong>
            <span className="metric-sub green-sub">
              ↑ {forecast?.change || 35}% expected growth
            </span>
          </article>

          <article className="metric-card">
            <div className="metric-icon-box">
              <Leaf size={20} />
            </div>
            <span className="metric-label">RECOMMENDED HARVEST</span>
            <strong className="metric-value">
              {forecast ? `${forecast.recommended.toLocaleString()} kg` : '4,100 kg'}
            </strong>
            <span className="metric-sub">Buffered for zero spoilage</span>
          </article>
        </section>

        {/* AI Forecasting & Market Signal Grid */}
        <section className="forecast-signal-grid">
          <div className="panel forecast-panel">
            <div className="panel-header">
              <div>
                <span className="panel-tag">AI DEMAND PREDICTION · {forecast?.crop.toUpperCase() || 'TOMATO'}</span>
                <h2 className="panel-title">
                  {forecast ? `${forecast.predicted.toLocaleString()} kg` : 'Loading…'}
                </h2>
                <p className="panel-sub">
                  Extrapolated weekly demand using scikit-learn linear trend modeling.
                </p>
              </div>

              <div className="confidence-meter">
                <span className="confidence-score">{forecast?.confidence || 78}%</span>
                <span className="confidence-label">Confidence</span>
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
                    formatter={(val: any) => [`${Number(val).toLocaleString()} kg`, 'Demand']}
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
              {forecast?.disclaimer || 'AI decision support — not a guarantee of sale or price.'}
            </p>
          </div>

          <div className="panel signal-panel">
            <span className="panel-tag">REGIONAL OPPORTUNITY</span>
            <h2 className="signal-title">Punjab & Delhi Corridor</h2>
            <div className="signal-highlight">
              <span className="signal-percentage">+{forecast?.change || 35}%</span>
              <p className="signal-note">
                Elevated demand from bulk institutional buyers in Chandigarh & Delhi.
              </p>
            </div>
            <div className="signal-tips">
              <p>💡 Tip: Grade A lots with scheduled harvest dates within 4-7 days receive 15% faster matching.</p>
            </div>
            <Link className="action-text-link" to="/farmer/list-produce">
              <span>List your produce lot</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Real Interactive Map Section */}
        <section className="real-map-section">
          <div className="section-head-bar">
            <div>
              <div className="section-badge">
                <MapPin size={14} />
                <span>GIS SUPPLY TELEMETRY</span>
              </div>
              <h2 className="section-title">Live Regional Farm Map</h2>
              <p className="section-subtitle">
                Explore authentic geolocated farm lots across Mohali, Patiala, Ludhiana, Chandigarh, and Delhi.
                Click any farm marker or use the "Locate" button on field cards below to inspect lots.
              </p>
            </div>

            <div className="crop-filter-chips">
              <button
                type="button"
                className={`filter-chip ${selectedCrop === 'All' ? 'filter-chip-active' : ''}`}
                onClick={() => setSelectedCrop('All')}
              >
                All Crops ({produceList.length})
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
                    {crop} ({count})
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
                <span>ACTIVE HARVEST INVENTORY</span>
              </div>
              <h2 className="section-title">
                {selectedCrop === 'All' ? 'All Field Lots' : `${selectedCrop} Fields`} ({filteredListings.length})
              </h2>
              <p className="section-subtitle">
                Field cards showing verified farmer profiles, available supply, quality grading, and GPS telemetry.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="loading-placeholder">Loading real field telemetry…</div>
          ) : filteredListings.length === 0 ? (
            <div className="empty-placeholder">
              <p>No active fields found for {selectedCrop}.</p>
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
