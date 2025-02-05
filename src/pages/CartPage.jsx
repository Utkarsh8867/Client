import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartData, setCartData] = useState([
    { id: 1, name: "Fresh Apple", price: 3.0, quantity: 2, image: "apple.jpg" },
    { id: 2, name: "Organic Carrot", price: 2.5, quantity: 3, image: "carrot.jpg" },
  ]);
  
  const navigate = useNavigate();

  // Check if user is registered
  useEffect(() => {
    const isRegistered = localStorage.getItem("isRegistered");
    if (!isRegistered) {
      alert("You need to register to access the cart.");
      navigate("/register"); // Redirect to the register page
    }
  }, [navigate]);

  const calculateTotalPrice = () => {
    return cartData.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const removeCartItem = (itemId) => {
    setCartData(cartData.filter((item) => item.id !== itemId));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div id="cart-items" className="space-y-4">
        {cartData.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover mr-4 rounded-md"
            />
            <div className="flex-1">
              <div className="text-lg font-semibold text-gray-700">
                {item.name}
              </div>
              <div className="text-sm text-gray-500">
                Price: ${item.price.toFixed(2)}
              </div>
              <div className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </div>
            </div>
            <button
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              onClick={() => removeCartItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div
        id="total-price"
        className="mt-6 text-xl font-bold text-gray-800 flex justify-between"
      >
        <span>Total Price:</span>
        <span>${calculateTotalPrice()}</span>
      </div>
    </div>
  );
};

export default CartPage;
