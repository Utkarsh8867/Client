import React from "react";
import { FaSeedling, FaTruck, FaShoppingBasket } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center gap-4">
    <Icon className="text-green-500 text-4xl" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: FaSeedling,
      title: "Fresh Organic Produce",
      description: "We provide fresh, organic, and locally sourced farm products directly from farmers."
    },
    {
      icon: FaTruck,
      title: "Fast & Reliable Delivery",
      description: "Get your fresh produce delivered quickly and safely to your doorstep."
    },
    {
      icon: FaShoppingBasket,
      title: "Easy Online Shopping",
      description: "A seamless and secure online shopping experience for farmers and buyers."
    }
  ];

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
