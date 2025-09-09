import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaLeaf, FaShieldAlt, FaHeadset, FaCreditCard, FaRecycle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl" />,
      title: "Fast Delivery",
      description: "Same-day delivery for orders placed before 2 PM. Fresh produce delivered to your doorstep.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "100% Organic",
      description: "All our products are certified organic, grown without harmful pesticides or chemicals.",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Quality Guarantee",
      description: "We guarantee the freshness and quality of all our products. Not satisfied? We'll make it right.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to help you with any queries.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: <FaCreditCard className="text-4xl" />,
      title: "Secure Payment",
      description: "Multiple payment options with bank-level security. Your transactions are safe with us.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: <FaRecycle className="text-4xl" />,
      title: "Eco-Friendly",
      description: "Sustainable packaging and eco-friendly practices. We care about our planet's future.",
      color: "text-teal-500",
      bg: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to ensure you get the best fresh produce experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 sm:p-8"
              whileHover={{ y: -10 }}
            >
              <div className={`${service.color} mb-6 flex justify-center`}>
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;