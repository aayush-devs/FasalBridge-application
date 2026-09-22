import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, ShoppingCart } from 'lucide-react';
import { PageHead } from '../components/PageHead';
import { apiGet, CROPS, formatRupee } from '../api/client';
import { ProduceItem } from '../types';

export const Marketplace: React.FC = () => {
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
        tag="BUYER SOURCING MARKETPLACE"
        title="Source closer. Know more."
        text="Discover verified farm lots with zero middleman markups and transparent pooled delivery sequencing."
      />

      <main className="marketplace-main">
        {/* Search & Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by crop, farmer name, or regional hub (e.g. Mohali, Patiala)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className="crop-select-filter"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="">All Crops</option>
            {CROPS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Produce Cards Grid */}
        {loading ? (
          <div className="loading-placeholder">Loading live produce marketplace…</div>
        ) : filteredItems.length === 0 ? (
          <div className="empty-placeholder">
            <h3>No produce matching your filter</h3>
            <p>Try selecting a different crop or clearing your search query.</p>
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
                    <span>{item.location}</span>
                  </div>
                  <h3 className="produce-crop-title">{item.crop}</h3>
                  <p className="produce-farmer-text">
                    <b>{item.available_quantity.toLocaleString()} kg</b> available from {item.farmer}
                  </p>
                  <span className="produce-harvest-date">Harvest date: {item.harvest_date}</span>
                </div>

                <div className="produce-card-footer">
                  <div className="produce-price-box">
                    <span className="price-main">{formatRupee(item.price)}</span>
                    <span className="price-unit">/kg</span>
                  </div>
                  <Link
                    to={`/order?crop=${encodeURIComponent(item.crop)}`}
                    className="order-cta-btn"
                    title={`Order ${item.crop}`}
                  >
                    <span>Order</span>
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
