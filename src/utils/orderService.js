import { apiRequest } from './api';
import { getApiUrl, API_ENDPOINTS } from '../constants/api';
import { getUserId } from './auth';

export const createOrder = async (orderData) => {
  try {
    const response = await apiRequest(getApiUrl(API_ENDPOINTS.CREATE_ORDER), {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserOrders = async () => {
  try {
    const userId = getUserId();
    const response = await apiRequest(getApiUrl(`${API_ENDPOINTS.GET_USER_ORDERS}/${userId}`));
    return response;
  } catch (error) {
    throw error;
  }
};