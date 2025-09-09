export const API_BASE_URL = 'https://server-fmp.onrender.com/api/v2';

export const API_ENDPOINTS = {
  // User endpoints
  LOGIN: '/user/login-user',
  REGISTER: '/user/create-user',
  
  // Product endpoints
  GET_FRUITS: '/product/get-fruits',
  GET_VEGETABLES: '/product/get-Vegetables',
  GET_GRAINS: '/product/get-grains',
  GET_MILK_PRODUCTS: '/product/milk-products',
  GET_PRODUCTS_BY_CATEGORY: '/product/get-products-by-category',
  
  // Cart endpoints
  GET_CART: '/cart/cart',
  ADD_TO_CART: '/cart/add-to-cart',
  UPDATE_QUANTITY: '/cart/update-quantity',
  REMOVE_FROM_CART: '/cart/remove-from-cart',
  
  // Order endpoints
  CREATE_ORDER: '/order/create-order',
  GET_USER_ORDERS: '/order/get-all-orders',
  
  // Contact endpoint
  CONTACT: '/users/contact'
};

export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;