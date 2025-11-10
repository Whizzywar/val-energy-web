import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product categories
  const categories = [
    { id: "all", name: "All Products", icon: "🔋" },
    { id: "solar", name: "Solar Solutions", icon: "☀️" },
    { id: "storage", name: "Energy Storage", icon: "⚡" },
    { id: "smart", name: "Smart Solutions", icon: "🏠" },
    { id: "commercial", name: "Commercial", icon: "🏢" },
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: "SolarHome",
      category: "solar",
      price: "$12,499",
      description:
        "Complete residential solar system with premium efficiency panels",
      image: "/FingerBattery.jpg",
      features: [
        "25-Year Performance Warranty",
        "95% System Efficiency",
        "Smart Energy Monitoring",
        "Weather-Resistant Design",
        "Easy Installation Process",
      ],
      specifications: {
        capacity: "8.2 kW",
        warranty: "25 years",
      },
    },
    {
      id: 2,
      name: "PowerWall",
      category: "storage",
      price: "$8,999",
      description: "Advanced home battery storage for energy independence",
      image: "/VirtualSolar.jpg",
      features: [
        "13.5 kWh Capacity",
        "10-Year Warranty",
        "Backup Power Ready",
        "Smart Grid Integration",
        "Mobile App Control",
      ],
      specifications: {
        capacity: "13.5 kWh",
        warranty: "10 years",
      },
    },
    {
      id: 3,
      name: "Smart Thermo",
      category: "smart",
      price: "$299",
      description: "AI-powered smart thermostat for optimal energy savings",
      image: "/SolarPanel.jpg",
      features: [
        "AI Energy Optimization",
        "Voice Control Compatible",
        "Geofencing Technology",
        "Energy Usage Reports",
        "Easy DIY Installation",
      ],
      specifications: {
        capacity: "12-24 kW",
        warranty: "3 years",
      },
    },
    {
      id: 4,
      name: "Commercial Solar",
      category: "commercial",
      price: "$299",
      description:
        "Enterprise-grade solar solutions for businesses and organizations",
      image: "/SolarBattery.jpg",
      features: [
        "Scalable to 1MW+",
        "Commercial Warranty",
        "Remote Monitoring",
        "Maintenance Programs",
        "ROI Optimization",
      ],
      specifications: {
        capacity: "12-24 kW",
        warranty: "15-25 years",
      },
    },
    {
      id: 5,
      name: "Commercial Solar",
      category: "commercial",
      price: "$299",
      description:
        "Enterprise-grade solar solutions for businesses and organizations",
      image: "/SolarBattery.jpg",
      features: [
        "Scalable to 1MW+",
        "Commercial Warranty",
        "Remote Monitoring",
        "Maintenance Programs",
        "ROI Optimization",
      ],
      specifications: {
        capacity: "12-24 kW",
        warranty: "15-25 years",
      },
    },
    {
      id: 6,
      name: "Solar System",
      category: "commercial",
      price: "$45,000",
      description:
        "Dual-purpose solar structure providing shade and clean energy",
      image: "/InverterBattery.jpg",
      features: [
        "EV Charging Ready",
        "Weather Protection",
        "LED Lighting Included",
        "Custom Design Options",
        "Quick Installation",
      ],
      specifications: {
        capacity: "12-24 kW",
        warranty: "15 years",
      },
    },
    {
      id: 7,
      name: "Energy Monitor",
      category: "smart",
      price: "$199",
      description:
        "Real-time energy monitoring and insights for your entire home",
      image: "/InverterBox.jpg",
      features: [
        "Real-time Monitoring",
        "Circuit-level Insights",
        "Cost Tracking",
        "Alerts & Notifications",
        "Easy Installation",
      ],
      specifications: {
        capacity: "12-24 kW",
        warranty: "2 years",
      },
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-4 mb-5">
          <span>⚡</span>
          <span>Clean Energy Solutions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Power Your Future with{" "}
          <span className="text-blue-600">Clean Energy</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of energy products designed for
          efficiency, sustainability, and cost savings for homes and businesses.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                  {Object.entries(product.specifications)
                    .slice(0, 4)
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-gray-100 pb-1"
                      >
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="font-medium text-gray-900">
                          {value}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
                  >
                    View Details
                  </button>

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 z-10 transition-colors duration-200 shadow-lg"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {selectedProduct.price}
                  </div>
                  <div className="text-gray-500">
                    {selectedProduct.priceNote}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Specifications
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {Object.entries(selectedProduct.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-200 last:border-b-0"
                        >
                          <span className="text-gray-600 capitalize">
                            {key}:
                          </span>
                          <span className="font-medium text-gray-900">
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
