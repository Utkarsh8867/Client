// import React from "react";
// import { FaSeedling, FaTruck, FaShoppingBasket } from "react-icons/fa";

// const ServiceCard = ({ icon: Icon, title, description }) => (
//   <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center gap-4">
//     <Icon className="text-green-500 text-4xl" />
//     <h3 className="text-xl font-semibold">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// const Services = () => {
//   const services = [
//     {
//       icon: FaSeedling,
//       title: "Fresh Organic Produce",
//       description: "We provide fresh, organic, and locally sourced farm products directly from farmers."
//     },
//     {
//       icon: FaTruck,
//       title: "Fast & Reliable Delivery",
//       description: "Get your fresh produce delivered quickly and safely to your doorstep."
//     },
//     {
//       icon: FaShoppingBasket,
//       title: "Easy Online Shopping",
//       description: "A seamless and secure online shopping experience for farmers and buyers."
//     }
//   ];

//   return (
//     <div className="container mx-auto p-12">
//       <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Our Services</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;







import React, { useState, useEffect } from "react";

const Services = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // For modal
  const [ratings, setRatings] = useState({}); // Store ratings for each service
  const [search, setSearch] = useState(""); // Search input
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order
  const [favorites, setFavorites] = useState([]); // Favorite services
  const [recommendedService, setRecommendedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Fresh Produce Delivery",
      description: "We ensure that you receive fresh and organic produce directly from trusted farms.",
      icon: "🍎",
      details: "Fresh Produce Delivery ensures timely delivery of fruits, vegetables, and grains sourced from certified organic farms. We prioritize freshness and quality.",
    },
    {
      id: 2,
      title: "Trusted Farmers",
      description: "Our farmers follow sustainable and ethical practices for growing crops.",
      icon: "👩‍🌾",
      details: "We collaborate with farmers who adopt eco-friendly methods and provide transparency in their practices to ensure trust and reliability.",
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description: "We offer competitive prices without compromising on quality.",
      icon: "💰",
      details: "We believe in fair pricing, offering customers the best deals without sacrificing product quality.",
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Our team is here to assist you 24/7 with any queries or issues.",
      icon: "📞",
      details: "Our support team is available round-the-clock to address your concerns and provide assistance.",
    },
    {
      id: 5,
      title: "Wide Variety",
      description: "From fruits to grains, we provide a wide range of fresh and healthy options.",
      icon: "🥦",
      details: "We offer a diverse selection of products, ensuring you find everything you need in one place.",
    },
  ];

  // Handle feedback submission
  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedbackList([...feedbackList, feedback]);
    setFeedback("");
  };

  // Handle ratings
  const handleRating = (index, rating) => {
    setRatings((prev) => ({ ...prev, [index]: rating }));
  };

  // Close the modal
  const closeModal = () => setSelectedService(null);

  // Toggle favorite services
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Filtered and sorted services
  const filteredServices = services
    .filter((service) =>
      service.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  // Generate random recommended service
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * services.length);
    setRecommendedService(services[randomIndex]);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Recommended Service */}
        {recommendedService && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-lg">
              🌟 Recommended Service:{" "}
              <strong>{recommendedService.title}</strong>
            </p>
          </div>
        )}

        {/* Search and Sort Controls */}
        <div className="flex justify-between items-center mb-10">
          <input
            type="text"
            placeholder="Search for a service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-md w-1/2"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 border rounded-md"
          >
            <option value="asc">Sort: A-Z</option>
            <option value="desc">Sort: Z-A</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ${
                favorites.includes(service.id) ? "border-2 border-green-500" : ""
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer ${
                      ratings[service.id] >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(service.id, star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button
                  className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More
                </button>
                <button
                  className={`py-2 px-4 rounded ${
                    favorites.includes(service.id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => toggleFavorite(service.id)}
                >
                  {favorites.includes(service.id) ? "Unfavorite" : "Favorite"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            How do you like our services?
          </h3>
          <form onSubmit={handleFeedback}>
            <textarea
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition"
            >
              Submit Feedback
            </button>
          </form>
          {/* Feedback List */}
          <div className="mt-6">
            <h4 className="text-xl font-bold text-gray-700 mb-4">
              Recent Feedback:
            </h4>
            {feedbackList.length > 0 ? (
              <ul className="space-y-2">
                {feedbackList.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-100 p-4 rounded shadow-sm text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No feedback submitted yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedService.details}</p>
            <button
              onClick={closeModal}
              className="bg-green-700 text-white py-2 px-6 rounded hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

