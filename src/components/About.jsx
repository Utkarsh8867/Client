import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const data = [
        { name: "John Doe", role: "Founder", image: "https://via.placeholder.com/150", alt: "John Doe smiling" },
        { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150", alt: "Jane Smith in professional attire" },
        { name: "Emily Davis", role: "Operations Manager", image: "https://via.placeholder.com/150", alt: "Emily Davis posing outdoors" },
      ];
      setTeam(data);
    };
    fetchTeamData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Farmer Marketplace</title>
        <meta
          name="description"
          content="Learn more about Farmer Marketplace's mission, vision, values, and meet our amazing team committed to empowering farmers."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.header 
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16 lg:py-24 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            🌱 Welcome to Farmer's Market
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Empowering farmers with fresh connections and sustainable solutions for a better tomorrow.
          </motion.p>
        </div>
      </motion.header>

      {/* Mission, Vision, and Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission, Vision, and Values
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[{
              title: "Mission",
              content: "To connect farmers directly with consumers, ensuring fair prices and fresh produce for all.",
              icon: "🌾",
            }, {
              title: "Vision",
              content: "To build a sustainable future where agriculture thrives with innovation and community support.",
              icon: "🌍",
            }, {
              title: "Values",
              content: "Integrity, sustainability, innovation, and a deep commitment to our farming community.",
              icon: "💚",
            }].map((item, index) => (
              <motion.article
                key={index}
                className="card text-center p-6 sm:p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl sm:text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center gradient-text mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((teamMember, index) => (
              <motion.article 
                key={index} 
                className="card text-center p-6 sm:p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.img
                  src={teamMember.image}
                  alt={teamMember.alt}
                  className="rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 border-4 border-blue-200"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{teamMember.name}</h3>
                <p className="text-gray-600 font-medium">{teamMember.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Stay Connected 📧</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Join our community and get the latest updates on fresh produce and farming innovations.
          </p>
          <motion.form
            className="max-w-md mx-auto card p-6 sm:p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-4 border-0 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              required
            />
            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now 🚀
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
};

export default About;