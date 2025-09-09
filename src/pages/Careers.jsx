import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaHeart, FaGlobe } from 'react-icons/fa';

const Careers = () => {
  const benefits = [
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Great Team",
      description: "Work with passionate people who care about sustainable agriculture.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Growth Opportunities",
      description: "Advance your career with learning and development programs.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options available.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Make an Impact",
      description: "Help build a sustainable future for farmers and consumers.",
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const positions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Mumbai",
      type: "Full-time"
    },
    {
      title: "Customer Support",
      department: "Support",
      location: "Bangalore",
      type: "Part-time"
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a mission to revolutionize agriculture and connect farmers with consumers.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
                whileHover={{ y: -10 }}
              >
                <div className={`${benefit.color} mb-4 flex justify-center`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 mb-6"
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{position.department}</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{position.location}</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{position.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 btn-primary px-6 py-2 rounded-full">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;