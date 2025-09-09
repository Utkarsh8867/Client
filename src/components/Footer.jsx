import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h4 className="font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6 text-xl">
              🌱 Farmer's Market
            </h4>
            <p className="text-gray-400 leading-relaxed">
              We are a farmer marketplace connecting local farmers with consumers to bring fresh produce directly to your doorstep. Quality and sustainability are at the core of our mission.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xl">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 block">About Us</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 block">Careers</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 block">Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-2 block">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xl">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110">
                <FaFacebook size={28} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110">
                <FaInstagram size={28} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110">
                <FaTwitter size={28} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-800 hover:scale-110">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="font-bold text-white mb-6 text-xl">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                📧 <a href="mailto:support@farmersmarket.com" className="hover:text-emerald-400 transition-colors duration-300">support@farmersmarket.com</a>
              </p>
              <p className="text-gray-400">
                📞 +91 123 456 7890
              </p>
              <p className="text-gray-400">
                📍 123 Farm Lane, Agriculture City, India
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-12 pt-8">
        <div className="text-center">
          <p className="text-gray-500 text-lg">&copy; 2025 Farmer's Market. All Rights Reserved.</p>
          <p className="text-emerald-400 mt-2">Made with 💚 for farmers and consumers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;