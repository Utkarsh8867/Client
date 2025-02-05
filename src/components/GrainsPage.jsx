


import React, { useState, useEffect } from "react";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications
// import dotenv from "dotenv";



// dotenv.config();



const GrainsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [grains, setGrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if the user is logged in
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchGrains = async () => {
      try {
        const response = await fetch(
          `https://server-fmp.onrender.com/api/v2/product/get-grains`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch grains");
        }
        const data = await response.json();
        setGrains(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGrains();
  }, []);

  useEffect(() => {
    if (!token) {
      toast.error("You need to log in to access this page."); // Show toast notification for login requirement
    }
  }, [token]);

  const handleAddToCart = async (productId) => {
    if (!token || !userId) {
      toast.error("Please log in to add products to the cart."); // Show toast notification for login requirement
      return;
    }

    try {
      const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: userId,
          productId: productId,
          quantity: 1, // Default quantity
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to add product to the cart");
      }

      toast.success("Product added to cart!"); // Success toast notification
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error(err.message || "Error adding product to the cart."); // Error toast notification
    }
  };

  const filteredGrains = grains.filter((grain) =>
    grain.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-green-500 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GrainMart</h1>
          <div className="flex-1 flex justify-center">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search for grains..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-10 py-2 rounded-md outline-none text-black"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section
        id="products"
        className="py-10 bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
            Grains
          </h2>

          {/* Loading and Error Handling */}
          {loading && <p className="text-white text-center">Loading products...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredGrains.length > 0 ? (
              filteredGrains.map((grain) => (
                <div
                  key={grain._id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md relative"
                >
                  <img
                    src={grain.image.startsWith("http") ? grain.image : `https://server-fmp.onrender.com${grain.image}`}
                    alt={grain.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="mt-3">
                    <h3 className="text-md font-bold text-white truncate">{grain.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-green-100 font-bold">
                        ₹{grain.discountPrice || grain.originalPrice}
                        <span className="line-through text-gray-400">₹{grain.originalPrice}</span>
                      </p>
                      <span className="text-gray-300 font-medium">{grain.quantity}kg</span>
                    </div>
                    <p className="text-yellow-400 text-xs mt-1">
                      Rating: {grain.ratings} / 5 ({grain.reviews.length} reviews)
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(grain._id)}
                    className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCartArrowDown /> Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No grains available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default GrainsPage;
