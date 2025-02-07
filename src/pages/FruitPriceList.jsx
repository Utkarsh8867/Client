// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState([]);

//   const fruits = [
//     { id: 1, name: "Amla / Indian Gooseberry", price: "₹60", priceUnit: "1 kg", category: "Seasonal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H0anHeGzABon3K5FYMSSjEllMxlWhPatUw&s" },
//     { id: 2, name: "Apples", price: "₹100", priceUnit: "1 kg", category: "Tropical", image: "https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg" },
//     { id: 3, name: "Avocado Imported (Premium)", price: "₹150", priceUnit: "1 Nos", category: "Imported", image: "https://images.healthshots.com/healthshots/en/uploads/2024/04/04153309/avocado-1.jpg" },
//     { id: 4, name: "Bananas", price: "₹80", priceUnit: "1 dozen", category: "Tropical", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT3DfzV4rz5N3UOf-flQmTV1u3N9PJk4gOg&s" },
//     { id: 5, name: "Blueberries", price: "₹100", priceUnit: "1 box", category: "Berries", image: "https://cdn.bestbrains.com/blog/national-blueberry-month/blueberries.jpg" },
//     { id: 6, name: "Chiku", price: "₹70", priceUnit: "500 gms", category: "Tropical", image: "https://i.ndtvimg.com/i/2016-06/sapota_625x350_71466155410.jpg?downsize=545:307" },
//     { id: 7, name: "Dragon Fruit", price: "₹70", priceUnit: "1 nos", category: "Exotic", image: "https://media.post.rvohealth.io/wp-content/uploads/2024/01/A-pink-pitahaya-cut-it-in-half-Dragon-Fruit-thumbnail.jpg" },
//     { id: 8, name: "Fresh Fig - 6 pcs", price: "₹120", priceUnit: "1 Nos", category: "Seasonal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMr_upFiKhbevx03Q_W0T3TnqNYoHl4S2vQ&s" },
//     { id: 9, name: "Grapes-Green", price: "₹60", priceUnit: "500 gms", category: "Berries", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaJNzuh28-gmCQ7GdXz9WULsN2IzbI4QVQQ&s" },
//     { id: 10, name: "Mangoes", price: "₹200", priceUnit: "1 dozen", category: "Seasonal", image: "https://images.example.com/mango.jpg" }
//   ];

//   // Get unique categories for filters
//   const categories = [...new Set(fruits.map((fruit) => fruit.category))];

//   // Filter fruits based on search and selected filters
//   const filteredFruits = fruits.filter(
//     (fruit) =>
//       fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (selectedFilters.length === 0 || selectedFilters.includes(fruit.category))
//   );

//   // Handle filter checkbox change
//   const handleFilterChange = (category) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       {/* Navbar */}
//       <nav className="bg-green-500 text-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">FruitMart</h1>
//           <div className="flex-1 flex justify-center">
//             <div className="relative w-1/2">
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
//       <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
//         {/* Sidebar Filter */}
//         <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-4">Filter by Category</h2>
//           <ul className="space-y-2">
//             {categories.map((category) => (
//               <li key={category} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id={category}
//                   checked={selectedFilters.includes(category)}
//                   onChange={() => handleFilterChange(category)}
//                   className="form-checkbox text-green-500"
//                 />
//                 <label htmlFor={category} className="cursor-pointer">
//                   {category}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {filteredFruits.length > 0 ? (
//               filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit.id}
//                   className="border border-gray-700 border-white rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
//                 >
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
//                   <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
//                   <p className="text-lg font-bold text-green-400 mt-1">
//                     {fruit.price}
//                   </p>
//                   <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
//                     Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">
//                 No fruits found matching your search or filters.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-500 text-black py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.facebook.com" className="hover:text-gray-800">
//                 Facebook
//               </a>
//               <a href="https://twitter.com" className="hover:text-gray-800">
//                 Twitter
//               </a>
//               <a href="https://www.instagram.com" className="hover:text-gray-800">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <p className="mt-2">Email: support@fruitmart.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FruitsPage;


// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch fruits data from backend
//   useEffect(() => {
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/v2/product/get-products-by-category"); // Update the URL based on your backend
//         if (!response.ok) {
//           throw new Error("Failed to fetch fruits data");
//         }
//         const data = await response.json();
//         setFruits(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

//   // Get unique categories for filters
//   const categories = [...new Set(fruits.map((fruit) => fruit.category))];

//   // Filter fruits based on search and selected filters
//   const filteredFruits = fruits.filter(
//     (fruit) =>
//       fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (selectedFilters.length === 0 || selectedFilters.includes(fruit.category))
//   );

//   // Handle filter checkbox change
//   const handleFilterChange = (category) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black text-white">
//         <p>Loading fruits...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black text-white">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       {/* Navbar */}
//       <nav className="bg-green-500 text-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">FruitMart</h1>
//           <div className="flex-1 flex justify-center">
//             <div className="relative w-1/2">
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
//       <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
//         {/* Sidebar Filter */}
//         <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-4">Filter by Category</h2>
//           <ul className="space-y-2">
//             {categories.map((category) => (
//               <li key={category} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id={category}
//                   checked={selectedFilters.includes(category)}
//                   onChange={() => handleFilterChange(category)}
//                   className="form-checkbox text-green-500"
//                 />
//                 <label htmlFor={category} className="cursor-pointer">
//                   {category}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {filteredFruits.length > 0 ? (
//               filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit.id}
//                   className="border border-gray-700 border-white rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
//                 >
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
//                   <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
//                   <p className="text-lg font-bold text-green-400 mt-1">
//                     {fruit.price}
//                   </p>
//                   <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
//                     Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">
//                 No fruits found matching your search or filters.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-500 text-black py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.facebook.com" className="hover:text-gray-800">
//                 Facebook
//               </a>
//               <a href="https://twitter.com" className="hover:text-gray-800">
//                 Twitter
//               </a>
//               <a href="https://www.instagram.com" className="hover:text-gray-800">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <p className="mt-2">Email: support@fruitmart.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FruitsPage;

// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch fruits data from backend
//   useEffect(() => {
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/v2/product/get-products-by-category");
//         if (!response.ok) {
//           console
//           throw new Error("Failed to fetch fruits data");
//         }
//         const data = await response.json();
//         setFruits(data); // Assume `data` is the array of products from MongoDB
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

//   // Get unique categories for filters
//   const categories = [...new Set(fruits.map((fruit) => fruit.category))];

//   // Filter fruits based on search and selected filters
//   const filteredFruits = fruits.filter(
//     (fruit) =>
//       fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (selectedFilters.length === 0 || selectedFilters.includes(fruit.category))
//   );

//   // Handle filter checkbox change
//   const handleFilterChange = (category) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(category)
//         ? prevFilters.filter((filter) => filter !== category)
//         : [...prevFilters, category]
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black text-white">
//         <p>Loading fruits...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-black text-white">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       {/* Navbar */}
//       <nav className="bg-green-500 text-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">FruitMart</h1>
//           <div className="flex-1 flex justify-center">
//             <div className="relative w-1/2">
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
//       <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
//         {/* Sidebar Filter */}
//         <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-4">Filter by Category</h2>
//           <ul className="space-y-2">
//             {categories.map((category) => (
//               <li key={category} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id={category}
//                   checked={selectedFilters.includes(category)}
//                   onChange={() => handleFilterChange(category)}
//                   className="form-checkbox text-green-500"
//                 />
//                 <label htmlFor={category} className="cursor-pointer">
//                   {category}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {filteredFruits.length > 0 ? (
//               filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit.id}
//                   className="border border-gray-700 rounded-md shadow-sm p-4 hover:shadow-md bg-gray-800"
//                 >
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
//                   <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
//                   <p className="text-lg font-bold text-green-400 mt-1">
//                     {fruit.price}
//                   </p>
//                   <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
//                     Add to Cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">
//                 No fruits found matching your search or filters.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-500 text-black py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.facebook.com" className="hover:text-gray-800">
//                 Facebook
//               </a>
//               <a href="https://twitter.com" className="hover:text-gray-800">
//                 Twitter
//               </a>
//               <a href="https://www.instagram.com" className="hover:text-gray-800">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <p className="mt-2">Email: support@fruitmart.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FruitsPage;



// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the backend API
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/v2/product/get-fruits"); // Replace with your actual backend API URL
//         if (!response.ok) {
//           throw new Error("Failed to fetch fruits");
//         }
//         const data = await response.json();
//         setFruits(data.filter(fruit => fruit.category === "Fruits"));
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

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
//             <div className="relative w-1/2">
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
//       <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
//         {/* Sidebar Filter */}
//         <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-4">Filter by Category</h2>
//           <ul className="space-y-2">
//             {/* Filter content can be added here if required */}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 p-4">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading fruits...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : filteredFruits.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit.id}
//                   className="border border-gray-700 border-white rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
//                 >
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
//                   <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
//                   <p className="text-lg font-bold text-green-400 mt-1">
//                     {fruit.price}
//                   </p>
//                   <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500">
//               No fruits found matching your search.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-500 text-black py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.facebook.com" className="hover:text-gray-800">
//                 Facebook
//               </a>
//               <a href="https://twitter.com" className="hover:text-gray-800">
//                 Twitter
//               </a>
//               <a href="https://www.instagram.com" className="hover:text-gray-800">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <p className="mt-2">Email: support@fruitmart.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FruitsPage;


// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";

// const FruitsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [fruits, setFruits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the backend API
//     const fetchFruits = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/v2/product/get-fruits"); // Backend API to fetch fruits
//         if (!response.ok) {
//           throw new Error("Failed to fetch fruits");
//         }
//         const data = await response.json();
        
//         // Set fruits directly from the API response (only fruits category will be included)
//         setFruits(data.products); // Assuming the API response contains a 'products' field
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchFruits();
//   }, []);

//   // Filter fruits based on search query
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
//             <div className="relative w-1/2">
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
//       <div className="flex flex-col md:flex-row p-4 container mx-auto flex-grow">
//         {/* Sidebar Filter */}
//         <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-4">Filter by Category</h2>
//           <ul className="space-y-2">
//             {/* Filter content can be added here if required */}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-full md:w-3/4 p-4">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading fruits...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : filteredFruits.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {filteredFruits.map((fruit) => (
//                 <div
//                   key={fruit.id}
//                   className="border border-gray-700 border-white rounded-md shadow-sm p-4 hover:shadow-md relative bg-gray-800"
//                 >
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-32 object-cover rounded-md"
//                   />
//                   <h3 className="font-semibold text-lg mt-2">{fruit.name}</h3>
//                   <p className="text-sm text-gray-400 mt-1">{fruit.priceUnit}</p>
//                   <p className="text-lg font-bold text-green-400 mt-1">
//                     {fruit.price}
//                   </p>
//                   <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-600">
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-500">
//               No fruits found matching your search.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-500 text-black py-6">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://www.facebook.com" className="hover:text-gray-800">
//                 Facebook
//               </a>
//               <a href="https://twitter.com" className="hover:text-gray-800">
//                 Twitter
//               </a>
//               <a href="https://www.instagram.com" className="hover:text-gray-800">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <p className="mt-2">Email: support@fruitmart.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//       </footer>
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
  const [flipped, setFlipped] = useState({});

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

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
                  className="relative bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 transform perspective-1000"
                  onClick={() => handleFlip(fruit._id)}
                >
                  <div className={`relative w-full h-40 transition-transform duration-500 transform ${flipped[fruit._id] ? 'rotate-y-180' : ''}`}>
                    {!flipped[fruit._id] ? (
                      <img
                        src={fruit.image.startsWith("http") ? fruit.image : `https://server-fmp.onrender.com${fruit.image}`}
                        alt={fruit.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 text-white p-4 rounded-md flex flex-col justify-center items-center">
                        <p className="text-md font-semibold">{fruit.description}</p>
                        <p className="text-sm text-yellow-300">Tags: {fruit.tags.join(", ")}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(fruit._id);
                    }}
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
