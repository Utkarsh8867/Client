import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaShoppingCart, FaCreditCard, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const OrderPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        toast.error("Please login to continue");
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/cart/${userId}`);
        const data = await response.json();
        if (data.success && data.cart.items.length > 0) {
          setCart(data.cart);
        } else {
          toast.error("Your cart is empty");
          navigate('/cart');
        }
      } catch (error) {
        toast.error("Failed to load cart");
        navigate('/cart');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [navigate]);

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (!orderData.name || !orderData.phone || !orderData.address) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      const orderPayload = {
        cart: cart.items.map(item => ({
          id: item.productId._id,
          name: item.productId.name,
          price: item.price,
          qty: item.quantity,
          image: item.productId.image
        })),
        shippingAddress: {
          address1: orderData.address,
          city: orderData.city,
          zipCode: orderData.pincode,
          phoneNumber: orderData.phone
        },
        user: {
          _id: userId,
          name: orderData.name,
          email: orderData.email
        },
        totalPrice: cart.totalPrice,
        paymentInfo: {
          type: orderData.paymentMethod === 'cod' ? 'Cash On Delivery' : 'Online Payment'
        }
      };

      const response = await fetch(`https://server-fmp.onrender.com/api/v2/order/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderPayload)
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Order placed successfully!");
        setTimeout(() => {
          navigate('/OrderedList');
        }, 2000);
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      console.error('Order error:', error);
      toast.error("Failed to place order");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center space-x-4">
            <FaShoppingCart className="text-3xl" />
            <span>Checkout</span>
          </h1>
          <p className="text-lg">Complete your order details</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaUser className="text-blue-600" />
                <span>Delivery Information</span>
              </h2>
              
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={orderData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={orderData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={orderData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>Delivery Address *</span>
                  </label>
                  <textarea
                    name="address"
                    value={orderData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter complete address"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={orderData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder="Enter city"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={orderData.pincode}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      placeholder="Enter PIN code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center space-x-2">
                    <FaCreditCard className="text-blue-600" />
                    <span>Payment Method</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={orderData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={orderData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <span className="font-medium">Online Payment</span>
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Place Order
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-6 sm:p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              {cart && (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                        <img
                          src={item.productId?.image || "placeholder.png"}
                          alt={item.productId?.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.productId?.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t pt-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cart.items.length} items)</span>
                      <span>₹{cart.totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Charges</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-800 border-t pt-3">
                      <span>Total Amount</span>
                      <span className="text-blue-600">₹{cart.totalPrice}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;