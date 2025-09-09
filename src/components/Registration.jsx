import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    try {
      const response = await fetch(
        `https://server-fmp.onrender.com/api/v2/user/create-user`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      
      const data = await response.json();
      if (response.ok) {
        toast.success("Registration successful! Please login.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-12">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-full max-w-md border border-gray-700 shadow-2xl"
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">Join Us! 🌱</h2>
          <p className="text-gray-300">Create your farmer's market account</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 text-gray-100"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 text-gray-100"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 text-gray-100"
              placeholder="Create a password (min 6 characters)"
              required
              minLength="6"
            />
          </motion.div>

          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 text-gray-100"
              placeholder="Confirm your password"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Create Account 🚀
          </motion.button>
        </form>

        <motion.div 
          className="text-center mt-6 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-gray-300">
            Already have an account?{' '}
            <button
              onClick={() => navigate("/login")}
              className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors"
            >
              Sign in here
            </button>
          </p>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
            >
              ← Back to Home
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registration;