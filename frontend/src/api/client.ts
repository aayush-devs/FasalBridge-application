const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) {
    let errorMsg = 'Failed to fetch data';
    try {
      const errorJson = await response.json();
      errorMsg = errorJson.detail || errorMsg;
    } catch {
      // fallback
    }
    throw new Error(errorMsg);
  }
  return response.json();
}

export async function apiPost<T>(path: string, body: any, method: string = 'POST'): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || `Request failed with status ${response.status}`);
  }
  return data as T;
}

export const formatRupee = (num: number): string =>
  '₹' + Math.round(num).toLocaleString('en-IN');

export const CROPS = ['Tomato', 'Onion', 'Potato', 'Wheat', 'Rice'] as const;
export const LOCATIONS = ['Mohali', 'Chandigarh', 'Patiala', 'Ludhiana', 'Delhi'] as const;
