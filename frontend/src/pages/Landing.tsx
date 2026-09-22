import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Leaf,
  MapPin,
  ShoppingBasket,
  TrendingUp,
  Truck,
  Zap,
} from 'lucide-react';

export const Landing: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="eyebrow-tag">✦ NEXT-GEN DIRECT AGRI-MARKETPLACE</div>
          <h1 className="hero-title">
            Predict demand.<br />
            <em className="hero-highlight">Connect directly.</em><br />
            Deliver smarter.
          </h1>
          <p className="hero-description">
            FasalBridge AI bridges farmers, FPOs, and bulk buyers using predictive machine learning
            and pooled multi-farm green logistics. Minimize post-harvest loss and eliminate middleman friction.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/marketplace">
              <span>Explore Marketplace</span>
              <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-secondary" to="/farmer">
              <span>Farmer Hub & Live Map</span>
            </Link>
            <Link className="btn btn-tertiary" to="/demo">
              <span>Run Live Demo</span>
            </Link>
          </div>

          {/* Workflow Sequence */}
          <div className="hero-flow">
            <div className="flow-step">
              <Leaf className="flow-icon" size={20} />
              <span>Farmer / FPO</span>
            </div>
            <ArrowRight className="flow-arrow" size={16} />
            <div className="flow-step">
              <Brain className="flow-icon" size={20} />
              <span>AI Match</span>
            </div>
            <ArrowRight className="flow-arrow" size={16} />
            <div className="flow-step">
              <Truck className="flow-icon" size={20} />
              <span>Pooled Route</span>
            </div>
            <ArrowRight className="flow-arrow" size={16} />
            <div className="flow-step">
              <ShoppingBasket className="flow-icon" size={20} />
              <span>Buyer Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value Props */}
      <section className="features-section">
        <div className="section-container">
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <Brain size={28} />
              </div>
              <h3>AI Demand Forecasting</h3>
              <p>
                Turn historical consumer and wholesale orders into actionable weekly harvest recommendations
                using linear trend modeling.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <MapPin size={28} />
              </div>
              <h3>Live GIS Regional Mapping</h3>
              <p>
                Explore verified farm coordinates, soil and harvest statuses, and local cluster availability
                on an interactive OpenStreetMap engine.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck size={28} />
              </div>
              <h3>Pooled Green Logistics</h3>
              <p>
                Automatically aggregate multiple smallholder lots along an optimized nearest-neighbor route,
                cutting transit costs by up to 32%.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="quick-stats-section">
        <div className="section-container">
          <div className="stats-row">
            <div className="stat-box">
              <TrendingUp className="stat-icon" size={24} />
              <strong>94%</strong>
              <span>Forecast Accuracy</span>
            </div>
            <div className="stat-box">
              <Zap className="stat-icon" size={24} />
              <strong>0%</strong>
              <span>Platform Markup</span>
            </div>
            <div className="stat-box">
              <MapPin className="stat-icon" size={24} />
              <strong>5 Hubs</strong>
              <span>Punjab & NCR Coverage</span>
            </div>
            <div className="stat-box">
              <Truck className="stat-icon" size={24} />
              <strong>35%</strong>
              <span>Lower Food Miles</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
