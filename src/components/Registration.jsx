
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Registration = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://server-fmp.onrender.com/api/v2/user/create-user`, { // Updated endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Registration successful!');
        onClose(); // Close the popup on successful registration
      } else {
        toast.error(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to /login path
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button
            onClick={handleLoginRedirect} // Navigate to /login on button click
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
        <button
          onClick={onClose} // Call `onClose` to close the popup
          className="mt-4 text-red-500 hover:underline w-full text-center"
        >
          Close
        </button>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Registration;





// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Registration = ({ onClose = () => {} }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password.length < 6) {
//       toast.error('Password must be at least 6 characters long.');
//       return;
//     }

//     try {
//       const response = await fetch(`https://server-fmp.onrender.com/api/v2/user/create-user`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       toast.success('Registration successful!');
//       onClose(); 
//     } catch (error) {
//       console.error('Error during registration:', error);
//       toast.error(error.message || 'Something went wrong. Please try again later.');
//     }
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
//           <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
//             Register
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline">
//             Login
//           </button>
//         </p>
//         <button onClick={onClose} className="mt-4 text-red-500 hover:underline w-full text-center">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Registration;
