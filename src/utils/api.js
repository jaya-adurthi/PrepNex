const API_BASE = import.meta.env.VITE_API_URL || '/api';

export function getToken() {
  return localStorage.getItem('prepnex_token');
}

export function setToken(token) {
  if (token) {
    localStorage.setItem('prepnex_token', token);
  } else {
    localStorage.removeItem('prepnex_token');
  }
}

export async function apiRequest(endpoint, method = 'GET', data = null) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, config);
    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || 'API Request failed');
    }

    return result;
  } catch (err) {
    console.error(`API Error [${method} ${endpoint}]:`, err.message);
    throw err;
  }
}
