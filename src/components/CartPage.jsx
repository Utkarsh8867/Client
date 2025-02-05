


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CartPage = () => {
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                toast.error("User not logged in");
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
                toast.error("Error fetching cart");
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

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">Your Cart</h2>
            {cart && cart.items?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {cart.items.map((product) => (
                        <div key={product.productId._id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src={product.productId?.image || "placeholder.png"}
                                alt={product.productId?.name || "Product Image"}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-white mb-2">{product.productId?.name || "Unknown Product"}</h3>
                            <p className="text-green-100 font-bold text-lg">₹{product.price}</p>
                            <p className="text-gray-300 text-sm mt-2">Quantity: {product.quantity}</p>

                            <div className="flex items-center justify-between mt-4">
                                <button
                                    onClick={() => handleQuantityChange(product.productId._id, 'decrease')}
                                    className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-xl font-semibold">{product.quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(product.productId._id, 'increase')}
                                    className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => handleRemoveProduct(product.productId._id)}
                                className="mt-4 w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center text-xl">Your cart is empty</p>
            )}

            {cart && cart.items?.length > 0 && (
                <div className="mt-10 flex justify-between items-center">
                    <p className="text-2xl font-bold text-gray-100">Total Price: ₹{cart.totalPrice}</p>
                    <button
                        onClick={handleOrderNow}
                        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Order Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;










// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CartPage = () => {
//   const [cart, setCart] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCart = async () => {
//       const userId = localStorage.getItem("userId");
//       if (!userId) {
//         toast.error("User not logged in");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/v2/cart/cart/${userId}`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch cart: ${response.statusText}`);
//         }
//         const data = await response.json();
//         if (data.success) {
//           setCart(data.cart);
//         } else {
//           toast.error("Failed to fetch cart");
//         }
//       } catch (error) {
//         toast.error("Error fetching cart");
//       }
//     };

//     fetchCart();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white">
//       <nav className="bg-green-500 text-black p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Your Cart</h1>
//         </div>
//       </nav>

//       <section className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-extrabold text-white mb-8 text-center underline underline-offset-4 decoration-green-500">
//             Shopping Cart
//           </h2>

//           {cart && cart.items?.length > 0 ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {cart.items.map((product) => (
//                 <div key={product.productId._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
//                   <img
//                     src={product.productId?.image || "placeholder.png"}
//                     alt={product.productId?.name || "Product Image"}
//                     className="w-full h-40 object-cover rounded-md"
//                   />
//                   <div className="mt-3">
//                     <h3 className="text-md font-bold text-white truncate">
//                       {product.productId?.name || "Unknown Product"}
//                     </h3>
//                     <p className="text-green-100 font-bold">₹{product.price}</p>
//                     <p className="text-gray-300 text-sm">Quantity: {product.quantity}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-white text-center">Your cart is empty.</p>
//           )}
//         </div>
//       </section>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CartPage;
