import React, { useEffect, useState } from 'react';
import {
  Package,
  ShoppingBasket,
  Leaf,
  Truck,
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
import { useLanguage } from '../context/LanguageContext';

export const Analytics: React.FC = () => {
  const { t, translateCrop } = useLanguage();
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
        tag={t('ana_page_tag')}
        title={t('ana_page_title')}
        text={t('ana_page_desc')}
      />

      <main className="analytics-main">
        {loading ? (
          <div className="loading-placeholder">{t('loading')}</div>
        ) : (
          <>
            {/* KPI Cards */}
            <section className="metrics-grid">
              <article className="metric-card">
                <div className="metric-icon-box">
                  <Leaf size={20} />
                </div>
                <span className="metric-label">{t('ana_kpi_farmers')}</span>
                <strong className="metric-value">{data?.farmers || 10}</strong>
                <span className="metric-sub">{t('ana_kpi_farmers_sub')}</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <ShoppingBasket size={20} />
                </div>
                <span className="metric-label">{t('ana_kpi_buyers')}</span>
                <strong className="metric-value">{data?.buyers || 5}</strong>
                <span className="metric-sub">{t('ana_kpi_buyers_sub')}</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <Package size={20} />
                </div>
                <span className="metric-label">{t('ana_kpi_traded')}</span>
                <strong className="metric-value">{data?.traded?.toLocaleString() || '12,800'} {t('unit_kg')}</strong>
                <span className="metric-sub green-sub">{t('ana_kpi_traded_sub')}</span>
              </article>

              <article className="metric-card">
                <div className="metric-icon-box">
                  <Truck size={20} />
                </div>
                <span className="metric-label">{t('ana_kpi_distance')}</span>
                <strong className="metric-value">{data?.average_distance || 42} km</strong>
                <span className="metric-sub">{t('ana_kpi_distance_sub')}</span>
              </article>
            </section>

            {/* Visual Analytics Charts */}
            <section className="charts-grid">
              <div className="panel chart-panel">
                <div className="panel-header-simple">
                  <div className="panel-title-with-icon">
                    <LineChartIcon size={20} />
                    <h3>{t('ana_chart_velocity_title')}</h3>
                  </div>
                  <span className="panel-tag">{t('ana_chart_velocity_tag')}</span>
                </div>
                <div className="chart-box">
                  <ResponsiveContainer width="100%" height={260}>
                    <LineChart data={data?.orders_over_time} margin={{ top: 10, right: 15, left: 5, bottom: 5 }}>
                      <XAxis dataKey="week" stroke="#728c7c" tick={{ fontSize: 12 }} />
                      <YAxis stroke="#728c7c" width={35} allowDecimals={false} tick={{ fontSize: 12 }} />
                      <Tooltip
                        formatter={(val: any) => [`${Number(val).toLocaleString()}`, t('ana_chart_orders')]}
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
                    <h3>{t('ana_chart_demand_title')}</h3>
                  </div>
                  <span className="panel-tag">{t('ana_chart_demand_tag')}</span>
                </div>
                <div className="chart-box">
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={data?.demand} margin={{ top: 10, right: 15, left: 10, bottom: 5 }}>
                      <XAxis
                        dataKey="crop"
                        stroke="#728c7c"
                        tick={{ fontSize: 12 }}
                        tickFormatter={(crop: string) => translateCrop(crop)}
                      />
                      <YAxis
                        stroke="#728c7c"
                        width={45}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(val: number) =>
                          val >= 1000 ? `${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}k` : `${val}`
                        }
                      />
                      <Tooltip
                        formatter={(val: any) => [`${Number(val).toLocaleString()} ${t('unit_kg')}`, t('ana_chart_demand')]}
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
