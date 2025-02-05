import React, { useState } from "react";

const AddressModal = ({ isOpen, onClose, onSaveAddress }) => {
    const [address, setAddress] = useState({
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        addressType: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSaveAddress(address);
        onClose(); // Close the modal after saving
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Add New Address</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="address1"
                        placeholder="Address Line 1"
                        value={address.address1}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="address2"
                        placeholder="Address Line 2"
                        value={address.address2}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={address.city}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={address.state}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={address.country}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={address.postalCode}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="addressType"
                        placeholder="Address Type (Home/Office)"
                        value={address.addressType}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-4 border rounded"
                    />

                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg">
                        Save Address
                    </button>
                </form>

                <button onClick={onClose} className="mt-4 text-red-500">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddressModal;
