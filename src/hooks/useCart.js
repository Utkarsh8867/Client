import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getApiUrl, API_ENDPOINTS } from '../constants/api';
import { apiRequest } from '../utils/api';
import { getUserId, isAuthenticated } from '../utils/auth';

export const useCart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    if (!isAuthenticated()) {
      setLoading(false);
      return;
    }

    const userId = getUserId();
    try {
      const data = await apiRequest(getApiUrl(`${API_ENDPOINTS.GET_CART}/${userId}`));
      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated()) {
      toast.error('Please log in to add products to cart');
      return false;
    }

    try {
      const userId = getUserId();
      await apiRequest(getApiUrl(API_ENDPOINTS.ADD_TO_CART), {
        method: 'POST',
        body: JSON.stringify({ userId, productId, quantity })
      });
      
      toast.success('Product added to cart!');
      fetchCart(); // Refresh cart
      return true;
    } catch (error) {
      toast.error(error.message || 'Failed to add product to cart');
      return false;
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const userId = getUserId();
      await apiRequest(getApiUrl(API_ENDPOINTS.UPDATE_QUANTITY), {
        method: 'POST',
        body: JSON.stringify({ userId, productId, quantity })
      });
      
      fetchCart(); // Refresh cart
      return true;
    } catch (error) {
      toast.error('Failed to update quantity');
      return false;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const userId = getUserId();
      await apiRequest(getApiUrl(API_ENDPOINTS.REMOVE_FROM_CART), {
        method: 'POST',
        body: JSON.stringify({ userId, productId })
      });
      
      toast.success('Product removed from cart');
      fetchCart(); // Refresh cart
      return true;
    } catch (error) {
      toast.error('Failed to remove product');
      return false;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    refreshCart: fetchCart
  };
};