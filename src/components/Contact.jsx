import React, { useState } from 'react';
// import axios from 'axios'; // Import axios
import FarmerImage from '../assets/FarmerImage.jpg'; // Ensure the image path is correct
import { ToastContainer, toast } from "react-toastify"; // Import the toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
         toast.success("Message sent successfully!");
        // alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
      // toast.error("Message sent successfully!");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${FarmerImage})`,
      }}
    >
      {/* Apply Blur to the Background Image */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row bg-white/80 rounded-3xl shadow-lg overflow-hidden">
          {/* Left Section with Side Image */}
          <div className="md:w-1/2">
            <img
              src={FarmerImage}
              alt="Farmer's Marketplace"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Section with Form */}
          <div className="md:w-1/2 p-8 bg-white/90 backdrop-blur-md rounded-3xl">
            <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-center">
              Have questions or feedback? Send us a message, and we’ll get back to you shortly!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent text-gray-700 border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent text-gray-700 border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent text-gray-700 border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent text-gray-700 border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-green-300 hover:text-black transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




