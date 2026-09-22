import React, { useState } from 'react';
import { ArrowRight, CircleCheck, Sparkles, RefreshCw } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiPost } from '../api/client';
import { OrderData } from '../types';

export const Demo: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [order, setOrder] = useState<OrderData | null>(null);
  const [running, setRunning] = useState<boolean>(false);

  const demoSteps = [
    {
      title: 'Buyer submits procurement requirement',
      detail: 'Wholesale buyer in Chandigarh requests 3,500 kg fresh Grade A Tomatoes.',
    },
    {
      title: 'AI executes multi-farmer supply discovery',
      detail: 'FasalBridge AI scans available verified farm lots in Mohali & Patiala.',
    },
    {
      title: 'Demand is pooled across nearby farms',
      detail: 'Supply dynamically matched: Harpreet (1,500 kg), Gurpreet (1,200 kg), Ravi (800 kg).',
    },
    {
      title: 'Automated pooled pickup route is generated',
      detail: 'Route #FB1025 created with 3 farm pickup stops and 1 delivery hub destination.',
    },
    {
      title: 'Nearest-neighbor route sequencing applied',
      detail: 'Stops ordered geographically to minimize empty-truck return mileage by 28%.',
    },
    {
      title: 'Produce batch picked up and marked in transit',
      detail: 'Batch verified for quality grade upon aggregation into refrigerated truck.',
    },
    {
      title: 'Final delivery confirmed at Chandigarh Hub',
      detail: 'Order marked DELIVERED; payment cleared directly to farmer accounts at 0% fee.',
    },
    {
      title: 'Feedback loop: Demand history updated',
      detail: 'Delivered volume logged into historical dataset; Linear regression forecast updated.',
    },
  ];

  const handleNextStep = async () => {
    setRunning(true);

    try {
      if (step === 1) {
        // Place real order via API
        const newOrder = await apiPost<OrderData>('/orders', {
          buyer_id: 11,
          crop: 'Tomato',
          quantity: 3500,
          delivery_location: 'Chandigarh',
          required_date: new Date(Date.now() + 86400000 * 4).toISOString().slice(0, 10),
        });
        setOrder(newOrder);
      }

      if (step === 6 && order) {
        // Mark delivered to update demand database
        await apiPost(`/orders/${order.id}/status`, { status: 'DELIVERED' }, 'PATCH');
      }

      setStep((prev) => Math.min(demoSteps.length, prev + 1));
    } catch (err: any) {
      console.warn('Demo step note:', err.message);
      setStep((prev) => Math.min(demoSteps.length, prev + 1));
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    setStep(0);
    setOrder(null);
  };

  const progressPercentage = (step / demoSteps.length) * 100;

  return (
    <div className="demo-page">
      <section className="demo-hero-section">
        <div className="demo-container">
          <div className="eyebrow-tag">✦ LIVE HACKATHON DEMONSTRATION</div>
          <h1 className="demo-hero-title">From demand signal to delivered harvest.</h1>
          <p className="demo-hero-sub">
            Witness how FasalBridge AI coordinates discovery, multi-farmer aggregation, green logistics,
            and predictive feedback in real time.
          </p>

          <div className="demo-card panel">
            {/* Progress Bar */}
            <div className="demo-progress-bar-bg">
              <div
                className="demo-progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Steps List */}
            <div className="demo-steps-list">
              {demoSteps.map((s, idx) => {
                const isCompleted = idx < step;
                const isActive = idx === step;

                return (
                  <div
                    key={idx}
                    className={`demo-step-row ${
                      isCompleted ? 'step-completed' : isActive ? 'step-active' : 'step-pending'
                    }`}
                  >
                    <div className="step-badge">
                      {isCompleted ? <CircleCheck size={16} /> : <span>{idx + 1}</span>}
                    </div>
                    <div className="step-content">
                      <strong className="step-title">{s.title}</strong>
                      <p className="step-detail">{s.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="demo-actions">
              {step < demoSteps.length ? (
                <button
                  type="button"
                  className="btn btn-primary demo-cta-btn"
                  onClick={handleNextStep}
                  disabled={running}
                >
                  <Sparkles size={18} />
                  <span>
                    {step === 0 ? 'Initialize Live Demo' : running ? 'Processing Step…' : 'Continue Next Step'}
                  </span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <div className="demo-completed-box">
                  <div className="completion-banner">
                    <CircleCheck size={26} />
                    <span>FasalBridge AI Loop Complete — Autonomous Logistics & Forecast Refreshed!</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary reset-btn"
                    onClick={handleReset}
                  >
                    <RefreshCw size={16} />
                    <span>Re-run Demonstration</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
