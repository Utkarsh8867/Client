// import React from "react";

// const VegetablesPage = () => {
//   const vegetables = [
//     {
//       id: 1,
//       name: "Fresh Spinach - 250g",
//       price: "₹30",
//       priceUnit: "1 Pack",
//       discount: "10% Off",
//       image: "https://gabbarfarms.com/cdn/shop/products/Spinach_1000x.jpg?v=1620713074",
//     },
//     {
//       id: 2,
//       name: "Tomatoes - 1 kg",
//       price: "₹60",
//       priceUnit: "1 kg",
//       discount: null,
//       image: "https://tagawagardens.com/wp-content/uploads/2023/08/TOMATOES-RED-RIPE-VINE-SS-1-1024x681.jpg",
//     },
//     {
//       id: 3,
//       name: "Cauliflower - 1 pc (Approx. 500g)",
//       price: "₹50",
//       priceUnit: "1 Nos",
//       discount: "15% Off",
//       image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Chou-fleur_02.jpg",
//     },
//     {
//       id: 4,
//       name: "Potatoes - 1 kg",
//       price: "₹50",
//       priceUnit: "1 kg",
//       discount: null,
//       image: "https://images.squarespace-cdn.com/content/v1/5b5b5824f2e6b10639fdaf09/a277eae9-bf1a-4e66-9daf-dd2e60209073/Produce+Storage+Tips+icons+%289%29.png",
//     },
//     {
//       id: 5,
//       name: "carrots - 500g",
//       price: "₹35",
//       priceUnit: "500g",
//       discount: "15% off",
//       image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665",
//     },
//     {
//       id: 6,
//       name: "Onions - 1 kg",
//       price: "₹30",
//       priceUnit: "1 kg",
//       discount: null,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKMNZkxxoP37HVKu8y-ZDAukbU37l-nnGzw&s",
//     },
//     {
//       id: 7,
//       name: "Beetroot - 500 g",
//       price: "₹36",
//       priceUnit: "500 g",
//       discount: "22% off",
//       image: "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjM5MWRmMTk5M2JmZmZmYTQ5NzFjYjNlOTRlMWUzNDVkLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=1426db2d2363f9c984e99dc37826d66275bd93e18d07be2634fdbf8edf99f707",
//     },
//     {
//       id: 8,
//       name: "Cucumber - 500 g",
//       price: "₹30",
//       priceUnit: "500 g",
//       discount: null,
//       image: "https://www.greendna.in/cdn/shop/products/cucumber_1_700x.jpg?v=1594219681",
//     },
//     {
//       id: 9,
//       name: "Coriander(cleaned) - 100 g",
//       price: "₹15",
//       priceUnit: "100 g",
//       discount: "32% off",
//       image: "https://revasafarms.com/cdn/shop/products/Coriander_965c338e-58f4-4d92-ada2-7de830a61071.webp?v=1707226410",
//     },
//     {
//       id: 10,
//       name: "Brinjal - 1 kg",
//       price: "₹40",
//       priceUnit: "1 kg",
//       discount: "18 % off",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5dQOhGcAuXfr2at_Ipu6ggHDdOLD9lXxow&s",
//     },
//     {
//       id: 11,
//       name: "Cabbage - 450 g",
//       price: "₹22",
//       priceUnit: "1 Nos",
//       discount: null,
//       image: "https://images.healthshots.com/healthshots/en/uploads/2021/09/29144251/cabbage.jpg",
//     },
//     {
//       id: 12,
//       name: "Green chilli - 250 g",
//       price: "₹16",
//       priceUnit: "250 g",
//       discount: "20% off",
//       image: "https://nammagrocery.com/cdn/shop/files/chilligreen2_grande_9715aacf-d23d-4d1a-86b3-3edf0fbb4b9e.jpg?v=1711803738",
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row p-4">
//       {/* Sidebar Filter */}
//       <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-md">
//         <h2 className="font-semibold text-lg mb-4">Filter</h2>
//         <ul className="space-y-2">
//           {[
//             "Fruits",
//             "Vegetables",
//             "Dairy Farm",
//             "Ghee",
//             "Village Staples",
//             "Winter Special",
//             "Dry Fruits",
//             "Cold Pressed Oils",
//             "More",
//           ].map((item) => (
//             <li key={item} className="cursor-pointer hover:text-green-600">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-4">
//         {/* Banner Section with Spinach Image as Background */}
//         <div
//           className="bg-cover bg-center p-6 text-center rounded-md"
//           style={{
//             backgroundImage: url('https://gabbarfarms.com/cdn/shop/products/Spinach_1000x.jpg?v=1620713074'),
//           }}
//         >
//           <h2 className="text-2xl font-bold text-white">Fresh Vegetables are now just a click away.</h2>
//           <button className="mt-4 px-4 py-2 bg-white text-green-500 font-semibold rounded-md hover:bg-gray-100">
//             Order Now
//           </button>
//         </div>

//         {/* Vegetables List */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//           {vegetables.map((vegetable) => (
//             <div
//               key={vegetable.id}
//               className="border rounded-md shadow-sm p-4 hover:shadow-md relative"
//             >
//               {vegetable.discount && (
//                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 left-2">
//                   {vegetable.discount}
//                 </span>
//               )}
//               <img
//                 src={vegetable.image}
//                 alt={vegetable.name}
//                 className="w-full h-32 object-cover rounded-md"
//               />
//               <h3 className="font-semibold text-lg mt-2">{vegetable.name}</h3>
//               <p className="text-sm text-gray-500 mt-1">{vegetable.priceUnit}</p>
//               <p className="text-lg font-bold text-green-600 mt-1">{vegetable.price}</p>
//               <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VegetablesPage;