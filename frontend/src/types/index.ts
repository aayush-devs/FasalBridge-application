export interface User {
  id: number;
  name: string;
  email: string;
  role: 'FARMER' | 'BUYER' | 'LOGISTICS';
  location: string;
}

export interface ProduceItem {
  id: number;
  farmer_id: number;
  farmer: string;
  crop: string;
  quantity: number;
  available_quantity: number;
  price: number;
  location: string;
  grade: string;
  harvest_date: string;
  lat: number;
  lng: number;
}

export interface Allocation {
  farmer: string;
  quantity: number;
  price: number;
  location: string;
  lat?: number;
  lng?: number;
}

export interface OrderData {
  id: number;
  code: string;
  crop: string;
  quantity: number;
  delivery_location: string;
  required_date: string;
  status: 'MATCHED' | 'PICKUP' | 'IN TRANSIT' | 'DELIVERED';
  total_price: number;
  buyer: string;
  allocations: Allocation[];
  route_id?: number | null;
}

export interface FarmStop {
  name: string;
  location: string;
  lat: number;
  lng: number;
  quantity: number;
  crop?: string;
  price?: number;
}

export interface RouteData {
  id: number;
  order_id: number;
  code: string;
  crop: string;
  status: 'PLANNED' | 'PICKUP' | 'IN TRANSIT' | 'DELIVERED';
  distance: number;
  stops: number;
  load: number;
  buyer: string;
  buyer_lat?: number;
  buyer_lng?: number;
  farms: FarmStop[];
}

export interface ForecastHistoryItem {
  week: string;
  demand: number;
}

export interface ForecastData {
  crop: string;
  history: ForecastHistoryItem[];
  current: number;
  predicted: number;
  change: number;
  confidence: number;
  recommended: number;
  disclaimer: string;
}

export interface DemandByCrop {
  crop: string;
  demand: number;
}

export interface OrderTimeTrend {
  week: string;
  orders: number;
}

export interface AnalyticsData {
  farmers: number;
  buyers: number;
  listings: number;
  orders: number;
  traded: number;
  average_distance: number;
  demand: DemandByCrop[];
  orders_over_time: OrderTimeTrend[];
}

export interface MatchChoice {
  listing_id: number;
  farmer: string;
  quantity: number;
  available: number;
  distance: number;
  price: number;
  score: number;
  location: string;
  lat: number;
  lng: number;
}

export interface MatchResponse {
  matches: MatchChoice[];
  available: number;
  unfilled: number;
  score: number;
  reasons: string[];
}
