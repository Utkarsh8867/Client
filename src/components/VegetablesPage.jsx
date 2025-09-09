import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCartArrowDown, FaStar, FaLeaf } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VegetablesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [vegetables, setVegetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const response = await fetch(
          `https://server-fmp.onrender.com/api/v2/product/get-vegetables`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch vegetables");
        }
        const data = await response.json();
        setVegetables(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVegetables();
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

  const filteredVegetables = vegetables.filter((vegetable) =>
    vegetable.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🥬 Fresh Vegetables Market
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Farm-fresh vegetables delivered straight from the garden to your table
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto relative"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search for vegetables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-12 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </motion.div>
        </div>
      </motion.div>

      {/* Products Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 mt-4">Loading fresh vegetables...</p>
            </motion.div>
          )}
          
          {error && (
            <motion.p 
              className="text-red-500 text-center text-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {error}
            </motion.p>
          )}

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {filteredVegetables.length > 0 ? (
              filteredVegetables.map((vegetable, index) => (
                <motion.div
                  key={vegetable._id}
                  className="card group overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={vegetable.image.startsWith("http") ? vegetable.image : `https://server-fmp.onrender.com${vegetable.image}`}
                      alt={vegetable.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <FaLeaf className="text-xs" />
                      <span>Organic</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {vegetable.name}
                    </h3>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-lg sm:text-2xl font-bold text-blue-600">
                          ₹{vegetable.discountPrice || vegetable.originalPrice}
                        </span>
                        {vegetable.discountPrice && (
                          <span className="line-through text-gray-400 ml-1 sm:ml-2 text-xs sm:text-sm">
                            ₹{vegetable.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {vegetable.quantity}kg
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-xs sm:text-sm ${i < vegetable.ratings ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-2">
                        ({vegetable.reviews.length})
                      </span>
                    </div>
                    
                    <motion.button
                      onClick={() => handleAddToCart(vegetable._id)}
                      className="btn-primary w-full text-xs sm:text-sm flex items-center justify-center space-x-1 sm:space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaCartArrowDown />
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No vegetables found</h3>
                  <p className="text-gray-500">Try adjusting your search terms</p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VegetablesPage;