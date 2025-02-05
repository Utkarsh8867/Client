




import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCartArrowDown } from "react-icons/fa"; // Cart icon
import Slider from "react-slick";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Landingpage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const bannerImages = [
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241210112748Hurda%20Combo%20Story%20Web.jpg?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241219162537Story%20Banner%20Web%20%201920px%20%20600px.png?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20240806183118Shrikhand%20web%20story.jpg?tr=f-webp",
  ];

  const categoryImages = [
    { name: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1G8RTrp5ZdlTaWCPHhkJzPxzzzJJnIHt-Q&s", path: "/fruits" },
    { name: "Vegetables", image: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6", path: "/vegetables" },
    { name: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK18BMfed2b5kIHGTV_KPWsD3mGd2C05iBFQ&s", path: "/grains" },
    { name: "Milk Products", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM0EiOlRNTCIomVZign46FOZw0zvshUx79A&s", path: "/milk-products" },
  ];

  const fetchShopNameById = (shopId) => {
    const shopDetails = {
      "67914202230954caf891b880": "Green Valley Dairy",
      "45879612367912caf874b761": "Fresh Farms Produce",
      "12346789123745caf987b312": "Golden Grains",
    };
    return shopDetails[shopId];
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://server-fmp.onrender.com/api/v2/product/get-products-by-category`, {
          params: { isFeatured: true }, // Only fetch featured products
        });
        setFeaturedProducts(response.data.products);
      } catch (error) {
        setError("Error fetching featured products");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Handle Add to Cart
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

  return (
    <div className="min-h-screen bg-black">
      {/* Slider Section */}
      <section className="bg-black py-6">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Banner ${index + 1}`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="bg-black py-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Shop by Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categoryImages.map((category, index) => (
              <NavLink to={category.path} key={index} className="bg-black bg-opacity-50 rounded-lg shadow-md text-center p-4 transform transition-all hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
            Featured Products
          </h2>

          {/* Loading and Error Handling */}
          {loading && <p className="text-white text-center">Loading products...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => {
                const measurement = product.measurement || "1kg"; // Default to "1kg" if no measurement available

                return (
                  <div
                    key={product._id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md relative"
                  >
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      {product.isFeatured && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="mt-3">
                      <h3 className="text-md font-bold text-white truncate">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center text-sm">
                        <p className="text-green-100 font-bold">
                          ₹{product.discountPrice}{" "}
                          <span className="line-through text-gray-400">
                            ₹{product.originalPrice}
                          </span>
                        </p>
                        {/* Measurement/Quantity */}
                        <span className="text-gray-300 font-medium">{measurement}</span>
                      </div>
                      <p className="text-yellow-400 text-xs mt-1">
                        Rating: {product.ratings} / 5 ({product.reviews.length} reviews)
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product._id)}
                      className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaCartArrowDown /> Add to Cart
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="text-white text-center">No featured products available.</p>
            )}
          </div>
        </div>
      </section>

      {/* ToastContainer for Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Landingpage;
