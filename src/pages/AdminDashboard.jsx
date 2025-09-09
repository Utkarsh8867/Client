import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaShoppingCart, FaBoxOpen, FaRupeeSign, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { PageHeader, LoadingSpinner } from '../components/common';
import { isAuthenticated, getRole } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalRevenue: 0
  });
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated() || getRole() !== 'admin') {
      toast.error('Access denied. Admin privileges required.');
      navigate('/login');
      return;
    }

    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      // Fetch orders
      const ordersResponse = await fetch('https://server-fmp.onrender.com/api/v2/order/admin-all-orders');
      const ordersData = await ordersResponse.json();
      
      // Fetch products
      const productsResponse = await fetch('https://server-fmp.onrender.com/api/v2/product/admin-all-products', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const productsData = await productsResponse.json();

      if (ordersData.success) {
        setOrders(ordersData.orders);
        setStats(prev => ({
          ...prev,
          totalOrders: ordersData.orders.length,
          totalRevenue: ordersData.orders.reduce((sum, order) => sum + order.totalPrice, 0)
        }));
      }

      if (productsData.success) {
        setProducts(productsData.products);
        setStats(prev => ({
          ...prev,
          totalProducts: productsData.products.length
        }));
      }

      // Mock users count
      setStats(prev => ({ ...prev, totalUsers: 150 }));
      
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-100';
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      case 'Shipped': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader title="🔧 Admin Dashboard" subtitle="Manage your marketplace" />
        <LoadingSpinner message="Loading dashboard..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <PageHeader title="🔧 Admin Dashboard" subtitle="Manage your marketplace" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Users', value: stats.totalUsers, icon: FaUsers, color: 'text-blue-600', bg: 'bg-blue-50' },
            { title: 'Total Orders', value: stats.totalOrders, icon: FaShoppingCart, color: 'text-green-600', bg: 'bg-green-50' },
            { title: 'Total Products', value: stats.totalProducts, icon: FaBoxOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
            { title: 'Total Revenue', value: `₹${stats.totalRevenue}`, icon: FaRupeeSign, color: 'text-orange-600', bg: 'bg-orange-50' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`card p-6 ${stat.bg}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`text-3xl ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'orders', label: 'Orders' },
                { id: 'products', label: 'Products' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-3">
                {orders.slice(0, 5).map((order, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Order #{order._id.slice(-6)}</p>
                      <p className="text-sm text-gray-600">{order.user?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">₹{order.totalPrice}</p>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <div className="space-y-3">
                {products.slice(0, 5).map((product, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">₹{product.originalPrice}</p>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      {product.sold_out || 0} sold
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card p-6"
          >
            <h3 className="text-lg font-semibold mb-4">All Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order._id.slice(-6)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.user?.name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{order.totalPrice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <FaEye />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">All Products</h3>
              <button className="btn-primary">Add Product</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">₹{product.originalPrice}</p>
                  <p className="text-xs text-gray-500 mb-3">Stock: {product.stock || 0}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 text-xs bg-blue-100 text-blue-600 py-1 px-2 rounded hover:bg-blue-200">
                      <FaEdit className="inline mr-1" /> Edit
                    </button>
                    <button className="flex-1 text-xs bg-red-100 text-red-600 py-1 px-2 rounded hover:bg-red-200">
                      <FaTrash className="inline mr-1" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;