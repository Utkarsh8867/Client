import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { PageHeader, ProductCard, LoadingSpinner } from "./common";
import { useCart } from "../hooks/useCart";
import { apiRequest } from "../utils/api";
import { getApiUrl, API_ENDPOINTS } from "../constants/api";
import "react-toastify/dist/ReactToastify.css";

const FruitsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await apiRequest(
          getApiUrl(API_ENDPOINTS.GET_FRUITS)
        );
        setFruits(response.products || []);
      } catch (err) {
        setError("Failed to fetch fruits");
      } finally {
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);



  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <PageHeader
        title="🍎 Fresh Fruits Market"
        subtitle="Discover nature's sweetest treasures, handpicked for freshness"
        icon="🍎"
        showSearch={true}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        searchPlaceholder="Search for fruits..."
      />

      {/* Products Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading && <LoadingSpinner message="Loading fresh fruits..." />}
          
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
            {filteredFruits.length > 0 ? (
              filteredFruits.map((fruit, index) => (
                <ProductCard
                  key={fruit._id}
                  product={fruit}
                  onAddToCart={addToCart}
                  index={index}
                />
              ))
            ) : (
              !loading && (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No fruits found</h3>
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

export default FruitsPage;