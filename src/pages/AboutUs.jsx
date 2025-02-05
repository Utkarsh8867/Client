import React from "react";
import ContactUs from "./Contact";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      {/* Meta tags for SEO */}
      <meta
        name="description"
        content="About Kisan Konnect - Empowering farmers and connecting them with consumers directly."
      />
      <meta
        name="keywords"
        content="Kisan Konnect, farmers, local produce, sustainability, direct market"
      />
      <meta name="author" content="Kisan Konnect Team" />
      <meta property="og:title" content="About Us - Kisan Konnect" />
      <meta
        property="og:description"
        content="Learn more about how Kisan Konnect empowers farmers and connects them directly to consumers."
      />
      <meta property="og:image" content="/images/og-image.jpg" />

      {/* Navbar */}
      <header className="bg-green-600 bg-opacity-90 text-white py-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-8">
          <h1 className="text-4xl font-extrabold tracking-wide">Kisan Konnect</h1>
          <nav className="space-x-8 text-lg font-medium">
            <a href="/" className="hover:underline hover:text-yellow-300">
              Home
            </a>
            <a href="/about-us" className="hover:underline hover:text-yellow-300">
              About Us
            </a>
            <a href="/products" className="hover:underline hover:text-yellow-300">
              Products
            </a>
            <a href="/contact-us" className="hover:underline hover:text-yellow-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto mt-12 text-center bg-gradient-to-br from-green-400 to-green-600 text-white p-10 rounded-xl shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl leading-relaxed sm:text-2xl md:text-3xl">
          Connecting farmers directly with consumers for fresh, local produce and empowering local economies.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <section className="container mx-auto mt-12 bg-gray-900 text-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At Kisan Konnect, our mission is to empower farmers by providing them with a marketplace where they can
          directly sell their products to consumers, ensuring fair pricing, transparency, and access to fresh,
          healthy produce. We aim to reduce the dependency on middlemen and create a sustainable marketplace
          that benefits both farmers and consumers.
        </p>

        <h2 className="text-4xl font-bold text-green-400 mb-6">Our Vision</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our vision is to create a global community where every farmer has the opportunity to reach customers
          directly and sustainably. We aim to build an ecosystem that enhances food security, supports local
          economies, and promotes environmental sustainability by encouraging organic farming practices.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto mt-12 bg-gray-900 text-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-4">
          <li>Empowering Farmers: Ensuring fair prices and direct access to markets.</li>
          <li>Sustainability: Promoting eco-friendly and organic farming practices.</li>
          <li>Transparency: Ensuring honesty in transactions and clear communication.</li>
          <li>Community: Building strong, supportive relationships between farmers and consumers.</li>
          <li>Health: Encouraging healthy eating habits through fresh, organic produce.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto mt-12 bg-gray-900 text-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Why Choose Us?</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We offer a unique platform where farmers can sell their produce directly to consumers, reducing
          the dependency on middlemen and ensuring fresher, healthier produce at better prices. By buying
          from us, you’re supporting local farmers and helping build a sustainable food system for the future.
        </p>
      </section>

      {/* Call to Action Section */}
      <div className="container mx-auto text-center mt-12">
        <p className="text-xl text-gray-300 mb-6">
          Join us in our mission to support farmers and make healthy, fresh produce available to everyone.
        </p>
        <a
            href="/Contact"
          className="px-8 py-4 bg-green-600 text-white rounded-full text-xl font-bold hover:bg-green-700 transition duration-300 shadow-md"
        >
          Get In Touch
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-600 text-white py-6 mt-12">
        <div className="container mx-auto text-center sm:flex sm:justify-between sm:items-center px-8">
          <p className="text-sm sm:text-base">
            &copy; 2025 Kisan Konnect. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <a href="#" className="hover:underline" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="hover:underline" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" className="hover:underline" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
