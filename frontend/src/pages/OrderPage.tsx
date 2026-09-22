import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Brain, CircleCheck, Truck, ArrowRight, AlertCircle } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiPost, CROPS, LOCATIONS, formatRupee } from '../api/client';
import { OrderData } from '../types';

export const OrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialCrop = queryParams.get('crop') || 'Tomato';

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

  return (
    <div className="order-page">
      <PageHead
        tag="BUYER DEMAND FULFILLMENT"
        title={orderResult ? 'Optimal supply match confirmed.' : 'Specify procurement requirements.'}
        text={
          orderResult
            ? 'Your bulk order has been pooled across verified nearby farmers with an automated logistics route.'
            : 'FasalBridge AI matches your bulk demand directly against available farm lots to optimize freshness and transit cost.'
        }
      />

      <main className="order-page-main">
        {!orderResult ? (
          <div className="order-form-container">
            <form className="order-form panel" onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label htmlFor="order-crop">
                  <span>Required Crop</span>
                  <select
                    id="order-crop"
                    value={form.crop}
                    onChange={(e) => setForm({ ...form, crop: e.target.value })}
                    required
                  >
                    {CROPS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>

                <label htmlFor="order-qty">
                  <span>Procurement Quantity (kg)</span>
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
                  <span>Delivery Destination</span>
                  <select
                    id="order-dest"
                    value={form.delivery_location}
                    onChange={(e) => setForm({ ...form, delivery_location: e.target.value })}
                    required
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </label>

                <label htmlFor="order-date">
                  <span>Required Delivery Date</span>
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
                <span>{submitting ? 'Calculating Optimal Farm Match…' : 'Find Smart Farm Matches'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="order-result-card panel">
            <div className="result-header">
              <CircleCheck size={44} className="result-check-icon" />
              <div>
                <span className="result-badge">
                  AI-ASSISTED MATCH · {orderResult.allocations.length} FARMERS POOLED
                </span>
                <h2 className="result-code">Order #{orderResult.code}</h2>
                <p className="result-summary">
                  {orderResult.quantity.toLocaleString()} kg {orderResult.crop} ·{' '}
                  <strong>{formatRupee(orderResult.total_price)}</strong>
                </p>
              </div>
            </div>

            {/* Pooled Farm Allocations */}
            <div className="allocations-list">
              <h4>Pooled Farm Contributors:</h4>
              {orderResult.allocations.map((alloc, idx) => (
                <div className="allocation-item" key={idx}>
                  <div className="alloc-farmer-info">
                    <span className="alloc-num">#{idx + 1}</span>
                    <strong>{alloc.farmer}</strong>
                    <span className="alloc-loc">📍 {alloc.location}</span>
                  </div>
                  <div className="alloc-numbers">
                    <span>{alloc.quantity.toLocaleString()} kg</span>
                    <span>@ {formatRupee(alloc.price)}/kg</span>
                    <b>{formatRupee(alloc.quantity * alloc.price)}</b>
                  </div>
                </div>
              ))}
            </div>

            {/* Landed Price Transparency */}
            <div className="price-transparency-breakdown">
              <div className="breakdown-row">
                <span>Weighted Farmer Price:</span>
                <b>{formatRupee(orderResult.total_price / orderResult.quantity)}/kg</b>
              </div>
              <div className="breakdown-row">
                <span>Platform Disintermediation Fee:</span>
                <b className="zero-fee">₹0 (Direct)</b>
              </div>
              <div className="breakdown-row">
                <span>Estimated Green Logistics:</span>
                <b>₹3.00/kg</b>
              </div>
              <div className="breakdown-row landed-row">
                <span>Net Landed Price:</span>
                <strong className="landed-total">
                  {formatRupee(orderResult.total_price / orderResult.quantity + 3.0)}/kg
                </strong>
              </div>
            </div>

            <div className="result-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/logistics')}
              >
                <Truck size={18} />
                <span>View Pooled Pickup Route</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
