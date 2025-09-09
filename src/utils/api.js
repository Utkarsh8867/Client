import { getToken } from './auth';

export const apiRequest = async (url, options = {}) => {
  const token = getToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const get = (url) => apiRequest(url);
export const post = (url, data) => apiRequest(url, { method: 'POST', body: JSON.stringify(data) });
export const put = (url, data) => apiRequest(url, { method: 'PUT', body: JSON.stringify(data) });
export const del = (url) => apiRequest(url, { method: 'DELETE' });