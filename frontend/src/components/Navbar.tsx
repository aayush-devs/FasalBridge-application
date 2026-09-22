import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

      <button
        type="button"
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
        <Link
          to="/marketplace"
          className={isActive('/marketplace') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          Marketplace
        </Link>
        <Link
          to="/farmer"
          className={isActive('/farmer') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          Farmer Hub & Map
        </Link>
        <Link
          to="/logistics"
          className={isActive('/logistics') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          Smart Logistics
        </Link>
        <Link
          to="/analytics"
          className={isActive('/analytics') ? 'active-link' : ''}
          onClick={() => setIsOpen(false)}
        >
          Analytics
        </Link>
        <Link
          className="demo-nav-btn"
          to="/demo"
          onClick={() => setIsOpen(false)}
        >
          <span>Run Live Demo</span>
          <ArrowRight size={16} />
        </Link>
      </nav>
    </header>
  );
};
