import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <motion.div 
      className="text-center py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600 text-lg">{message}</p>
    </motion.div>
  );
};

export default LoadingSpinner;