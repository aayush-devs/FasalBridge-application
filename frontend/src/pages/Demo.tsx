import React, { useState } from 'react';
import { ArrowRight, CircleCheck, Sparkles, RefreshCw } from 'lucide-react';
import { apiPost } from '../api/client';
import { OrderData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Demo: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(0);
  const [order, setOrder] = useState<OrderData | null>(null);
  const [running, setRunning] = useState<boolean>(false);

  const demoSteps = [
    {
      title: t('demo_step1_title'),
      detail: t('demo_step1_desc'),
    },
    {
      title: t('demo_step2_title'),
      detail: t('demo_step2_desc'),
    },
    {
      title: t('demo_step3_title'),
      detail: t('demo_step3_desc'),
    },
    {
      title: t('demo_step4_title'),
      detail: t('demo_step4_desc'),
    },
    {
      title: t('demo_step5_title'),
      detail: t('demo_step5_desc'),
    },
    {
      title: t('demo_step6_title'),
      detail: t('demo_step6_desc'),
    },
    {
      title: t('demo_step7_title'),
      detail: t('demo_step7_desc'),
    },
    {
      title: t('demo_step8_title'),
      detail: t('demo_step8_desc'),
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
          <div className="eyebrow-tag">{t('demo_eyebrow')}</div>
          <h1 className="demo-hero-title">{t('demo_title')}</h1>
          <p className="demo-hero-sub">
            {t('demo_desc')}
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
                    {step === 0 ? t('demo_btn_init') : running ? t('demo_btn_processing') : t('demo_btn_next')}
                  </span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <div className="demo-completed-box">
                  <div className="completion-banner">
                    <CircleCheck size={26} />
                    <span>{t('demo_completion_msg')}</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary reset-btn"
                    onClick={handleReset}
                  >
                    <RefreshCw size={16} />
                    <span>{t('demo_btn_reset')}</span>
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
