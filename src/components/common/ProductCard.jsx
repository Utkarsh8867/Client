import React from 'react';
import { motion } from 'framer-motion';
import { FaCartArrowDown, FaStar, FaHeart } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart, index = 0 }) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image?.startsWith("http") ? product.image : `https://server-fmp.onrender.com${product.image}`}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          Fresh
        </div>
        <motion.button
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-red-500 hover:text-red-600 hover:bg-white transition-all duration-300 shadow-lg"
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
            {product.quantity || product.measurement || "1kg"}
          </span>
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`text-xs sm:text-sm ${i < (product.ratings || 0) ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviews?.length || 0})
          </span>
        </div>
        
        <motion.button
          onClick={() => onAddToCart(product._id)}
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
  );
};

export default ProductCard;