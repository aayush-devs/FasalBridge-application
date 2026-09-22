import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ArrowRight, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <Link className="brand-logo" to="/">
        <span className="brand-icon">
          <Leaf size={20} />
        </span>
        <span className="brand-text">
          FasalBridge <i className="brand-accent">AI</i>
        </span>
      </Link>

      <div className="header-right-tools">
        {/* Language Switcher */}
        <div className="language-selector-group">
          <Globe size={15} className="lang-icon" />
          <button
            type="button"
            className={`lang-btn ${language === 'en' ? 'lang-btn-active' : ''}`}
            onClick={() => setLanguage('en')}
            title="Switch to English"
          >
            EN
          </button>
          <span className="lang-divider">|</span>
          <button
            type="button"
            className={`lang-btn ${language === 'hi' ? 'lang-btn-active' : ''}`}
            onClick={() => setLanguage('hi')}
            title="हिन्दी में बदलें"
          >
            हिन्दी
          </button>
          <span className="lang-divider">|</span>
          <button
            type="button"
            className={`lang-btn ${language === 'pa' ? 'lang-btn-active' : ''}`}
            onClick={() => setLanguage('pa')}
            title="ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ"
          >
            ਪੰਜਾਬੀ
          </button>
        </div>

        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
        <Link
          to="/marketplace"
          className={isActive('/marketplace') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          {t('nav_marketplace')}
        </Link>
        <Link
          to="/farmer"
          className={isActive('/farmer') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          {t('nav_farmer_hub')}
        </Link>
        <Link
          to="/logistics"
          className={isActive('/logistics') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          {t('nav_logistics')}
        </Link>
        <Link
          to="/analytics"
          className={isActive('/analytics') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          {t('nav_analytics')}
        </Link>
        <Link
          className="demo-nav-btn"
          to="/demo"
          onClick={() => setIsOpen(false)}
        >
          <span>{t('nav_demo')}</span>
          <ArrowRight size={16} />
        </Link>
      </nav>
    </header>
  );
};
