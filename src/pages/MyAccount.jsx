import React, { useState, useEffect } from "react";

const ProfileSection = ({ profileInfo }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-green-400 mb-4">Profile Information</h2>
    <p><strong>Name:</strong> {profileInfo.name}</p>
    <p><strong>Email:</strong> {profileInfo.email}</p>
    <p><strong>Phone:</strong> {profileInfo.phone}</p>
    <p><strong>Address:</strong> {profileInfo.address}</p>
  </div>
);

const OrderHistorySection = ({ orderHistory }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-green-400 mb-4">Order History</h2>
    {orderHistory.length > 0 ? (
      <ul>
        {orderHistory.map((order) => (
          <li key={order.id} className="mb-2">
            <strong>Order #{order.id}</strong> - {order.date} - {order.total} - {order.status}
          </li>
        ))}
      </ul>
    ) : (
      <p>No orders placed yet.</p>
    )}
  </div>
);

const ProductsSection = ({ products }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-green-400 mb-4">Available Products</h2>
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className="bg-gray-900 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-bold text-green-400">{product.name}</h3>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p>
            <strong>Stock:</strong>{" "}
            <span className={product.stock > 0 ? "text-green-400" : "text-red-400"}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <button
            className="mt-2 px-4 py-2 bg-green-600 text-black font-bold rounded-lg hover:bg-green-700 transition duration-300"
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-400">No products available.</p>
    )}
  </div>
);

const SettingsSection = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-green-400 mb-4">Account Settings</h2>
    <button className="px-6 py-2 bg-green-600 text-black font-bold rounded-lg hover:bg-green-700 transition duration-300 mb-4">
      Update Profile
    </button>
    <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300">
      Delete Account
    </button>
  </div>
);

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "profile");
  const [profileInfo, setProfileInfo] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setProfileInfo({
        name: "Jane Doe",
        email: "janedoe@example.com",
        phone: "+1 (987) 654-3210",
        address: "456 Another St, City, Country",
      });
      setOrderHistory([
        { id: 1, date: "2025-01-05", total: "$75.00", status: "Shipped" },
        { id: 2, date: "2025-01-12", total: "$150.00", status: "Processing" },
      ]);
      setProducts([
        { id: 1, name: "Organic Apples", price: "$10", description: "Fresh and juicy apples.", stock: 20 },
        { id: 2, name: "Wheat Flour", price: "$5", description: "High-quality wheat flour.", stock: 0 },
        { id: 3, name: "Honey", price: "$15", description: "Pure organic honey.", stock: 15 },
        { id: 4, name: "Rice", price: "$20", description: "Premium basmati rice.", stock: 0 },
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Save active tab to localStorage
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSection profileInfo={profileInfo} />;
      case "orders":
        return <OrderHistorySection orderHistory={orderHistory} />;
      case "products":
        return <ProductsSection products={products} />;
      case "settings":
        return <SettingsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Tab Navigation */}
      <header className="bg-gray-900 p-4 shadow-md">
        <nav className="flex justify-center space-x-6">
          {["profile", "orders", "products", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-label={`Go to ${tab} tab`}
              aria-current={activeTab === tab ? "page" : undefined}
              className={`px-6 py-2 rounded-lg font-bold transition duration-300 ${
                activeTab === tab
                  ? "bg-green-600 text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8">{renderContent()}</main>
    </div>
  );
};

export default MyAccount;