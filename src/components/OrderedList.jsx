import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaCalendarAlt, FaRupeeSign, FaEye } from 'react-icons/fa';
import { PageHeader, LoadingSpinner } from './common';
import { isAuthenticated, getUserId } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const OrderedList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const userId = getUserId();
        const response = await fetch(`https://server-fmp.onrender.com/api/v2/order/get-all-orders/${userId}`);
        const data = await response.json();
        
        if (data.success) {
          const formattedOrders = data.orders.map(order => ({
            id: order._id,
            date: order.createdAt,
            total: order.totalPrice,
            status: order.status,
            items: order.cart.map(item => ({
              name: item.name,
              quantity: item.qty,
              price: item.price
            }))
          }));
          setOrders(formattedOrders);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-100';
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      case 'Shipped': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="📦 My Orders"
        subtitle="Track your order history and current deliveries"
        icon="📦"
      />

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading && <LoadingSpinner message="Loading your orders..." />}
          
          {!loading && orders.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-8xl mb-6">📦</div>
              <h2 className="text-3xl font-bold text-gray-600 mb-4">No orders yet</h2>
              <p className="text-gray-500 mb-8">Start shopping to see your orders here!</p>
              <motion.button
                onClick={() => navigate('/')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Shopping
              </motion.button>
            </motion.div>
          )}

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                className="card p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaShoppingBag className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Order #{order.id}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center space-x-1">
                          <FaCalendarAlt />
                          <span>{new Date(order.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FaRupeeSign />
                          <span>{order.total}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <motion.button
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-700 mb-3">Items ({order.items.length})</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-bold text-blue-600">₹{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrderedList;