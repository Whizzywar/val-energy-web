import { Award, CheckCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const products = [
    {
      id: 1,
      name: "EnergyFlow Pro",
      category: "Lithium Battery",
      price: 1299,
      originalPrice: 1499,
      image: "/FingerBattery.jpg",
      features: [
        "100Ah LiFePO4 Capacity",
        "10-Year Warranty",
        "Fast Charging Technology",
        "Built-in BMS Protection",
      ],
    },
    {
      id: 2,
      name: "EnergyFlow Elite",
      category: "Lithium Battery",
      price: 2199,
      originalPrice: 2499,
      image: "/InverterBox.jpg",
      features: [
        "200Ah High Capacity",
        "Smart Monitoring System",
        "Deep Cycle Performance",
        "Temperature Control",
      ],
    },
    {
      id: 3,
      name: "SolarMax 400W",
      category: "Solar Panel",
      price: 299,
      originalPrice: 349,
      image: "/InverterBattery.jpg",
      features: [
        "22% Efficiency",
        "Monocrystalline Design",
        "Weather Resistant",
        "25-Year Warranty",
      ],
    },
    {
      id: 4,
      name: "SolarMax 500W",
      category: "Solar Panel",
      price: 399,
      originalPrice: 459,
      image: "/VirtualSolar.jpg",
      features: [
        "Bifacial Technology",
        "High Output",
        "Low-Light Performance",
        "Durable Frame",
      ],
    },
    {
      id: 5,
      name: "PowerInverter",
      category: "Solar Inverter",
      price: 899,
      originalPrice: 999,
      image: "/SolarBattery.jpg",
      features: [
        "Pure Sine Wave",
        "LCD Display",
        "Remote Monitoring",
        "Grid-Tie Compatible",
      ],
    },
    {
      id: 6,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 rounded-full px-6 py-3 mb-6 shadow-sm">
            <Award className="w-6 h-6 mr-2" />
            <span className="font-semibold">Premium Energy Solutions</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Explore Our{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Professionally engineered energy solutions designed for performance,
            durability, and long-term value.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-full h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-blue-600 font-medium text-xs uppercase tracking-wide">
                  {product.category}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                  {product.name}
                </h3>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* PRICE + BUTTON */}
                <div className="border-t pt-5 flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 font-bold text-xl">
                      ${product.price}
                    </p>
                    <p className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </p>
                  </div>

                  <Link
                    to="/products"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
