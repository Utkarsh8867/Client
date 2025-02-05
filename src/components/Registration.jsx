
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify'; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const Registration = ({ onClose }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`https://server-fmp.onrender.com/api/v2/user/create-user`, { // Updated endpoint
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success('Registration successful!');
//         onClose(); // Close the popup on successful registration
//       } else {
//         toast.error(data.message || 'Registration failed!');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       // toast.error('Something went wrong. Please try again later.');
//     }
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login'); // Navigate to /login path
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full mb-3 p-2 border border-gray-300 rounded"
//             required
//           />
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
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <button
//             onClick={handleLoginRedirect} // Navigate to /login on button click
//             className="text-blue-500 hover:underline"
//           >
//             Login
//           </button>
//         </p>
//         <button
//           onClick={onClose} // Call `onClose` to close the popup
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

// export default Registration;






// import React, { useState } from "react";

// const Registration = () => {
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const switchMode = () => {
//     setIsRegistering(!isRegistering);
//     setErrorMessage("");
//     setSuccessMessage("");
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//     const handleLoginRedirect = () => {
//     navigate('/login'); // Navigate to /login path
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (isRegistering) {
//       // Registration logic
//       if (!username || !email || !password || !confirmPassword) {
//         setErrorMessage("All fields are required.");
//         setSuccessMessage("");
//         return;
//       }

//       if (password.length < 6) {
//         setErrorMessage("Password must be at least 6 characters long.");
//         setSuccessMessage("");
//         return;
//       }

//       if (password !== confirmPassword) {
//         setErrorMessage("Passwords do not match.");
//         setSuccessMessage("");
//         return;
//       }

//       setErrorMessage("");

//       try {
//         const response = await fetch(
//           "https://server-fmp.onrender.com/api/v2/user/create-user",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name: username, email, password }),
//           }
//         );

//         const data = await response.json();
//         console.log("Response:", data);

//         if (!response.ok) {
//           setErrorMessage(data.message || "Registration failed.");
//           setSuccessMessage("");
//         } else {
//           setSuccessMessage("Registration successful!");
//           setErrorMessage("");
//           localStorage.setItem("isRegistered", "true");
//           setUsername("");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//         setErrorMessage("Something went wrong. Please try again.");
//       }
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
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           {isRegistering ? "Register" : "Login"}
//         </h2>
//         <form onSubmit={submitHandler} className="space-y-4">
//           {isRegistering && (
//             <div className="space-y-2">
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required={isRegistering}
//               />
//             </div>
//           )}

//           <div className="space-y-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//               minLength="6"
//             />
//           </div>

//           {isRegistering && (
//             <div className="space-y-2">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required={isRegistering}
//               />
//             </div>
//           )}

//           {errorMessage && (
//             <div className="text-sm text-red-500 text-center">{errorMessage}</div>
//           )}

//           {successMessage && (
//             <div className="text-sm text-green-500 text-center">
//               {successMessage}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
//           >
//             {isRegistering ? "Register" : "Login"}
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <button
//             className="text-blue-500 hover:underline"
//             onClick={handleLoginRedirect}
//           >
//             {isRegistering
//               ? "Already have an account? Login"
//               : "Don't have an account? Register"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  // Import useNavigate for redirection
// import { toast } from "react-toastify";  // Import toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

// const Register = () => {
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();  // Initialize navigate

//   const switchMode = () => {
//     setIsRegistering(!isRegistering);
//     setErrorMessage("");
//     setSuccessMessage("");
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (isRegistering) {
//       // Registration logic
//       if (!username || !email || !password || !confirmPassword) {
//         toast.error("All fields are required.");
//         setErrorMessage("All fields are required.");
//         return;
//       }

//       if (password.length < 6) {
//         toast.error("Password must be at least 6 characters long.");
//         setErrorMessage("Password must be at least 6 characters long.");
//         return;
//       }

//       if (password !== confirmPassword) {
//         toast.error("Passwords do not match.");
//         setErrorMessage("Passwords do not match.");
//         return;
//       }

//       setErrorMessage("");

//       try {
//         const response = await fetch(
//           "https://server-fmp.onrender.com/api/v2/user/create-user",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name: username, email, password }),
//           }
//         );

//         const data = await response.json();
//         console.log("Response:", data);

//         if (!response.ok) {
//           toast.error(data.message || "Registration failed.");
//           setErrorMessage(data.message || "Registration failed.");
//         } else {
//           toast.success("Registration successful!");
//           setSuccessMessage("Registration successful!");
//           localStorage.setItem("isRegistered", "true");
//           setUsername("");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//         toast.error("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       {/* Toast container for notifications */}
//       <ToastContainer />

//       <div
//         className="min-h-screen flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/1349772438/photo/thoroughbred-horses-grazing-at-sunset-in-a-field.jpg?s=612x612&w=0&k=20&c=VfeAuYgCbUOqs0k7QZB7XStr5nAk6wn2NSYDDZ8hgJQ=')",
//         }}
//       >
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//             {isRegistering ? "Register" : "Login"}
//           </h2>
//           <form onSubmit={submitHandler} className="space-y-4">
//             {isRegistering && (
//               <div className="space-y-2">
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required={isRegistering}
//                 />
//               </div>
//             )}

//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//                 minLength="6"
//               />
//             </div>

//             {isRegistering && (
//               <div className="space-y-2">
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required={isRegistering}
//                 />
//               </div>
//             )}

//             {errorMessage && (
//               <div className="text-sm text-red-500 text-center">{errorMessage}</div>
//             )}

//             {successMessage && (
//               <div className="text-sm text-green-500 text-center">
//                 {successMessage}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
//             >
//               {isRegistering ? "Register" : "Login"}
//             </button>
//           </form>
//           <div className="text-center mt-4">
//             <button
//               className="text-blue-500 hover:underline"
//               onClick={() => {
//                 switchMode();
//                 if (!isRegistering) {
//                   navigate("/login");  // Redirect to the login page
//                 }
//               }}
//             >
//               {isRegistering
//                 ? "Already have an account? Login"
//                 : "Don't have an account? Register"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  // Import useNavigate for redirection
// import { toast, ToastContainer } from "react-toastify";  // Import toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

// const Registration = () => {
//   const [isRegistering, setIsRegistering] = useState(true);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();  // Initialize navigate

//   const switchMode = () => {
//     setIsRegistering(!isRegistering);
//     setErrorMessage("");
//     setSuccessMessage("");
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (isRegistering) {
//       // Registration logic
//       if (!username || !email || !password || !confirmPassword) {
//         toast.error("All fields are required.");
//         setErrorMessage("All fields are required.");
//         return;
//       }

//       if (password.length < 6) {
//         toast.error("Password must be at least 6 characters long.");
//         setErrorMessage("Password must be at least 6 characters long.");
//         return;
//       }

//       if (password !== confirmPassword) {
//         toast.error("Passwords do not match.");
//         setErrorMessage("Passwords do not match.");
//         return;
//       }

//       setErrorMessage("");

//       try {
//         const response = await fetch(
//           "https://server-fmp.onrender.com/api/v2/user/create-user",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name: username, email, password }),
//           }
//         );

//         const data = await response.json();
//         console.log("Response:", data);

//         if (!response.ok) {
//           toast.error(data.message || "Registration failed.");
//           setErrorMessage(data.message || "Registration failed.");
//         } else {
//           toast.success("Registration successful!");
//           setSuccessMessage("Registration successful!");
//           localStorage.setItem("isRegistered", "true");
//           setUsername("");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         }
//       } catch (error) {
//         console.error("Error during registration:", error);
//         toast.error("Something went wrong. Please try again.");
//       }
//     } else {
//       // Login logic (simplified for example purposes)
//       if (!email || !password) {
//         toast.error("Email and password are required.");
//         return;
//       }

//       try {
//         const response = await fetch(
//           "https://server-fmp.onrender.com/api/v2/user/login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password }),
//           }
//         );

//         const data = await response.json();
//         if (!response.ok) {
//           toast.error(data.message || "Login failed.");
//         } else {
//           toast.success("Login successful!");
//           localStorage.setItem("isLoggedIn", "true");
//           setEmail("");
//           setPassword("");
//           navigate("/dashboard");  // Redirect to a dashboard or main page
//         }
//       } catch (error) {
//         console.error("Error during login:", error);
//         toast.error("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       {/* Toast container for notifications */}
//       <ToastContainer />

//       <div
//         className="min-h-screen flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/1349772438/photo/thoroughbred-horses-grazing-at-sunset-in-a-field.jpg?s=612x612&w=0&k=20&c=VfeAuYgCbUOqs0k7QZB7XStr5nAk6wn2NSYDDZ8hgJQ=')",
//         }}
//       >
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
//             {isRegistering ? "Register" : "Login"}
//           </h2>
//           <form onSubmit={submitHandler} className="space-y-4">
//             {isRegistering && (
//               <div className="space-y-2">
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required={isRegistering}
//                 />
//               </div>
//             )}

//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//                 minLength="6"
//               />
//             </div>

//             {isRegistering && (
//               <div className="space-y-2">
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required={isRegistering}
//                 />
//               </div>
//             )}

//             {errorMessage && (
//               <div className="text-sm text-red-500 text-center">{errorMessage}</div>
//             )}

//             {successMessage && (
//               <div className="text-sm text-green-500 text-center">
//                 {successMessage}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
//             >
//               {isRegistering ? "Register" : "Login"}
//             </button>
//           </form>
//           <div className="text-center mt-4">
//             <button
//               className="text-blue-500 hover:underline"
//               onClick={() => {
//                 switchMode();
//                 if (!isRegistering) {
//                   navigate("/login");  // Redirect to the login page if already in login mode
//                 }
//               }}
//             >
//               {isRegistering
//                 ? "Already have an account? Login"
//                 : "Don't have an account? Register"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Registration;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for redirection
import { toast, ToastContainer } from "react-toastify";  // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();  // Initialize navigate

  const switchMode = () => {
    setIsRegistering(!isRegistering);
    setErrorMessage("");
    setSuccessMessage("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Registration logic
      if (!username || !email || !password || !confirmPassword) {
        toast.error("All fields are required.");
        setErrorMessage("All fields are required.");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        setErrorMessage("Passwords do not match.");
        return;
      }

      setErrorMessage("");

      try {
        const response = await fetch(
          "https://server-fmp.onrender.com/api/v2/user/create-user",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, email, password }),
          }
        );

        const data = await response.json();
        console.log("Response:", data);

        if (!response.ok) {
          toast.error(data.message || "Registration failed.");
          setErrorMessage(data.message || "Registration failed.");
        } else {
          toast.success("Registration successful!");
          setSuccessMessage("Registration successful!");
          localStorage.setItem("isRegistered", "true");
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      {/* Toast container for notifications */}
      <ToastContainer />

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1349772438/photo/thoroughbred-horses-grazing-at-sunset-in-a-field.jpg?s=612x612&w=0&k=20&c=VfeAuYgCbUOqs0k7QZB7XStr5nAk6wn2NSYDDZ8hgJQ=')",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {isRegistering ? "Register" : "Login"}
          </h2>
          <form onSubmit={submitHandler} className="space-y-4">
            {isRegistering && (
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required={isRegistering}
                />
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                minLength="6"
              />
            </div>

            {isRegistering && (
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required={isRegistering}
                />
              </div>
            )}

            {errorMessage && (
              <div className="text-sm text-red-500 text-center">{errorMessage}</div>
            )}

            {successMessage && (
              <div className="text-sm text-green-500 text-center">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>
          <div className="text-center mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => {
                switchMode();
                if (!isRegistering) {
                  navigate("/login");  // Redirect to the login page if already in login mode
                }
              }}
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
