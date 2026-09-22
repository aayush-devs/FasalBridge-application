import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiGet, CROPS, formatRupee } from '../api/client';
import { ProduceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Marketplace: React.FC = () => {
  const { t, translateCrop, translateLocation } = useLanguage();
  const [items, setItems] = useState<ProduceItem[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiGet<ProduceItem[]>('/produce')
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching marketplace items:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesCrop = !selectedCrop || item.crop.toLowerCase() === selectedCrop.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      !searchQuery ||
      item.crop.toLowerCase().includes(query) ||
      item.farmer.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);
    return matchesCrop && matchesQuery;
  });

  const getCropEmoji = (crop: string) => {
    switch (crop.toLowerCase()) {
      case 'tomato':
        return '🍅';
      case 'onion':
        return '🧅';
      case 'potato':
        return '🥔';
      case 'wheat':
        return '🌾';
      case 'rice':
        return '🌾';
      default:
        return '🌱';
    }
  };

  return (
    <div className="marketplace-page">
      <PageHead
        tag={t('market_page_tag')}
        title={t('market_page_title')}
        text={t('market_page_desc')}
      />

      <main className="marketplace-main">
        {/* Search & Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t('market_search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="crop-select-filter"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="">{t('all_crops')}</option>
            {CROPS.map((c) => (
              <option key={c} value={c}>
                {translateCrop(c)}
              </option>
            ))}
          </select>
        </div>

        {/* Produce Cards Grid */}
        {loading ? (
          <div className="loading-placeholder">{t('loading')}</div>
        ) : filteredItems.length === 0 ? (
          <div className="empty-placeholder">
            <h3>{t('market_no_results')}</h3>
            <p>{t('market_no_results_sub')}</p>
          </div>
        ) : (
          <div className="produce-cards-grid">
            {filteredItems.map((item) => (
              <article className="produce-card" key={item.id}>
                <div className="produce-card-top">
                  <span className="produce-emoji">{getCropEmoji(item.crop)}</span>
                  <div className="produce-badges">
                    <span className="grade-chip grade-a">{item.grade}</span>
                  </div>
                </div>

                <div className="produce-card-body">
                  <div className="location-badge">
                    <MapPin size={13} />
                    <span>{translateLocation(item.location)}</span>
                  </div>
                  <h3 className="produce-crop-title">{translateCrop(item.crop)}</h3>
                  <p className="produce-farmer-text">
                    <b>{item.available_quantity.toLocaleString()} {t('unit_kg')}</b> {t('market_available_from')} {item.farmer}
                  </p>
                  <span className="produce-harvest-date">{t('harvest_date')}: {item.harvest_date}</span>
                </div>

                <div className="produce-card-footer">
                  <div className="produce-price-box">
                    <span className="price-main">{formatRupee(item.price)}</span>
                    <span className="price-unit">{t('unit_per_kg')}</span>
                  </div>
                  <Link
                    to={`/order?crop=${encodeURIComponent(item.crop)}`}
                    className="order-cta-btn"
                    title={`${t('order_btn_short')} ${translateCrop(item.crop)}`}
                  >
                    <span>{t('order_btn_short')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
