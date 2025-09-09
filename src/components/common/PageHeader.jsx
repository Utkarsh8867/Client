import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const PageHeader = ({ 
  title, 
  subtitle, 
  icon, 
  showSearch = false, 
  searchQuery = '', 
  onSearchChange,
  searchPlaceholder = 'Search...' 
}) => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center space-x-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {icon && <span className="text-3xl sm:text-4xl">{icon}</span>}
          <span>{title}</span>
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg sm:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {showSearch && (
          <motion.div 
            className="max-w-md mx-auto relative"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={onSearchChange}
              className="w-full px-12 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PageHeader;