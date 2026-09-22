import React from 'react';
import { Leaf, ShieldCheck, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-pill">
            <Leaf size={16} />
            <span>FasalBridge AI</span>
          </div>
          <p>{t('footer_desc')}</p>
        </div>

        <div className="footer-badges">
          <span className="badge-item">
            <Cpu size={14} /> {t('footer_badge1')}
          </span>
          <span className="badge-item">
            <ShieldCheck size={14} /> {t('footer_badge2')}
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {t('footer_copyright')}</span>
      </div>
    </footer>
  );
};
