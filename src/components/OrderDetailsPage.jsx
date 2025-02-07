import React, { useEffect, useState } from "react";

const OrderDetailsPage = () => {
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://server-fmp.onrender.com/api/v2/order/api/cart/${userId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch orders");
                }
                return res.json();
            })
            .then((data) => {
                setOrders(data.order);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center p-4 text-lg font-bold font-poppins">Loading...</div>;
    }

    if (error) {
        return <div className="text-center p-4 text-red-500 text-lg font-bold font-poppins">Error: {error}</div>;
    }

    if (!orders || !orders.cart) {
        return <div className="text-center p-4 text-lg font-bold font-poppins">No orders found.</div>;
    }

    return (
        <div className="container mx-auto p-6 max-w-5xl bg-white shadow-lg rounded-lg font-poppins">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Order Details</h1>
            <div className="border p-6 rounded-lg shadow-md bg-gray-100">
                <h2 className="text-2xl font-semibold text-gray-700">Order ID: {orders._id}</h2>
                <p className="text-gray-600 text-lg"><strong>User:</strong> {orders.userName}</p>
                <p className="text-gray-600 text-lg"><strong>Status:</strong> <span className={`font-semibold ${orders.status === "Processing" ? "text-yellow-500" : "text-green-600"}`}>{orders.status}</span></p>
                <p className="text-gray-600 text-lg"><strong>Paid At:</strong> {orders.paidAt ? new Date(orders.paidAt).toLocaleString() : "N/A"}</p>
                <h3 className="font-bold mt-4 text-gray-700 text-xl">Shipping Address</h3>
                <p className="text-gray-600 text-lg">{orders.shippingAddress?.name}, {orders.shippingAddress?.address}, {orders.shippingAddress?.city}, {orders.shippingAddress?.state}, {orders.shippingAddress?.country} - {orders.shippingAddress?.postalCode}</p>
                <p className="text-gray-600 text-lg"><strong>Phone:</strong> {orders.shippingAddress?.phone}</p>
                <h3 className="font-bold mt-4 text-gray-700 text-xl">Cart Items</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {orders.cart.map((item, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
                            <img src={item.productId.image} alt={item.productId.name} className="w-full h-40 object-cover rounded-md" />
                            <p className="font-semibold text-gray-800 mt-2 text-lg">{item.productId.name}</p>
                            <p className="text-gray-600 text-lg">Price: <span className="font-semibold text-green-600">₹{item.price}</span></p>
                            <p className="text-gray-600 text-lg">Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
