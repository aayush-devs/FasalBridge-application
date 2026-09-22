import React from 'react';
import { Leaf, ShieldCheck, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-pill">
            <Leaf size={16} />
            <span>FasalBridge AI</span>
          </div>
          <p>
            Autonomous agricultural demand forecasting, multi-farmer aggregation, and pooled green logistics.
          </p>
        </div>

        <div className="footer-badges">
          <span className="badge-item">
            <Cpu size={14} /> Linear Regression Trend Engine
          </span>
          <span className="badge-item">
            <ShieldCheck size={14} /> Verified Direct Farmer Supply
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FasalBridge AI · Production-Ready Agri-Tech Architecture</span>
      </div>
    </footer>
  );
};
