import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export interface MapMarkerItem {
  id: string | number;
  name: string;
  lat: number;
  lng: number;
  role?: 'FARM' | 'BUYER' | 'LOGISTICS';
  crop?: string;
  quantity?: number;
  price?: number;
  locationName?: string;
  grade?: string;
}

interface RealMapProps {
  markers: MapMarkerItem[];
  destination?: { name: string; lat: number; lng: number };
  showRoutePolyline?: boolean;
  selectedId?: string | number | null;
  onMarkerClick?: (marker: MapMarkerItem) => void;
  height?: string;
}

export const RealMap: React.FC<RealMapProps> = ({
  markers,
  destination,
  showRoutePolyline = false,
  selectedId,
  onMarkerClick,
  height = '420px',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);
  const markersMapRef = useRef<Map<string | number, L.Marker>>(new Map());

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Default center: Punjab / Chandigarh agri-hub
    const defaultCenter: [number, number] = [30.7046, 76.7179];

    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: 9,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const layerGroup = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;
    layerGroupRef.current = layerGroup;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      layerGroupRef.current = null;
      markersMapRef.current.clear();
    };
  }, []);

  // Update Markers, Route Polyline & Bounds / Focus
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();
    markersMapRef.current.clear();

    const latLngs: L.LatLngExpression[] = [];

    // Add Farm Markers
    markers.forEach((m, idx) => {
      const isSelected = String(selectedId) === String(m.id);
      const farmIcon = L.divIcon({
        className: 'custom-map-icon',
        html: `
          <div class="map-pin farm-pin ${isSelected ? 'selected-pin' : ''}">
            <div class="pin-badge">🌱</div>
            <div class="pin-label">${m.name}</div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 36],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([m.lat, m.lng], { icon: farmIcon });
      latLngs.push([m.lat, m.lng]);
      markersMapRef.current.set(m.id, marker);

      const popupContent = `
        <div class="map-popup-card">
          <div class="popup-tag">FARM LOT #${idx + 1}</div>
          <h4>${m.name}</h4>
          <p class="popup-loc">📍 ${m.locationName || 'Punjab'}</p>
          ${m.crop ? `<div class="popup-crop"><strong>${m.crop}</strong> ${m.grade ? `<span class="chip-sm">${m.grade}</span>` : ''}</div>` : ''}
          ${m.quantity ? `<div class="popup-stat"><span>Quantity:</span> <b>${m.quantity.toLocaleString()} kg</b></div>` : ''}
          ${m.price ? `<div class="popup-stat"><span>Price:</span> <b>₹${m.price}/kg</b></div>` : ''}
          <div class="popup-coords">${m.lat.toFixed(4)}°N, ${m.lng.toFixed(4)}°E</div>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => {
        if (onMarkerClick) onMarkerClick(m);
      });

      layerGroup.addLayer(marker);
    });

    // Add Destination Marker if provided
    if (destination) {
      const buyerIcon = L.divIcon({
        className: 'custom-map-icon',
        html: `
          <div class="map-pin buyer-pin">
            <div class="pin-badge">🏢</div>
            <div class="pin-label">${destination.name}</div>
          </div>
        `,
        iconSize: [42, 42],
        iconAnchor: [21, 38],
        popupAnchor: [0, -34],
      });

      const buyerMarker = L.marker([destination.lat, destination.lng], { icon: buyerIcon });
      latLngs.push([destination.lat, destination.lng]);

      buyerMarker.bindPopup(`
        <div class="map-popup-card">
          <div class="popup-tag buyer-tag">DELIVERY DESTINATION</div>
          <h4>${destination.name}</h4>
          <p class="popup-loc">📍 Central Fulfillment Hub</p>
          <div class="popup-coords">${destination.lat.toFixed(4)}°N, ${destination.lng.toFixed(4)}°E</div>
        </div>
      `);
      layerGroup.addLayer(buyerMarker);

      // Draw Pooled Route Polyline from farms to destination
      if (showRoutePolyline && markers.length > 0) {
        const routePoints: L.LatLngExpression[] = markers.map((m) => [m.lat, m.lng]);
        routePoints.push([destination.lat, destination.lng]);

        const polyline = L.polyline(routePoints, {
          color: '#ed9d35',
          weight: 4,
          opacity: 0.85,
          dashArray: '8, 8',
          lineCap: 'round',
        });
        layerGroup.addLayer(polyline);
      }
    }

    // Handle Active Focus or Fit All Bounds
    if (selectedId) {
      const selectedMarker =
        markersMapRef.current.get(selectedId) ||
        Array.from(markersMapRef.current.entries()).find(([k]) => String(k) === String(selectedId))?.[1];

      if (selectedMarker) {
        const pos = selectedMarker.getLatLng();
        map.flyTo(pos, 13, { duration: 1.0 });
        setTimeout(() => {
          selectedMarker.openPopup();
        }, 300);
      }
    } else if (latLngs.length > 0) {
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 12,
      });
    }
  }, [markers, destination, showRoutePolyline, selectedId, onMarkerClick]);

  return (
    <div className="real-map-wrapper" style={{ height }}>
      <div ref={mapContainerRef} className="real-map-container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
