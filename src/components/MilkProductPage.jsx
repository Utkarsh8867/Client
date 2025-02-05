




import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import styles for react-toastify

const MilkProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [milkProducts, setMilkProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchMilkProducts = async () => {
      try {
        const response = await fetch(
          `https://server-fmp.onrender.com/api/v2/product/milk-products`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch milk products");
        }
        const data = await response.json();
        setMilkProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMilkProducts();
  }, []);

  useEffect(() => {
    if (!token) {
      toast.warn("You need to log in to access this page.");
    }
  }, []);

  const handleAddToCart = async (productId) => {
    if (!token || !userId) {
      toast.error("Please log in to add products to the cart.");
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

      toast.success("Product added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error(err.message || "Error adding product to the cart.");
    }
  };

  const filteredMilkProducts = milkProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-green-500 text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MilkMart</h1>
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
      <section id="products" className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
            Milk Products
          </h2>

          {/* Loading and Error Handling */}
          {loading && <p className="text-white text-center">Loading products...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMilkProducts.length > 0 ? (
              filteredMilkProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md relative"
                >
                  <img
                    src={product.image.startsWith("http") ? product.image : `https://server-fmp.onrender.com${product.image}`}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="mt-3">
                    <h3 className="text-md font-bold text-white truncate">{product.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-green-100 font-bold">
                        ₹{product.discountPrice || product.originalPrice}
                        <span className="line-through text-gray-400">₹{product.originalPrice}</span>
                      </p>
                      <span className="text-gray-300 font-medium">{product.quantity}L</span>
                    </div>
                    <p className="text-yellow-400 text-xs mt-1">
                      Rating: {product.ratings} / 5 ({product.reviews.length} reviews)
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCartArrowDown /> Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No milk products available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default MilkProductsPage;
