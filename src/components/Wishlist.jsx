import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Access wishlist and remove function from context

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "15px" } },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "10px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "5px" } },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
      {wishlist.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-4 rounded-md text-center group transform transition-all hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-300">{product.price}</p>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Wishlist Carousel</h3>
            <Slider {...sliderSettings}>
              {wishlist.map((product) => (
                <div key={product.id} className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h4 className="text-white mt-2">{product.name}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        <p className="text-gray-400">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
