import React, { useState } from "react";
import Navbar from "../components/Navbar";

import { Award, CheckCircle, ArrowRight, TrendingUp, Zap } from "lucide-react";
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
      badge: "Best Seller",
      discount: "13% OFF",
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
      badge: "Premium",
      discount: "12% OFF",
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
      badge: "Popular",
      discount: "14% OFF",
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
      badge: "New",
      discount: "13% OFF",
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
      badge: "Top Rated",
      discount: "10% OFF",
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
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 7,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 8,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 9,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 10,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 11,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },

    {
      id: 12,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    
  ];

  return (
    <section id="products" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 mt-15">
        Power Your Future with{" "}
        <span className="text-blue-600">Clean Energy</span>
      </h1>

          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-600 mb-4 max-w-3xl mx-auto">
        Discover our comprehensive range of energy products designed for
        efficiency, sustainability, and cost savings for homes and businesses.
      </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
            
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.badge}
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {product.discount}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-blue-600 font-medium text-xs uppercase tracking-wide flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {product.category}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-700 group/item hover:text-blue-600 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

        
                <div className="inline-flex">
                  <div>
                    <p className="text-black font-bold text-2xl flex items-baseline gap-1">
                      ${product.price}
                      <span className="text-xs text-gray-500 font-normal">
                        USD
                      </span>
                    </p>
                    <p className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductsList;
