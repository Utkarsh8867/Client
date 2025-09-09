import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaCartArrowDown, FaStar, FaLeaf, FaShippingFast, FaShieldAlt, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landingpage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");



  const categoryImages = [
    { name: "Fresh Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G8RTrp5ZdlTaWCPHhkJzPxzzzJJnIHt-Q&s", path: "/fruits", icon: "🍎", color: "from-rose-400 to-pink-500" },
    { name: "Organic Vegetables", image: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6", path: "/vegetables", icon: "🥬", color: "from-emerald-400 to-green-500" },
    { name: "Premium Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK18BMfed2b5kIHGTV_KPWsD3mGd2C05iBFQ&s", path: "/grains", icon: "🌾", color: "from-amber-400 to-yellow-500" },
    { name: "Dairy Products", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM0EiOlRNTCIomVZign46FOZw0zvshUx79A&s", path: "/milk-products", icon: "🥛", color: "from-blue-400 to-indigo-500" },
  ];

  const features = [
    { icon: <FaLeaf className="text-4xl" />, title: "100% Organic", desc: "Fresh from farm to table", color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: <FaShippingFast className="text-4xl" />, title: "Fast Delivery", desc: "Same day delivery available", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: <FaShieldAlt className="text-4xl" />, title: "Quality Assured", desc: "Premium quality guaranteed", color: "text-purple-500", bg: "bg-purple-50" },
  ];



  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://server-fmp.onrender.com/api/v2/product/get-products-by-category`, {
          params: { isFeatured: true },
        });
        setFeaturedProducts(response.data.products);
      } catch (error) {
        setError("Error fetching featured products");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    if (!token || !userId) {
      toast.error("Please log in to add products to the cart.");
      return;
    }

    try {
      const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: userId,
          productId: productId,
          quantity: 1,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to add product to the cart");
      }

      toast.success("Product added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error(err.message || "Error adding product to the cart.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🌱 Fresh From Farm
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the finest organic produce delivered straight to your doorstep
          </motion.p>
          <motion.button
            className="btn-primary px-8 py-4 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Shop Now 🛒
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card text-center p-6 sm:p-8"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`${feature.color} mb-4 sm:mb-6 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Shop by Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore our wide range of fresh, organic products
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categoryImages.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
                <NavLink to={category.path} className="block group">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">{category.icon}</div>
                      <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-center px-2 sm:px-4">{category.name}</h3>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              ⭐ Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked premium products just for you
            </p>
          </motion.div>

          {loading && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mb-4"></div>
              <p className="text-gray-600 text-lg">Loading amazing products...</p>
            </motion.div>
          )}

          {error && (
            <motion.p 
              className="text-red-500 text-center text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  className="card group overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isFeatured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <FaStar className="text-xs" />
                        <span>Featured</span>
                      </div>
                    )}
                    <motion.button
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-red-500 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaHeart />
                    </motion.button>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-lg sm:text-2xl font-bold text-blue-600">
                          ₹{product.discountPrice || product.originalPrice}
                        </span>
                        {product.discountPrice && (
                          <span className="line-through text-gray-400 ml-1 sm:ml-2 text-xs sm:text-sm">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {product.measurement || "1kg"}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-xs sm:text-sm ${i < product.ratings ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1 sm:ml-2">
                        ({product.reviews.length})
                      </span>
                    </div>
                    
                    <motion.button
                      onClick={() => handleAddToCart(product._id)}
                      className="btn-primary w-full text-xs sm:text-sm flex items-center justify-center space-x-1 sm:space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaCartArrowDown className="text-xs sm:text-sm" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              !loading && (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No products available</h3>
                  <p className="text-gray-500">Check back soon for amazing deals!</p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Shopping? 🛍️
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
              Join thousands of happy customers who trust us for their daily fresh produce needs
            </p>
            <motion.button
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Products 🚀
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;