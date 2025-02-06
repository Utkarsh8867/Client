



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify'; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       navigate('/'); // Redirect to home if user is already logged in
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`https://server-fmp.onrender.com/api/v2/user/login-user`, formData);

//       if (response.status === 200) {
//         const { token, userId, role } = response.data;
//         localStorage.setItem('token', token);
//         localStorage.setItem('userId', userId);
//         localStorage.setItem('role', role);
//         console.log(role)

//         toast.success('Login successful!');
        
//         // Role-based redirection
//         if (role === 'user') {
//           navigate('/Landingpage');
//         } else if (role === 'admin') {
//           navigate('/AdminDashboard');
//         } else if (role === 'seller') {
//           navigate('/seller');
//         } else {
//           navigate('/');
//         }
//       } else {
//         toast.error(response.data.message || 'Login failed!');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       toast.error('Invalid email or password');
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full mb-3 p-2 border border-gray-300 rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full mb-3 p-2 border border-gray-300 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?
//           <button
//             onClick={() => navigate('/register')}
//             className="text-blue-500 hover:underline ml-1"
//           >
//             Register
//           </button>
//         </p>
        
//         <button
//           onClick={() => navigate('/')}
//           className="mt-4 text-red-500 hover:underline w-full text-center"
//         >
//           Close
//         </button>
//       </div>
      
//       {/* Toast Notification Container */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         `https://server-fmp.onrender.com/api/v2/user/login-user`,
//         formData
//       );

//       if (response.status === 200) {
//         const { token, userId, role } = response.data;
//         localStorage.setItem("token", token);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("role", role);
//         console.log(role);

//         toast.success("Login successful!");

//         if (role === "user") {
//           navigate("/Landingpage");
//         } else if (role === "admin") {
//           navigate("/AdminDashboard");
//         } else if (role === "seller") {
//           navigate("/seller");
//         } else {
//           navigate("/");
//         }
//       } else {
//         toast.error(response.data.message || "Login failed!");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       toast.error("Invalid email or password");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://media.istockphoto.com/id/1349772438/photo/thoroughbred-horses-grazing-at-sunset-in-a-field.jpg?s=612x612&w=0&k=20&c=VfeAuYgCbUOqs0k7QZB7XStr5nAk6wn2NSYDDZ8hgJQ=')",
//       }}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
//           >
//             Login
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <button
//             className="text-blue-500 hover:underline"
//             onClick={() => navigate("/register")}
//           >
//             Don't have an account? Register
//           </button>
//         </div>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 text-red-500 hover:underline w-full text-center"
//         >
//           Close
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;








import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://server-fmp.onrender.com/api/v2/user/login-user`,
        formData
      );

      if (response.status === 200) {
        const { token, userId, role } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);
        console.log(role);

        toast.success("Login successful!");

        // Adding the special condition for admin user
        if (userId === "67a3b8b7c5aa22af2e2bc864" && formData.email === "baban@gmail.com") {
          navigate("/sellerDashboard"); // Redirect to admin dashboard
        } else if (role === "user") {
          navigate("/Landingpage");
        } else if (role === "admin") {
          navigate("/AdminDashboard");
        } else if (role === "seller") {
          navigate("/seller");
        } else {
          navigate("/");
        }
      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1349772438/photo/thoroughbred-horses-grazing-at-sunset-in-a-field.jpg?s=612x612&w=0&k=20&c=VfeAuYgCbUOqs0k7QZB7XStr5nAk6wn2NSYDDZ8hgJQ=')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
          >
            Login
          </motion.button>
        </form>
        <div className="text-center mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-blue-500 hover:underline"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/")}
          className="mt-4 text-red-500 hover:underline w-full text-center"
        >
          Close
        </motion.button>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Login;
