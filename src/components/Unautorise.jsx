import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect to the homepage or login page
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Unauthorized Access</h1>
      <p className="text-xl text-gray-700 mb-6">
        You do not have permission to access this page.
      </p>
      <button
        onClick={handleRedirect}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Login Page
      </button>
    </div>
  );
}

export default Unauthorized;
