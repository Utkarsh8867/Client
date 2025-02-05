// import React from 'react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       {/* Meta tags for SEO */}
//       <meta name="description" content="About Kisan Konnect - Empowering farmers and connecting them with consumers directly." />
//       <meta name="keywords" content="Kisan Konnect, farmers, local produce, sustainability, direct market" />
//       <meta name="author" content="Kisan Konnect Team" />
//       <meta property="og:title" content="About Us - Kisan Konnect" />
//       <meta property="og:description" content="Learn more about how Kisan Konnect empowers farmers and connects them directly to consumers." />
//       <meta property="og:image" content="/images/og-image.jpg" />

//       {/* Navbar
//       <header className="bg-gray-800 bg-opacity-90 text-white py-6 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center px-8">
//           <h1 className="text-4xl font-extrabold tracking-wide">Kisan Konnect</h1>
//           <nav className="space-x-8 text-lg font-medium">
//             <a href="/" className="hover:underline hover:text-yellow-300">Home</a>
//             <a href="/about-us" className="hover:underline hover:text-yellow-300">About Us</a>
//             <a href="/products" className="hover:underline hover:text-yellow-300">Products</a>
//             <a href="/contact-us" className="hover:underline hover:text-yellow-300">Contact</a>
//           </nav>
//         </div>
//       </header> */}

//       {/* Hero Section */}
//       <div className="container mx-auto mt-12 text-center bg-gray-800 bg-opacity-90 text-white p-10 rounded-xl shadow-xl">
//         <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
//         <p className="text-xl leading-relaxed sm:text-2xl md:text-3xl">
//           Connecting farmers directly with consumers for fresh, local produce and empowering local economies.
//         </p>
//       </div>

//       {/* Mission and Vision Section */}
//       <section className="container mx-auto mt-12 bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg">
//         <h2 className="text-4xl font-bold text-yellow-300 mb-6">Our Mission</h2>
//         <p className="text-gray-300 text-lg leading-relaxed mb-8">
//           At Kisan Konnect, our mission is to empower farmers by providing them with a marketplace where they can
//           directly sell their products to consumers, ensuring fair pricing, transparency, and access to fresh,
//           healthy produce. We aim to reduce the dependency on middlemen and create a sustainable marketplace
//           that benefits both farmers and consumers.
//         </p>

//         <h2 className="text-4xl font-bold text-yellow-300 mb-6">Our Vision</h2>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           Our vision is to create a global community where every farmer has the opportunity to reach customers
//           directly and sustainably. We aim to build an ecosystem that enhances food security, supports local
//           economies, and promotes environmental sustainability by encouraging organic farming practices.
//         </p>
//       </section>

//       {/* Core Values Section */}
//       <section className="container mx-auto mt-12 bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg">
//         <h2 className="text-4xl font-bold text-yellow-300 mb-6">Our Core Values</h2>
//         <ul className="list-disc list-inside text-gray-300 text-lg space-y-4">
//           <li>Empowering Farmers: Ensuring fair prices and direct access to markets.</li>
//           <li>Sustainability: Promoting eco-friendly and organic farming practices.</li>
//           <li>Transparency: Ensuring honesty in transactions and clear communication.</li>
//           <li>Community: Building strong, supportive relationships between farmers and consumers.</li>
//           <li>Health: Encouraging healthy eating habits through fresh, organic produce.</li>
//         </ul>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="container mx-auto mt-12 bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg">
//         <h2 className="text-4xl font-bold text-yellow-300 mb-6">Why Choose Us?</h2>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           We offer a unique platform where farmers can sell their produce directly to consumers, reducing
//           the dependency on middlemen and ensuring fresher, healthier produce at better prices. By buying
//           from us, you’re supporting local farmers and helping build a sustainable food system for the future.
//         </p>
//       </section>

//       {/* Call to Action Section */}
//       <div className="container mx-auto text-center mt-12">
//         <p className="text-xl text-gray-400 mb-6">
//           Join us in our mission to support farmers and make healthy, fresh produce available to everyone.
//         </p>
//         <a
//           href="/contact-us"
//           className="px-8 py-4 bg-yellow-500 text-black rounded-full text-xl font-bold hover:bg-yellow-600 transition duration-300 shadow-md"
//         >
//           Get In Touch
//         </a>
//       </div>

//       {/* Footer Section (Optional) */}
//       <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
//         <div className="container mx-auto text-center sm:flex sm:justify-between sm:items-center px-8">
//           <p className="text-sm sm:text-base">
//             &copy; 2025 Kisan Konnect. All rights reserved.
//           </p>
//           <div className="mt-4 sm:mt-0 space-x-4">
//             <a href="#" className="hover:underline" aria-label="Facebook">
//               Facebook
//             </a>
//             <a href="#" className="hover:underline" aria-label="Twitter">
//               Twitter
//             </a>
//             <a href="#" className="hover:underline" aria-label="Instagram">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;



import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet here

const About = () => {
  const [team, setTeam] = useState([]);

  // Simulate fetching team data from an API or JSON file
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
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Meta Section */}
      <Helmet>
        <title>About Us - Farmer Marketplace</title>
        <meta
          name="description"
          content="Learn more about Farmer Marketplace's mission, vision, values, and meet our amazing team committed to empowering farmers."
        />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Farmer Marketplace</h1>
        <p className="text-lg mt-4">
          Empowering farmers with tools, products, and connections they need to thrive.
        </p>
      </header>

      {/* Mission, Vision, and Values Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Our Mission, Vision, and Values
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{
            title: "Mission",
            content: "To connect farmers with modern solutions and quality tools.",
            icon: "🌾",
          }, {
            title: "Vision",
            content: "To build a future where agriculture thrives with innovation.",
            icon: "🌍",
          }, {
            title: "Values",
            content: "Integrity, innovation, and a commitment to community.",
            icon: "💡",
          }].map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-700">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.content}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((teamMember, index) => (
            <article key={index} className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
              <img
                src={teamMember.image}
                alt={teamMember.alt}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-green-700">{teamMember.name}</h3>
              <p className="text-gray-600">{teamMember.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Stay Updated</h2>
        <p className="text-center text-gray-700 mb-6">
          Sign up for our newsletter to receive updates about our latest products and services.
        </p>
        <form
          className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6"
          aria-labelledby="newsletter-form"
        >
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
            aria-label="Enter your email address"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>&copy; 2025 Farmer Marketplace. All Rights Reserved.</p>
        <div className="mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:underline"
          >
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
};

export default About;
