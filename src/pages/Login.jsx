import React, { useState } from "react";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Register handler
  const registerHandler = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      setSuccessMessage("");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setSuccessMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMessage(data.error || "Registration failed.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Login handler
  const loginHandler = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      setSuccessMessage("");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMessage(data.error || "Login failed.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("Login successful!");
        setErrorMessage("");
        // Handle successful login (e.g., redirect, store token)
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again.");
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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form
          onSubmit={isLogin ? loginHandler : registerHandler}
          className="space-y-4"
        >
          {/* Username Field (only for Register) */}
          {!isLogin && (
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
                required
              />
            </div>
          )}

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Confirm Password Field (only for Register) */}
          {!isLogin && (
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
                required
              />
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="text-sm text-red-500 text-center">{errorMessage}</div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="text-sm text-green-500 text-center">
              {successMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-green-200"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="text-center mt-4">
          <span
            className="text-sm text-blue-500 cursor-pointer"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin
              ? "Don't have an account? Register here"
              : "Already have an account? Login here"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;