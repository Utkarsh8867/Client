import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                toast.error("User not logged in");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/cart/${userId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch cart: ${response.statusText}`);
                }
                const data = await response.json();
                if (data.success) {
                    setCart(data.cart);
                } else {
                    toast.error("Failed to fetch cart");
                }
            } catch (error) {
                toast.error("Cart is Empty");
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    const handleQuantityChange = async (productId, action) => {
        const userId = localStorage.getItem("userId");
        if (!userId) return toast.error("User not logged in");

        const updatedCart = { ...cart };
        const productIndex = updatedCart.items.findIndex(item => item.productId._id === productId);
        const product = updatedCart.items[productIndex];

        if (action === "increase") {
            product.quantity += 1;
        } else if (action === "decrease" && product.quantity > 1) {
            product.quantity -= 1;
        } else {
            return toast.warn("Quantity can't be less than 1");
        }

        updatedCart.totalPrice = updatedCart.items.reduce((acc, item) => {
            return acc + item.quantity * item.price;
        }, 0);

        try {
            const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/update-quantity`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    productId,
                    quantity: product.quantity,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setCart(updatedCart);
                toast.success("Quantity updated successfully");
            } else {
                toast.error("Failed to update quantity");
            }
        } catch (error) {
            toast.error("Error updating quantity");
        }
    };

    const handleRemoveProduct = async (productId) => {
        const userId = localStorage.getItem("userId");
        if (!userId) return toast.error("User not logged in");

        try {
            const response = await fetch(`https://server-fmp.onrender.com/api/v2/cart/remove-from-cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    productId,
                }),
            });

            const data = await response.json();
            if (data.success) {
                const updatedCart = { ...cart };
                updatedCart.items = updatedCart.items.filter(item => item.productId._id !== productId);
                updatedCart.totalPrice = updatedCart.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
                setCart(updatedCart);
                toast.success("Product removed from cart");
            } else {
                toast.error("Failed to remove product");
            }
        } catch (error) {
            toast.error("Error removing product");
        }
    };

    const handleOrderNow = () => {
        navigate("/order");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading your cart...</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <ToastContainer position="top-right" autoClose={3000} />
            
            {/* Header */}
            <motion.div 
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center space-x-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <FaShoppingCart className="text-3xl sm:text-4xl" />
                        <span>Your Cart</span>
                    </motion.h1>
                    <motion.p 
                        className="text-lg sm:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Review your fresh selections before checkout
                    </motion.p>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {cart && cart.items?.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <motion.div 
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <AnimatePresence>
                                    {cart.items.map((product, index) => (
                                        <motion.div
                                            key={product.productId._id}
                                            className="card p-6"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            layout
                                        >
                                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                                                <div className="relative">
                                                    <img
                                                        src={product.productId?.image || "placeholder.png"}
                                                        alt={product.productId?.name || "Product Image"}
                                                        className="w-24 h-24 object-cover rounded-xl"
                                                    />
                                                </div>
                                                
                                                <div className="flex-1 text-center md:text-left">
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                        {product.productId?.name || "Unknown Product"}
                                                    </h3>
                                                    <p className="text-2xl font-bold text-blue-600">₹{product.price}</p>
                                                </div>
                                                
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-3 bg-blue-100 rounded-full px-4 py-2">
                                                        <motion.button
                                                            onClick={() => handleQuantityChange(product.productId._id, 'decrease')}
                                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <FaMinus className="text-xs" />
                                                        </motion.button>
                                                        <span className="text-xl font-bold text-blue-700 min-w-[2rem] text-center">
                                                            {product.quantity}
                                                        </span>
                                                        <motion.button
                                                            onClick={() => handleQuantityChange(product.productId._id, 'increase')}
                                                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <FaPlus className="text-xs" />
                                                        </motion.button>
                                                    </div>
                                                    
                                                    <motion.button
                                                        onClick={() => handleRemoveProduct(product.productId._id)}
                                                        className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <FaTrash />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {/* Order Summary */}
                        <motion.div 
                            className="lg:col-span-1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="card p-8 sticky top-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Items ({cart.items.length})</span>
                                        <span>₹{cart.totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery</span>
                                        <span className="text-green-600 font-semibold">Free</span>
                                    </div>
                                    <hr className="border-gray-200" />
                                    <div className="flex justify-between text-xl font-bold text-gray-800">
                                        <span>Total</span>
                                        <span className="text-blue-600">₹{cart.totalPrice}</span>
                                    </div>
                                </div>
                                
                                <motion.button
                                    onClick={handleOrderNow}
                                    className="btn-primary w-full flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Proceed to Checkout</span>
                                    <FaArrowRight />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <motion.div 
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-8xl mb-6">🛒</div>
                        <h2 className="text-3xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Add some fresh products to get started!</p>
                        <motion.button
                            onClick={() => navigate('/')}
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Shopping
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CartPage;