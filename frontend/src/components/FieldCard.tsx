import React from 'react';
import { MapPin, Calendar, CheckCircle2, Navigation } from 'lucide-react';
import { ProduceItem } from '../types';
import { formatRupee } from '../api/client';

interface FieldCardProps {
  item: ProduceItem;
  isSelected?: boolean;
  onSelect?: (item: ProduceItem) => void;
  onLocate?: (item: ProduceItem) => void;
}

export const FieldCard: React.FC<FieldCardProps> = ({
  item,
  isSelected = false,
  onSelect,
  onLocate,
}) => {
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
    <article
      className={`field-card ${isSelected ? 'field-card-selected' : ''}`}
      onClick={() => onSelect && onSelect(item)}
    >
      <div className="field-card-header">
        <div className="field-crop-icon">{getCropEmoji(item.crop)}</div>
        <div className="field-title-group">
          <span className="field-farmer-name">{item.farmer}</span>
          <h3 className="field-crop-name">{item.crop}</h3>
        </div>
        <span className={`grade-chip ${item.grade === 'Grade A' ? 'grade-a' : 'grade-b'}`}>
          {item.grade}
        </span>
      </div>

      <div className="field-meta-grid">
        <div className="meta-item">
          <MapPin size={14} className="meta-icon" />
          <span>{item.location}</span>
        </div>
        <div className="meta-item">
          <Calendar size={14} className="meta-icon" />
          <span>Harvest: {item.harvest_date}</span>
        </div>
      </div>

      <div className="field-quantity-box">
        <div className="qty-row">
          <span className="qty-label">Available Supply:</span>
          <strong className="qty-val">{item.available_quantity.toLocaleString()} kg</strong>
        </div>
        <div className="qty-bar-bg">
          <div
            className="qty-bar-fill"
            style={{
              width: `${Math.min(100, Math.max(15, (item.available_quantity / item.quantity) * 100))}%`,
            }}
          />
        </div>
      </div>

      <div className="field-card-footer">
        <div className="field-pricing">
          <span className="price-val">{formatRupee(item.price)}</span>
          <span className="price-unit">/kg</span>
        </div>

        {onLocate && (
          <button
            type="button"
            className={`locate-btn ${isSelected ? 'locate-btn-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onLocate(item);
            }}
            title="Focus this farm on map"
          >
            <Navigation size={14} />
            <span>{isSelected ? 'Focused on Map' : 'Locate'}</span>
          </button>
        )}
      </div>

      <div className="field-geo-coords">
        <span>GPS: {item.lat.toFixed(4)}°N, {item.lng.toFixed(4)}°E</span>
        <span className="verified-badge">
          <CheckCircle2 size={12} /> Verified Farm
        </span>
      </div>
    </article>
  );
};
