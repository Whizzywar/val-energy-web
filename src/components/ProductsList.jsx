import { Award, Battery, CheckCircle, Star, Sun, Zap } from "lucide-react";
import React from "react";

const ProductsList = () => {
  // Products data with detailed pricing
  const products = [
    {
      id: 1,
      name: "EnergyFlow Pro 100Ah",
      category: "Lithium Battery",
      price: 1299,
      originalPrice: 1499,
      image: "🔋",
      features: [
        "100Ah LiFePO4 Capacity",
        "10-Year Warranty",
        "Fast Charging Technology",
        "Built-in BMS Protection",
        "Lightweight Design",
      ],
      rating: 4.9,
      reviews: 324,
      inStock: true,
      popular: true,
      savings: 200,
    },
    {
      id: 2,
      name: "EnergyFlow Elite 200Ah",
      category: "Lithium Battery",
      price: 2199,
      originalPrice: 2499,
      image: "🔋",
      features: [
        "200Ah High Capacity",
        "15-Year Warranty",
        "Deep Cycle Performance",
        "Smart Monitoring System",
        "Temperature Control",
      ],
      rating: 4.8,
      reviews: 256,
      inStock: true,
      popular: false,
      savings: 300,
    },
    {
      id: 3,
      name: "SolarMax 400W Panel",
      category: "Solar Panel",
      price: 299,
      originalPrice: 349,
      image: "☀️",
      features: [
        "400W Monocrystalline",
        "25-Year Warranty",
        "22% Efficiency Rating",
        "Weather Resistant",
        "Easy Installation",
      ],
      rating: 4.7,
      reviews: 412,
      inStock: true,
      popular: true,
      savings: 50,
    },
    {
      id: 4,
      name: "SolarMax 500W Panel",
      category: "Solar Panel",
      price: 399,
      originalPrice: 459,
      image: "☀️",
      features: [
        "500W High Output",
        "25-Year Warranty",
        "Bifacial Technology",
        "Low Light Performance",
        "Durable Frame",
      ],
      rating: 4.8,
      reviews: 189,
      inStock: false,
      popular: false,
      savings: 60,
    },
    {
      id: 5,
      name: "PowerInverter 3000W",
      category: "Solar Inverter",
      price: 899,
      originalPrice: 999,
      image: "⚡",
      features: [
        "3000W Pure Sine Wave",
        "10-Year Warranty",
        "LCD Display",
        "Remote Monitoring",
        "Grid-Tie Compatible",
      ],
      rating: 4.6,
      reviews: 145,
      inStock: true,
      popular: false,
      savings: 100,
    },
    {
      id: 6,
      name: "Complete Solar Kit 5kW",
      category: "Complete System",
      price: 4999,
      originalPrice: 5999,
      image: "🏠",
      features: [
        "5kW Complete System",
        "25-Year Warranty",
        "Professional Installation",
        "Monitoring App",
        "Battery Compatible",
      ],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      popular: true,
      savings: 1000,
    },
  ];

  return (
    <div>
      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-bold">Premium Quality Products</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Our Energy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our premium collection of lithium batteries, solar
              panels, and complete energy systems engineered for maximum
              performance and longevity.
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Battery className="w-12 h-12 text-blue-600" />,
                title: "Lithium Batteries",
                description:
                  "Advanced LiFePO4 batteries with smart BMS technology for reliable energy storage.",
                features: [
                  "10-15 Year Warranty",
                  "Fast Charging",
                  "Deep Cycle Performance",
                ],
              },
              {
                icon: <Sun className="w-12 h-12 text-orange-500" />,
                title: "Solar Panels",
                description:
                  "High-efficiency monocrystalline panels designed for maximum energy generation.",
                features: [
                  "25-Year Warranty",
                  "22% Efficiency",
                  "Weather Resistant",
                ],
              },
              {
                icon: <Zap className="w-12 h-12 text-orange-500" />,
                title: "Complete Systems",
                description:
                  "Turnkey solar and storage solutions with professional installation services.",
                features: [
                  "Full Installation",
                  "24/7 Monitoring",
                  "System Warranty",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {product.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-3 font-bold">
                    ⭐ MOST POPULAR ⭐
                  </div>
                )}

                <div className="p-8">
                  {/* Product Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-7xl">{product.image}</div>
                    <div className="text-right">
                      {product.inStock ? (
                        <span className="bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-bold">
                          ✓ In Stock
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-sm px-4 py-2 rounded-full font-bold">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {product.category}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start text-gray-600"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-4xl font-bold text-gray-900">
                            ${product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <div className="mt-1">
                              <span className="text-xl text-gray-500 line-through mr-2">
                                ${product.originalPrice.toLocaleString()}
                              </span>
                              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-bold">
                                Save ${product.savings}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
