





import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Make sure to install react-slick and slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OrderPage = () => {
  const bannerImages = [
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241210112748Hurda%20Combo%20Story%20Web.jpg?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20241219162537Story%20Banner%20Web%20%201920px%20%20600px.png?tr=f-webp",
    "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/BannerImage/20240806183118Shrikhand%20web%20story.jpg?tr=f-webp",
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Sample order data
  const [orders, setOrders] = useState([]); // Initially, the orders array is empty
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const userId = '123'; // Replace with actual userId (could be from auth context or token)

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://server-fmp.onrender.com/api/v2/order/get-all-orders/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setOrders(data.orders); // Assuming 'orders' is the key containing the order data
        } else {
          setError(data.message || 'Failed to fetch orders');
        }
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]); // Only re-fetch if userId changes

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Slider Section */}
      <section className="bg-black py-6">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {bannerImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Banner ${index + 1}`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="container mx-auto p-6 text-center">
          <p>Loading your orders...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="container mx-auto p-6 text-center text-red-500">
          <p>{error}</p>
        </div>
      )}

      {/* Order Table Section - Only show if there are orders */}
      {orders.length > 0 && !loading && !error ? (
        <section className="container mx-auto p-6 bg-white shadow-md mt-6">
          <h2 className="text-3xl font-bold text-center mb-6">Order Details</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border text-left">ID</th>
                <th className="py-2 px-4 border text-left">Product</th>
                <th className="py-2 px-4 border text-left">Total Amount</th>
                <th className="py-2 px-4 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.product}</td>
                  <td className="py-2 px-4">${order.amount}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        order.status === 'Shipped'
                          ? 'bg-green-500 text-white'
                          : order.status === 'Pending'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        // Show this message if there are no orders
        !loading && !error && (
          <section className="container mx-auto p-6 bg-white shadow-md mt-6">
            <h2 className="text-3xl font-bold text-center mb-6">No Orders Available</h2>
          </section>
        )
      )}
    </div>
  );
};

export default OrderPage;










