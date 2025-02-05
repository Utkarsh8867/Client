// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ requiredRole }) => {
//   const token = localStorage.getItem("token"); // Check token existence
//   const userRole = localStorage.getItem("role"); // Get user role from localStorage

//   if (!token) {
//     // Redirect to login if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   if (requiredRole && userRole !== requiredRole) {
//     // Redirect to unauthorized if user doesn't have the required role
//     return <Navigate to="/unauthorized" replace />;
//   }

//   // Render the nested route (Outlet) if the user is authorized
//   return <Outlet />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './layout/Layout';
import Landingpage from '../pages/Landingpage';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); // Check if there's a token in localStorage

  if (!token) {
    // If no token, redirect to login page
    console.log("hhhhh")
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the nested routes (Outlet)
  return <Landingpage />;
};

export default ProtectedRoute;
