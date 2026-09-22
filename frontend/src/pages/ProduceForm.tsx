import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiPost, CROPS, LOCATIONS } from '../api/client';

export const ProduceForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    farmer_id: 1,
    crop: 'Tomato',
    quantity: 1200,
    price: 25,
    location: 'Mohali',
    grade: 'Grade A',
    harvest_date: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 10),
  });

  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);

    try {
      await apiPost('/produce', form);
      setStatusMsg({ type: 'success', text: 'Listing published successfully! Redirecting to marketplace…' });
      setTimeout(() => navigate('/marketplace'), 1200);
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message || 'Failed to publish listing.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-page">
      <PageHead
        tag="FARMER SUPPLY ONBOARDING"
        title="List your fresh produce lot."
        text="Define harvest specifications and transparent pricing so nearby buyers can discover and aggregate your supply."
      />

      <main className="form-page-main">
        <div className="form-layout-grid">
          <form className="produce-form panel" onSubmit={handleSubmit}>
            <div className="form-field-group">
              <label htmlFor="crop-select">
                <span>Crop Type</span>
                <select
                  id="crop-select"
                  value={form.crop}
                  onChange={(e) => setForm({ ...form, crop: e.target.value })}
                  required
                >
                  {CROPS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label htmlFor="quantity-input">
                <span>Total Quantity (kg)</span>
                <input
                  id="quantity-input"
                  type="number"
                  min="50"
                  step="10"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: Math.max(0, +e.target.value) })}
                  required
                />
              </label>
            </div>

            <div className="form-field-group">
              <label htmlFor="price-input">
                <span>Price per kg (₹ INR)</span>
                <input
                  id="price-input"
                  type="number"
                  min="1"
                  step="0.5"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: Math.max(1, +e.target.value) })}
                  required
                />
              </label>

              <label htmlFor="location-select">
                <span>Farm District / Hub</span>
                <select
                  id="location-select"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  required
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-field-group">
              <label htmlFor="grade-select">
                <span>Quality Grade</span>
                <select
                  id="grade-select"
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  required
                >
                  <option value="Grade A">Grade A (Export / Premium Retail)</option>
                  <option value="Grade B">Grade B (Standard Wholesale / Processing)</option>
                </select>
              </label>

              <label htmlFor="harvest-date-input">
                <span>Expected Harvest Date</span>
                <input
                  id="harvest-date-input"
                  type="date"
                  value={form.harvest_date}
                  onChange={(e) => setForm({ ...form, harvest_date: e.target.value })}
                  required
                />
              </label>
            </div>

            {statusMsg && (
              <div className={`form-feedback feedback-${statusMsg.type}`}>
                {statusMsg.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{statusMsg.text}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary form-submit-btn" disabled={submitting}>
              <span>{submitting ? 'Publishing…' : 'Publish Farm Listing'}</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Live Preview Panel */}
          <aside className="preview-panel panel">
            <span className="panel-tag">LIVE LISTING PREVIEW</span>
            <h3>Field Summary Card</h3>
            <p className="preview-sub">How buyers will discover your lot in the marketplace:</p>

            <div className="preview-card-box">
              <div className="preview-card-top">
                <span className="preview-emoji">
                  {form.crop === 'Tomato' ? '🍅' : form.crop === 'Onion' ? '🧅' : form.crop === 'Potato' ? '🥔' : '🌾'}
                </span>
                <div>
                  <h4>{form.crop}</h4>
                  <span className="preview-farmer">Harpreet Singh · {form.location}</span>
                </div>
                <span className="grade-chip grade-a">{form.grade}</span>
              </div>

              <div className="preview-stats-row">
                <div>
                  <small>Available Volume</small>
                  <strong>{form.quantity.toLocaleString()} kg</strong>
                </div>
                <div>
                  <small>Direct Farmer Price</small>
                  <strong>₹{form.price}/kg</strong>
                </div>
              </div>

              <div className="preview-footer-note">
                <span>📍 Verified coordinates mapped automatically</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
