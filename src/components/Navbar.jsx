



// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { PiListStarBold } from 'react-icons/pi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [user, setUser] = useState(null); // To store logged-in user info

//   // Sample data for demonstration
//   const sampleData = [
//     'Fresh Apples',
//     'Organic Bananas',
//     'Carrots',
//     'Potatoes',
//     'Tomatoes',
//     'Local Honey',
//     'Farm Eggs',
//   ];

//   // Fetch the logged-in user data from localStorage when the component loads
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('userName');
//     if (loggedInUser) {
//       setUser(loggedInUser); // Set the user name or initial from localStorage
//     }
//   }, []);

//   // Handle Search
//   const handleSearch = () => {
//     const filteredResults = sampleData.filter((item) =>
//       item.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem('userName'); // Clear the stored user info
//     setUser(null); // Clear the user state
//   };

//   return (
//     <nav className="bg-green-500 border-b border-gray-200">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold italic font-serif text-black">
//           <NavLink to="/">Farmer's Market</NavLink>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleSearch}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//           >
//             <FaSearch />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">
//             About
//           </NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">
//             Services
//           </NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">
//             Contact
//           </NavLink>

//           {/* If logged in, show user's initial */}
//           {user ? (
//             <div className="flex items-center space-x-2 text-black-600">
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
//                 {user.charAt(0).toUpperCase()} {/* Display the first letter of the name */}
//               </div>
//               <span className="hidden lg:block">Hi, {user}</span>
//               <button
//                 onClick={handleLogout}
//                 className="text-black-600 hover:text-white ml-2"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <NavLink to="/login" className="flex items-center space-x-2 text-black-600 hover:text-white">
//               <FaUser className="h-6 w-6" />
//               <span className="hidden lg:block">Login</span>
//             </NavLink>
//           )}

//           {/* Cart Icon */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//               0
//             </span>
//           </NavLink>

//           {/* Wishlist Icon */}
//           <NavLink to="/wishlist" className="relative ml-4 text-black-600 hover:text-white">
//             <PiListStarBold className="h-6 w-6" />
//           </NavLink>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Search Results */}
//       {searchResults.length > 0 && (
//         <div className="absolute left-0 right-0 bg-white text-black shadow-lg mt-2 rounded-lg z-10">
//           <ul className="py-2">
//             {searchResults.map((result, index) => (
//               <li key={index} className="px-4 py-2 hover:bg-gray-200">
//                 {result}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { PiListStarBold } from 'react-icons/pi';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1])); // Decode token payload
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/SellerDashboard');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <motion.div className="flex items-center space-x-2 text-black-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               <span className="hidden lg:block">Hi, {user}</span>
//               <button onClick={handleLogout} className="text-black-600 hover:text-white ml-2">Logout</button>
//             </motion.div>
//           ) : (
//             <NavLink to="/login" className="flex items-center space-x-2 text-black-600 hover:text-white">
//               <FaUser className="h-6 w-6" />
//               <span className="hidden lg:block">Login</span>
//             </NavLink>
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <NavLink to="/wishlist" className="relative ml-4 text-black-600 hover:text-white">
//             <PiListStarBold className="h-6 w-6" />
//           </NavLink>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/seller');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           {/* <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink> */}
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <motion.div className="flex items-center space-x-2 text-black-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//               <span className="hidden lg:block">Welcome!</span>
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               <button onClick={handleLogout} className="text-black-600 hover:text-white ml-2">Logout</button>
//             </motion.div>
//           ) : (
//             <NavLink to="/login" className="flex items-center space-x-2 text-black-600 hover:text-white">
//               <FaUser className="h-6 w-6" />
//               <span className="hidden lg:block">Login</span>
//             </NavLink>
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <NavLink to="/wishlist" className="relative ml-4 text-black-600 hover:text-white">
//             <FaHeart className="h-6 w-6" />
//           </NavLink>

//           <button onClick={() => navigate('/login')} className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
//             Become Seller
//           </button>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/seller');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <motion.div className="flex items-center space-x-2 text-black-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//               <span className="hidden lg:block">Welcome!</span>
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               <button onClick={handleLogout} className="text-black-600 hover:text-white ml-2">Logout</button>
//             </motion.div>
//           ) : (
//             <NavLink to="/login" className="flex items-center space-x-2 text-black-600 hover:text-white">
//               <FaUser className="h-6 w-6" />
//               <span className="hidden lg:block">Login</span>
//             </NavLink>
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <NavLink to="/wishlist" className="relative ml-4 text-black-600 hover:text-white">
//             <FaHeart className="h-6 w-6" />
//           </NavLink>

//           <button onClick={() => navigate('/login')} className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
//             Become Seller
//           </button>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/seller');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <motion.div className="flex items-center space-x-2 text-black-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               <button onClick={handleLogout} className="text-black-600 hover:text-white ml-2">Logout</button>
//             </motion.div>
//           ) : (
//             <NavLink to="/login" className="flex items-center space-x-2 text-black-600 hover:text-white">
//               <span className="hidden lg:block">Login</span>
//             </NavLink>
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <button onClick={() => navigate('/login')} className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
//             Become Seller
//           </button>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/seller');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <div className="relative">
//               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200">Logout</button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <NavLink to="/login" className="text-black-600 hover:text-white">
//               Login
//             </NavLink>

          
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <button onClick={() => navigate('/login')} className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
//             Become Seller
//           </button>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === 'user') navigate('/Landingpage');
//     else if (role === 'admin') navigate('/AdminDashboard');
//     else if (role === 'seller') navigate('/seller');
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   const handleOutsideClick = (e) => {
//     if (!e.target.closest('.dropdown-container')) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (dropdownOpen) {
//       document.addEventListener('click', handleOutsideClick);
//     } else {
//       document.removeEventListener('click', handleOutsideClick);
//     }
//     return () => document.removeEventListener('click', handleOutsideClick);
//   }, [dropdownOpen]);

//   return (
//     <motion.nav className="bg-green-500 border-b border-gray-200" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//           <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//           <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
          
//           {user ? (
//             <div className="relative dropdown-container">
//               <div
//                 className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg cursor-pointer"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//               >
//                 {user.charAt(0).toUpperCase()}
//               </div>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//                   <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <NavLink to="/login" className="text-black-600 hover:text-white">
//               Login
//             </NavLink>
//           )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <button onClick={() => navigate('/login')} className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
//             Become Seller
//           </button>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black-600 focus:outline-none">
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   useEffect(() => {
//     if (role === "user") navigate("/Landingpage");
//     else if (role === "admin") navigate("/AdminDashboard");
//     else if (role === "seller") navigate("/seller");
//   }, [role, navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setRole(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink
//           to="/"
//           className="text-2xl font-bold italic font-serif text-black"
//         >
//           Farmer's Market
//         </NavLink>

//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         <div
//           className={`lg:flex lg:items-center lg:space-x-6 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <NavLink to="/Landingpage" className="py-2 text-black-700 hover:text-white">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className="py-2 text-black-700 hover:text-white"
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="py-2 text-black-700 hover:text-white"
//           >
//             Contact
//           </NavLink>

//           {user ? (
//   <div className="relative">
//     <div
//       className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg cursor-pointer"
//       onClick={() => setDropdownOpen(!dropdownOpen)}
//     >
//       {user.charAt(0).toUpperCase()}
//     </div>
//     {dropdownOpen && (
//       <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//         <button
//           onClick={handleLogout}
//           className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//         >
//           Logout
//         </button>
//       </div>
//     )}
//   </div>
// ) : (
//   <div className="relative">
//     <FaShoppingCart
//       className="h-6 w-6 cursor-pointer text-black-600"
//       onClick={() => setDropdownOpen(!dropdownOpen)}
//     />
//     {dropdownOpen && (
//       <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//         <NavLink
//           to="/login"
//           className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//         >
//           Login
//         </NavLink>
//       </div>
//     )}
//   </div>
// )}

//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           <button
//             onClick={() => navigate("/login")}
//             className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
//           >
//             Become Seller
//           </button>
//         </div>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Ensure this is defined
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userData = JSON.parse(atob(token.split('.')[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setRole(null);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-green-500 border-b border-gray-200">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Profile/Dropdown Section */}
//         <div className="relative">
//           <FaUserCircle
//             className="h-8 w-8 text-white cursor-pointer"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           />
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//               {user ? (
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <NavLink
//                   to="/login"
//                   className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                 >
//                   Login
//                 </NavLink>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setRole(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink
//           to="/"
//           className="text-2xl font-bold italic font-serif text-black"
//         >
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           <NavLink to="/" className="py-2 text-black-700 hover:text-white">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="py-2 text-black-700 hover:text-white">
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className="py-2 text-black-700 hover:text-white"
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="py-2 text-black-700 hover:text-white"
//           >
//             Contact
//           </NavLink>

//           {/* Dropdown Profile */}
//           <div className="relative">
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//                 {user ? (
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   <NavLink
//                     to="/login"
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Login
//                   </NavLink>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Shopping Cart */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Become Seller Button */}
//           <button
//             onClick={() => navigate("/login")}
//             className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
//           >
//             Become Seller
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//       setRole(userData.role);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setRole(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <NavLink
//           to="/"
//           className="text-2xl font-bold italic font-serif text-black"
//         >
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar (Visible on Desktop) */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Desktop Links */}
//           <div className="hidden lg:flex space-x-6">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">
//               Home
//             </NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">
//               About
//             </NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">
//               Services
//             </NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">
//               Contact
//             </NavLink>
//           </div>

//            {/* Shopping Cart */}
//            <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Profile Dropdown */}
//           <div className="relative">
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//                 {user ? (
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   <NavLink
//                     to="/login"
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Login
//                   </NavLink>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Shopping Cart
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink> */}

//           {/* Become Seller Button */}
//           {/* <button
//             onClick={() => navigate("/login")}
//             className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 hidden lg:block"
//           >
//             Become Seller
//           </button> */}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>
          
//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // Fetch user data from local storage token
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
//         setUser(payload?.name || null);
//         setRole(payload?.role || null);
//       } catch (error) {
//         console.error("Error parsing token:", error);
//         setUser(null);
//         setRole(null);
//       }
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setRole(null);
//     navigate("/login");
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar (Visible on Desktop) */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex space-x-6">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
//           </div>

//           {/* Shopping Cart Icon */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Profile Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg">
//                 {user ? (
//                   <>
//                     <NavLink
//                       to="/account"
//                       className="flex items-center px-4 py-2 text-black-600 hover:bg-gray-200"
//                     >
//                       <FaCog className="mr-2" /> Account
//                     </NavLink>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <NavLink
//                     to="/login"
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Login
//                   </NavLink>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>

//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar (Visible on Desktop) */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex space-x-6">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
//           </div>

//           {/* Shopping Cart Icon */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Account Gear Icon (Navigates to Ordered List) */}
//           <FaCog
//             className="h-8 w-8 text-white cursor-pointer"
//             onClick={() => navigate("/ordered-list")}
//           />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>

//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;








// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Navigation Links */}
//           <div className="hidden lg:flex space-x-6">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
//           </div>

//           {/* Shopping Cart */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Profile Dropdown */}
//           <div className="relative">
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
//                 {/* Account */}
//                 <button
//                   onClick={() => navigate("/ordered-list")}
//                   className="flex items-center w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                 >
//                   <FaCog className="mr-2" /> Account
//                 </button>

//                 {/* Logout (Only if user is logged in) */}
//                 {user && (
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>

//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Navigation Links */}
//           <div className="hidden lg:flex space-x-6 font-bold">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
//           </div>

//           {/* Shopping Cart */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Profile Dropdown */}
//           <div className="relative">
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
//                 {/* Account */}
//                 <button
//                   onClick={() => navigate("/ordered-list")}
//                   className="flex items-center w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                 >
//                   <FaCog className="mr-2" /> Account
//                 </button>

//                 {/* Logout (Only if user is logged in) */}
//                 {user && (
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Auth Dropdown (Login/Signup if not logged in) */}
//           {!user && (
//             <div className="relative">
//               <button
//                 onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
//                 className="text-white font-bold"
//               >
//                 Login/Signup
//               </button>
//               {authDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={() => navigate("/signup")}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Signup
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4 font-bold">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>

//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;









// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const userData = JSON.parse(atob(token.split(".")[1]));
//       setUser(userData.name);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <motion.nav
//       className="bg-green-500 border-b border-gray-200"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
//           Farmer's Market
//         </NavLink>

//         {/* Search Bar */}
//         <div className="hidden lg:flex relative w-1/3">
//           <input
//             type="text"
//             placeholder="Search ..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Links and Profile Section */}
//         <div className="flex items-center space-x-4">
//           {/* Navigation Links */}
//           <div className="hidden lg:flex space-x-6 font-bold">
//             <NavLink to="/" className="py-2 text-black-700 hover:text-white">Home</NavLink>
//             <NavLink to="/about" className="py-2 text-black-700 hover:text-white">About</NavLink>
//             <NavLink to="/services" className="py-2 text-black-700 hover:text-white">Services</NavLink>
//             <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">Contact</NavLink>
//           </div>

//           {/* Shopping Cart */}
//           <NavLink to="/cart" className="relative text-black-600 hover:text-white">
//             <FaShoppingCart className="h-6 w-6" />
//           </NavLink>

//           {/* Profile Dropdown */}
//           <div className="relative">
//             <FaUserCircle
//               className="h-8 w-8 text-white cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
//                 {/* Account */}
//                 <button
//                   onClick={() => navigate("/ordered-list")}
//                   className="flex items-center w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                 >
//                   <FaCog className="mr-2" /> Account
//                 </button>

//                 {/* Logout (Only if user is logged in) */}
//                 {user && (
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Login/Signup (Only show when user is not logged in) */}
//           {!user && (
//             <div className="flex space-x-4 font-bold">
//               <NavLink to="/login" className="text-white hover:text-gray-200">Login</NavLink>
//               <NavLink to="/signup" className="text-white hover:text-gray-200">Signup</NavLink>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-black-600 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-green-500 text-white py-4 space-y-4 font-bold">
//           <NavLink to="/" className="block text-center py-2">Home</NavLink>
//           <NavLink to="/about" className="block text-center py-2">About</NavLink>
//           <NavLink to="/services" className="block text-center py-2">Services</NavLink>
//           <NavLink to="/contact" className="block text-center py-2">Contact</NavLink>

//           {/* Mobile Profile Section */}
//           <div className="flex justify-center items-center space-x-4">
//             <FaUserCircle className="h-8 w-8 text-white cursor-pointer" />
//             <FaShoppingCart className="h-6 w-6 text-white" />
//           </div>

//           {/* Become Seller Button */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-2 bg-yellow-500 text-white rounded-full"
//             >
//               Become Seller
//             </button>
//           </div>
//         </div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserCircle, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Profile dropdown toggle
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref for dropdown to detect outside click

  // Decode user data from token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1]));
      setUser(userData.name); // Set user name from token
    }
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setUser(null); // Reset user state
    navigate("/login"); // Redirect to login page
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <motion.nav
      className="bg-green-500 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold italic font-serif text-black">
          Farmer's Market
        </NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex relative w-1/3">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </button>
        </div>

        {/* Links and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6 font-bold">
            <NavLink to="/" className="py-2 text-black-700 hover:text-white">
              Home
            </NavLink>
            <NavLink to="/about" className="py-2 text-black-700 hover:text-white">
              About
            </NavLink>
            <NavLink to="/services" className="py-2 text-black-700 hover:text-white">
              Services
            </NavLink>
            <NavLink to="/contact" className="py-2 text-black-700 hover:text-white">
              Contact
            </NavLink>
          </div>

          {/* Shopping Cart */}
          <NavLink to="/cart" className="relative text-black-600 hover:text-white">
            <FaShoppingCart className="h-6 w-6" />
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <FaUserCircle
              className="h-8 w-8 text-white cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg max-h-32 overflow-y-auto"
              >
                {/* Account */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/OrderedList");
                  }}
                  className="flex items-center w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
                >
                  <FaCog className="mr-2" /> Account
                </button>

                {/* Logout */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-black-600 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black-600 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-green-500 text-white py-4 space-y-4 font-bold">
          <NavLink to="/" className="block text-center py-2">
            Home
          </NavLink>
          <NavLink to="/about" className="block text-center py-2">
            About
          </NavLink>
          <NavLink to="/services" className="block text-center py-2">
            Services
          </NavLink>
          <NavLink to="/contact" className="block text-center py-2">
            Contact
          </NavLink>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
