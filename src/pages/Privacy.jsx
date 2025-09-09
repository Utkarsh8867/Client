import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we collect and use your information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card p-6 sm:p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This may include your name, email address, 
              phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">How We Use Your Information</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• To process and fulfill your orders</li>
              <li>• To communicate with you about your account and orders</li>
              <li>• To improve our services and user experience</li>
              <li>• To send you promotional materials (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@farmersmarket.com" className="text-blue-600 hover:text-blue-700 ml-1">
                privacy@farmersmarket.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;