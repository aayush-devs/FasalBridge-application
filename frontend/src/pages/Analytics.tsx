import React, { useEffect, useState } from 'react';
import {
  Package,
  ShoppingBasket,
  Leaf,
  Truck,
  TrendingUp,
  BarChart3,
  LineChart as LineChartIcon,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PageHead } from '../components/PageHead';
import { apiGet } from '../api/client';
import { AnalyticsData } from '../types';

export const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiGet<AnalyticsData>('/analytics')
      .then((res) => setData(res))
      .catch((err) => console.error('Error fetching analytics:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="analytics-page">
      <PageHead
        tag="SYSTEM-WIDE PLATFORM TELEMETRY"
        title="The agricultural bridge, in numbers."
        text="Transparent metrics illustrating supply resilience, farmer disintermediation, and logistics efficiency."
      />

      <main className="analytics-main">
        {loading ? (
          <div className="loading-placeholder">Loading real platform analytics…</div>
        ) : (
          <>
            {/* KPI Cards */}
            <section className="metrics-grid">
              <article className="metric-card">
                <div className="metric-icon-box">
                  <Leaf size={20} />
                </div>
                <span className="metric-label">ONBOARDED FARMERS</span>
                <strong className="metric-value">{data?.farmers || 10}</strong>
                <span className="metric-sub">Direct smallholders & FPOs</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <ShoppingBasket size={20} />
                </div>
                <span className="metric-label">REGISTERED BUYERS</span>
                <strong className="metric-value">{data?.buyers || 5}</strong>
                <span className="metric-sub">Wholesale & retail chains</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <Package size={20} />
                </div>
                <span className="metric-label">PRODUCE TRADED</span>
                <strong className="metric-value">{data?.traded?.toLocaleString() || '12,800'} kg</strong>
                <span className="metric-sub green-sub">100% direct transactions</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <Truck size={20} />
                </div>
                <span className="metric-label">AVG DELIVERY DISTANCE</span>
                <strong className="metric-value">{data?.average_distance || 42} km</strong>
                <span className="metric-sub">Localized supply radius</span>
              </article>
            </section>

            {/* Visual Analytics Charts */}
            <section className="charts-grid">
              <div className="panel chart-panel">
                <div className="panel-header-simple">
                  <div className="panel-title-with-icon">
                    <LineChartIcon size={20} />
                    <h3>Weekly Orders Velocity</h3>
                  </div>
                  <span className="panel-tag">TREND ANALYSIS</span>
                </div>
                <div className="chart-box">
                  <ResponsiveContainer width="100%" height={260}>
                    <LineChart data={data?.orders_over_time} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <XAxis dataKey="week" stroke="#728c7c" />
                      <YAxis stroke="#728c7c" />
                      <Tooltip
                        contentStyle={{ background: '#fff', borderRadius: 8, border: '1px solid #e3e8df' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="orders"
                        stroke="#ed9d35"
                        strokeWidth={3}
                        dot={{ r: 5, fill: '#ed9d35' }}
                        activeDot={{ r: 7 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="panel chart-panel">
                <div className="panel-header-simple">
                  <div className="panel-title-with-icon">
                    <BarChart3 size={20} />
                    <h3>Demand Distribution by Crop</h3>
                  </div>
                  <span className="panel-tag">HISTORICAL VOLUME</span>
                </div>
                <div className="chart-box">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={data?.demand} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <XAxis dataKey="crop" stroke="#728c7c" />
                      <YAxis stroke="#728c7c" />
                      <Tooltip
                        formatter={(val: any) => [`${Number(val).toLocaleString()} kg`, 'Demand']}
                        contentStyle={{ background: '#fff', borderRadius: 8, border: '1px solid #e3e8df' }}
                      />
                      <Bar dataKey="demand" fill="#29704d" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
