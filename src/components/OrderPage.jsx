




import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const OrderPage = () => {
  const [cart, setCart] = useState(null); // Cart state
  const [userAddresses, setUserAddresses] = useState([]); // Saved addresses
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [newAddress, setNewAddress] = useState({
    country: "",
    city: "",
    address1: "",
    address2: "",
    zipCode: "",
    addressType: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null); // Selected shipping address

  // Fetch cart and user addresses on component mount
  useEffect(() => {
    const fetchCart = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return alert("Please log in.");

      const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/cart/${userId}`);
      const data = await response.json();

      if (data.success) {
        setCart(data.cart);
      }
    };

    const fetchUserAddresses = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return alert("Please log in.");

      const response = await fetch(`https://server-fmp.onrender.com/api/v2/user/${userId}/addresses`);
      const data = await response.json();

      if (data.success) {
        setUserAddresses(data.addresses);
      }
    };

    fetchCart();
    fetchUserAddresses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  const handleSaveAddress = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return alert("User not logged in");

    try {
      const response = await fetch(`https://server-fmp.onrender.com/api/v2/user/user/${userId}/add-address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ addresses: [newAddress] }),
      });

      const data = await response.json();

      if (data.success) {
        setUserAddresses([...userAddresses, newAddress]); // Add the new address to the list
        setSelectedAddress(newAddress); // Select the newly added address
        setIsModalOpen(false); // Close the modal
        setNewAddress({
          country: "",
          city: "",
          address1: "",
          address2: "",
          zipCode: "",
          addressType: "",
        }); // Reset the form
        toast.success("This is a success notification!");
      } else {
        toast.success("This is a success notification!");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      alert("Error adding address.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Review and Confirm Order</h2>

      {/* Cart Summary */}
      {cart && cart.items?.length > 0 ? (
        <div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cart.items.map((product) => (
                <div
                  key={product.productId._id}
                  className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={product.productId?.image || "placeholder.png"}
                    alt={product.productId?.name}
                    className="w-32 h-32 object-cover mb-2 rounded-md"
                  />
                  <span className="text-center text-sm font-medium">
                    {product.productId?.name}
                  </span>
                  <span className="text-gray-700 font-semibold">₹{product.price}</span>
                  <span className="text-gray-500 text-sm">x {product.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>

            {userAddresses.length > 0 ? (
              <div className="space-y-2">
                {userAddresses.map((address, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="address"
                      value={index}
                      onChange={() => setSelectedAddress(address)}
                      className="mr-2"
                      checked={selectedAddress === address}
                    />
                    <span>
                      {address.address1}, {address.city}, {address.state}, {address.country}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No addresses found. Please add an address.</p>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-4 p-3 bg-gray-300 text-gray-800 rounded-lg"
            >
              Add New Address
            </button>

            <button
              onClick={() =>
                window.location.href =
                  "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7NE40656506492727"
              }
              disabled={!selectedAddress}
              className="w-full mt-4 p-3 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Checkout with PayPal
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty</p>
      )}

      {/* Address Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <Dialog.Title className="text-xl font-bold mb-4">Add New Address</Dialog.Title>

            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  name="country"
                  value={newAddress.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="city"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="address1"
                  value={newAddress.address1}
                  onChange={handleInputChange}
                  placeholder="Address Line 1"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="address2"
                  value={newAddress.address2}
                  onChange={handleInputChange}
                  placeholder="Address Line 2"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="zipCode"
                  value={newAddress.zipCode}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className="w-full p-2 border rounded"
                />
                <select
                  name="addressType"
                  value={newAddress.addressType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Address Type</option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                </select>
              </div>
            </form>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAddress}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default OrderPage;
