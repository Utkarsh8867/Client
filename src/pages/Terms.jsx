import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card p-6 sm:p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Farmer's Market, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily use Farmer's Market for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to reverse engineer any software contained on the website</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Product Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to provide accurate product information, but we do not warrant that product 
              descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Farmer's Market or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws 
              of India and you irrevocably submit to the exclusive jurisdiction of the courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at 
              <a href="mailto:legal@farmersmarket.com" className="text-blue-600 hover:text-blue-700 ml-1">
                legal@farmersmarket.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;