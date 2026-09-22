import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Brain, CircleCheck, Truck, AlertCircle, ShieldCheck, Info } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiPost, CROPS, LOCATIONS, formatRupee } from '../api/client';
import { OrderData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialCrop = queryParams.get('crop') || 'Tomato';
  const { t, translateCrop, translateLocation } = useLanguage();

  const [form, setForm] = useState({
    buyer_id: 11,
    crop: initialCrop,
    quantity: 3500,
    delivery_location: 'Chandigarh',
    required_date: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 10),
  });

  const [orderResult, setOrderResult] = useState<OrderData | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await apiPost<OrderData>('/orders', form);
      setOrderResult(res);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to match and place order.');
    } finally {
      setSubmitting(false);
    }
  };

  // -------------------------------------------------------------------------
  // Precise Mathematical Cost Breakdown (0.3% platform fee capped at ₹200)
  // -------------------------------------------------------------------------
  const quantity = orderResult ? orderResult.quantity : 0;
  const produceTotal = orderResult ? orderResult.total_price : 0;
  const avgFarmerRate = quantity > 0 ? produceTotal / quantity : 0;

  // Logistics: ₹3.00 per kg
  const logisticsRate = 3.0;
  const logisticsTotal = quantity * logisticsRate;

  // Platform Fee: 0.3% of produce value, strictly capped at ₹200 max
  const rawPlatformFee = produceTotal * 0.003;
  const platformFee = Math.min(200.0, Math.round(rawPlatformFee * 100) / 100);
  const isCapped = rawPlatformFee >= 200.0;
  const effectivePlatformRate = quantity > 0 ? platformFee / quantity : 0;

  // Total Landed Payable
  const totalPayable = produceTotal + logisticsTotal + platformFee;
  const netLandedRate = quantity > 0 ? totalPayable / quantity : 0;

  return (
    <div className="order-page">
      <PageHead
        tag={t('order_page_tag')}
        title={orderResult ? t('order_page_title_result') : t('order_page_title_new')}
        text={orderResult ? t('order_page_desc_result') : t('order_page_desc_new')}
      />

      <main className="order-page-main">
        {!orderResult ? (
          <div className="order-form-container">
            <form className="order-form panel" onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label htmlFor="order-crop">
                  <span>{t('order_crop_label')}</span>
                  <select
                    id="order-crop"
                    value={form.crop}
                    onChange={(e) => setForm({ ...form, crop: e.target.value })}
                    required
                  >
                    {CROPS.map((c) => (
                      <option key={c} value={c}>
                        {translateCrop(c)}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="order-qty">
                  <span>{t('order_quantity_label')}</span>
                  <input
                    id="order-qty"
                    type="number"
                    min="100"
                    step="100"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: Math.max(100, +e.target.value) })}
                    required
                  />
                </label>
              </div>

              <div className="form-field-group">
                <label htmlFor="order-dest">
                  <span>{t('order_destination_label')}</span>
                  <select
                    id="order-dest"
                    value={form.delivery_location}
                    onChange={(e) => setForm({ ...form, delivery_location: e.target.value })}
                    required
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {translateLocation(loc)}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="order-date">
                  <span>{t('order_date_label')}</span>
                  <input
                    id="order-date"
                    type="date"
                    value={form.required_date}
                    onChange={(e) => setForm({ ...form, required_date: e.target.value })}
                    required
                  />
                </label>
              </div>

              {errorMsg && (
                <div className="form-feedback feedback-error">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary order-btn" disabled={submitting}>
                <Brain size={18} />
                <span>{submitting ? t('order_submitting_btn') : t('order_submit_btn')}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="order-result-card panel">
            {/* Header with Order Code */}
            <div className="result-header">
              <CircleCheck size={44} className="result-check-icon" />
              <div>
                <span className="result-badge">
                  {t('order_result_badge')} · {orderResult.allocations.length} {t('order_farmers_pooled')}
                </span>
                <h2 className="result-code">
                  {t('order_result_code')}
                  {orderResult.code}
                </h2>
                <p className="result-summary">
                  {orderResult.quantity.toLocaleString()} kg {translateCrop(orderResult.crop)} ·{' '}
                  <strong>{formatRupee(totalPayable)}</strong> (All-Inclusive Landed)
                </p>
              </div>
            </div>

            {/* Pooled Farm Allocations */}
            <div className="allocations-list">
              <h4>Pooled Farm Contributors ({orderResult.allocations.length}):</h4>
              {orderResult.allocations.map((alloc, idx) => (
                <div className="allocation-item" key={idx}>
                  <div className="alloc-farmer-info">
                    <span className="alloc-num">#{idx + 1}</span>
                    <strong>{alloc.farmer}</strong>
                    <span className="alloc-loc">📍 {translateLocation(alloc.location)}</span>
                  </div>
                  <div className="alloc-numbers">
                    <span>{alloc.quantity.toLocaleString()} kg</span>
                    <span>@ {formatRupee(alloc.price)}/kg</span>
                    <b>{formatRupee(alloc.quantity * alloc.price)}</b>
                  </div>
                </div>
              ))}
            </div>

            {/* Mathematically Rigorous Cost & Fee Breakdown */}
            <div className="order-cost-breakdown-box">
              <div className="breakdown-header-bar">
                <h3>{t('order_breakdown_title')}</h3>
                <span className="fee-cap-chip">
                  <ShieldCheck size={13} />
                  <span>{t('order_platform_fee_badge')}</span>
                </span>
              </div>

              <div className="cost-table">
                <div className="cost-table-header">
                  <span className="col-item">{t('order_col_item')}</span>
                  <span className="col-rate">{t('order_col_rate')}</span>
                  <span className="col-amount">{t('order_col_amount')}</span>
                </div>

                {/* Row 1: Direct Produce */}
                <div className="cost-table-row">
                  <div className="col-item">
                    <strong>{t('order_produce_farmer_subtotal')}</strong>
                    <small className="col-subtext">Direct payment across {orderResult.allocations.length} farm lots</small>
                  </div>
                  <div className="col-rate">₹{avgFarmerRate.toFixed(2)}/kg</div>
                  <div className="col-amount">{formatRupee(produceTotal)}</div>
                </div>

                {/* Row 2: Green Logistics */}
                <div className="cost-table-row">
                  <div className="col-item">
                    <strong>{t('order_logistics_fee')}</strong>
                    <small className="col-subtext">Consolidated farm-to-hub nearest-neighbor transport</small>
                  </div>
                  <div className="col-rate">₹{logisticsRate.toFixed(2)}/kg</div>
                  <div className="col-amount">{formatRupee(logisticsTotal)}</div>
                </div>

                {/* Row 3: Platform Service Fee (0.3%, max ₹200) */}
                <div className="cost-table-row fee-row">
                  <div className="col-item">
                    <div className="item-with-badge">
                      <strong>{t('order_platform_fee')}</strong>
                      {isCapped ? (
                        <span className="cap-applied-badge">Max ₹200 Cap Applied</span>
                      ) : (
                        <span className="rate-applied-badge">0.3% Applied</span>
                      )}
                    </div>
                    <small className="col-subtext">
                      0.3% of ₹{produceTotal.toLocaleString('en-IN')} = ₹{rawPlatformFee.toFixed(2)}
                      {isCapped ? ' → strictly capped at ₹200.00' : ''}
                    </small>
                  </div>
                  <div className="col-rate">₹{effectivePlatformRate.toFixed(3)}/kg</div>
                  <div className="col-amount fee-highlight">₹{platformFee.toFixed(2)}</div>
                </div>

                {/* Row 4: Total Landed Amount */}
                <div className="cost-table-row total-row">
                  <div className="col-item">
                    <strong className="total-title">{t('order_total_landed_payable')}</strong>
                    <small className="col-subtext">{t('order_farmer_price_note')}</small>
                  </div>
                  <div className="col-rate total-rate">
                    <span>{t('order_effective_landed_rate')}:</span>
                    <strong>₹{netLandedRate.toFixed(2)}/kg</strong>
                  </div>
                  <div className="col-amount total-amount">
                    <strong>{formatRupee(totalPayable)}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/logistics')}
              >
                <Truck size={18} />
                <span>{t('order_view_route_btn')}</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
