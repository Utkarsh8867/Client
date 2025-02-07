





// import React, { useState, useEffect } from "react";
// import { FaSearch, FaCartArrowDown } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify"; // Import the toast
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles
// // import dotenv from "dotenv";

// // dotenv.config();

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Check if the user is logged in
//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch(
//           `https://server-fmp.onrender.com/api/v2/product/get-fruits`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch fruits");
//         }
//         const data = await response.json();
//         setFruits(data.products);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("You need to log in to access this page.");
//       // Optionally redirect to login
//       // window.location.href = "/login";
//     }
//   }, []);

//   const handleAddToCart = async (productId) => {
//     if (!token || !userId) {
//       toast.error("Please log in to add products to the cart.");
//       return;
//     }

//     try {
//       const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/add-to-cart`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           userId: userId,
//           productId: productId,
//           quantity: 1, // Default quantity
//         }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to add product to the cart");
//       }

//       toast.success("Product added to cart!");
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       toast.error(err.message || "Error adding product to the cart.");
//     }
//   };

//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       {/* Navbar */}
//       <nav className="bg-green-500 text-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">FruitMart</h1>
//           <div className="flex-1 flex justify-center">
//             <div className="relative w-1/2 md:w-2/3 lg:w-1/3">
//               <input
//                 type="text"
//                 placeholder="Search for fruits..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-10 py-2 rounded-md outline-none text-black"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Content */}
//       <section
//         id="products"
//         className="py-10 bg-gradient-to-r from-gray-900 to-gray-800"
//       >
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
//             Fruits
//           </h2>

//           {/* Loading and Error Handling */}
//           {loading && <p className="text-white text-center">Loading products...</p>}
//           {error && <p className="text-red-500 text-center">{error}</p>}

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//             {filteredFruits.length > 0 ? (
//               filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow-lg relative hover:shadow-xl transition-all duration-300"
//                 >
//                   <img
//                     src={fruit.image.startsWith("http") ? fruit.image : `https://server-fmp.onrender.com${fruit.image}`}
//                     alt={fruit.name}
//                     className="w-full h-40 object-cover rounded-md mb-4"
//                   />
//                   <div className="mt-3">
//                     <h3 className="text-md font-semibold text-white truncate">{fruit.name}</h3>
//                     <div className="flex justify-between items-center text-sm">
//                       <p className="text-green-100 font-bold">
//                         ₹{fruit.discountPrice || fruit.originalPrice}
//                         <span className="line-through text-gray-400">₹{fruit.originalPrice}</span>
//                       </p>
//                       <span className="text-gray-300 font-medium">{fruit.quantity}kg</span>
//                     </div>
//                     <p className="text-yellow-400 text-xs mt-1">
//                       Rating: {fruit.ratings} / 5 ({fruit.reviews.length} reviews)
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleAddToCart(fruit._id)}
//                     className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <FaCartArrowDown /> Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-white text-center">No fruits available.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Toast Notification Container */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default FruitsPage;









// import React, { useState, useEffect } from "react";
// import { FaSearch, FaCartArrowDown } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("token");
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch(
//           `https://server-fmp.onrender.com/api/v2/product/get-fruits`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch fruits");
//         }
//         const data = await response.json();
//         setFruits(data.products);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

//   useEffect(() => {
//     if (!token) {
//       toast.error("You need to log in to access this page.");
//     }
//   }, []);

//   const handleAddToCart = async (productId) => {
//     if (!token || !userId) {
//       toast.error("Please log in to add products to the cart.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://server-fmp.onrender.com/api/v2/cart/add-to-cart`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             userId: userId,
//             productId: productId,
//             quantity: 1,
//           }),
//         }
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to add product to the cart");
//       }

//       toast.success("Product added to cart!");
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//       toast.error(err.message || "Error adding product to the cart.");
//     }
//   };

//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       <nav className="bg-green-500 text-black p-4 flex flex-col md:flex-row justify-between items-center">
//         <h1 className="text-2xl font-bold mb-2 md:mb-0">FruitMart</h1>
//         <div className="w-full md:w-1/2 lg:w-1/3 relative">
//           <input
//             type="text"
//             placeholder="Search for fruits..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-10 py-2 rounded-md outline-none text-black"
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//         </div>
//       </nav>

//       <section className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline decoration-green-500">
//             Fruits
//           </h2>

//           {loading && <p className="text-white text-center">Loading products...</p>}
//           {error && <p className="text-red-500 text-center">{error}</p>}

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//             {filteredFruits.length > 0 ? (
//               filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit._id}
//                   className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <img
//                     src={fruit.image.startsWith("http") ? fruit.image : `https://server-fmp.onrender.com${fruit.image}`}
//                     alt={fruit.name}
//                     className="w-full h-40 object-cover rounded-md mb-4"
//                   />
//                   <h3 className="text-md font-semibold text-white truncate">{fruit.name}</h3>
//                   <div className="flex justify-between items-center text-sm">
//                     <p className="text-green-100 font-bold">
//                       ₹{fruit.discountPrice || fruit.originalPrice}
//                       <span className="line-through text-gray-400">₹{fruit.originalPrice}</span>
//                     </p>
//                     <span className="text-gray-300 font-medium">{fruit.quantity}kg</span>
//                   </div>
//                   <p className="text-yellow-400 text-xs mt-1">
//                     Rating: {fruit.ratings} / 5 ({fruit.reviews.length} reviews)
//                   </p>
//                   <button
//                     onClick={() => handleAddToCart(fruit._id)}
//                     className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-2 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <FaCartArrowDown /> Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-white text-center">No fruits available.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       <ToastContainer />
//     </div>
//   );
// };

// export default FruitsPage;



import React, { useState, useEffect } from "react";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FruitsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch(
          `https://server-fmp.onrender.com/api/v2/product/get-fruits`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch fruits");
        }
        const data = await response.json();
        setFruits(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You need to log in to access this page.");
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
          quantity: 1,
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

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <nav className="bg-green-500 text-black p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">FruitMart</h1>
          <div className="flex-1 flex justify-center w-full md:w-auto">
            <div className="relative w-full sm:w-2/3 md:w-1/3">
              <input
                type="text"
                placeholder="Search for fruits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-10 py-2 rounded-md outline-none text-black"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      <section id="products" className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
            Fruits
          </h2>

          {loading && <p className="text-white text-center">Loading products...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredFruits.length > 0 ? (
              filteredFruits.map((fruit) => (
                <div
                  key={fruit._id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg relative hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={fruit.image.startsWith("http") ? fruit.image : `https://server-fmp.onrender.com${fruit.image}`}
                    alt={fruit.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <div className="mt-3">
                    <h3 className="text-md font-semibold text-white truncate">{fruit.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-green-100 font-bold">
                        ₹{fruit.discountPrice || fruit.originalPrice}
                        <span className="line-through text-gray-400">₹{fruit.originalPrice}</span>
                      </p>
                      <span className="text-gray-300 font-medium">{fruit.quantity}kg</span>
                    </div>
                    <p className="text-yellow-400 text-xs mt-1">
                      Rating: {fruit.ratings} / 5 ({fruit.reviews.length} reviews)
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(fruit._id)}
                    className="mt-4 w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCartArrowDown /> Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No fruits available.</p>
            )}
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default FruitsPage;

