import { ArrowRight, Battery, ChevronDown, Sun, Zap } from "lucide-react";
import React, { useState } from "react";

const ProductPage = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  // Hero content rotation
  const heroContent = [
    {
      title: "EnergyFlow",
      subtitle: "Powering Tomorrow",
      description:
        "Revolutionary lithium batteries and solar solutions for a sustainable future",
      bg: "from-blue-600 via-purple-600 to-green-600",
    },
    {
      title: "Clean Energy",
      subtitle: "Smart Solutions",
      description:
        "Advanced solar technology and energy storage systems for modern living",
      bg: "from-green-500 via-teal-600 to-blue-600",
    },
    {
      title: "Sustainable",
      subtitle: "Energy Systems",
      description:
        "Premium lithium batteries and solar equipment for residential & commercial use",
      bg: "from-orange-500 via-red-600 to-purple-700",
    },
  ];

  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Dynamic Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${heroContent[heroIndex].bg} transition-all duration-2000`}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Interactive Product Slider */}
          <div className="relative">
            <div className="max-w-2xl mx-auto">
              {/* Main Product Slider */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* EnergyFlow Branding Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      EnergyFlow
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Premium Energy Solutions
                  </p>
                </div>

                {/* Product Image Slider */}
                <div className="relative h-80 mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* Slide Container */}
                  <div
                    className="flex transition-transform duration-1000 ease-in-out h-full"
                    style={{ transform: `translateX(-${heroIndex * 100}%)` }}
                  >
                    {/* Slide 1: Lithium Battery */}
                    <div className="min-w-full h-full relative flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                      <div className="text-center">
                        <div className="text-8xl mb-4 animate-pulse">🔋</div>
                        <div className="absolute top-4 left-4 bg-white/90 rounded-full px-4 py-2 text-xs font-bold text-gray-800">
                          EnergyFlow Pro
                        </div>
                        <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                          BEST SELLER
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white rounded-full px-6 py-2 text-sm font-bold">
                          100Ah LiFePO4 Battery
                        </div>
                      </div>

                      {/* Product Features Overlay */}
                      <div className="absolute top-1/2 left-4 bg-white/90 rounded-lg p-3 text-xs">
                        <div className="font-bold text-gray-800 mb-1">
                          Features:
                        </div>
                        <div className="text-gray-600">• 10-Year Warranty</div>
                        <div className="text-gray-600">• Fast Charging</div>
                        <div className="text-gray-600">• BMS Protection</div>
                      </div>

                      <div className="absolute bottom-1/2 right-4 bg-blue-600 text-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold">$1,299</div>
                        <div className="text-xs opacity-80">Starting Price</div>
                      </div>
                    </div>

                    {/* Slide 2: Solar Panel */}
                    <div className="min-w-full h-full relative flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
                      <div className="text-center">
                        <div className="text-8xl mb-4 animate-pulse">☀️</div>
                        <div className="absolute top-4 left-4 bg-white/90 rounded-full px-4 py-2 text-xs font-bold text-gray-800">
                          SolarMax Pro
                        </div>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                          HIGH EFFICIENCY
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white rounded-full px-6 py-2 text-sm font-bold">
                          400W Monocrystalline Panel
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-4 bg-white/90 rounded-lg p-3 text-xs">
                        <div className="font-bold text-gray-800 mb-1">
                          Features:
                        </div>
                        <div className="text-gray-600">• 25-Year Warranty</div>
                        <div className="text-gray-600">• 22% Efficiency</div>
                        <div className="text-gray-600">• Weather Resistant</div>
                      </div>

                      <div className="absolute bottom-1/2 right-4 bg-orange-600 text-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold">$299</div>
                        <div className="text-xs opacity-80">Per Panel</div>
                      </div>
                    </div>

                    {/* Slide 3: Complete System */}
                    <div className="min-w-full h-full relative flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-100">
                      <div className="text-center">
                        <div className="text-8xl mb-4 animate-pulse">🏠</div>
                        <div className="absolute top-4 left-4 bg-white/90 rounded-full px-4 py-2 text-xs font-bold text-gray-800">
                          EnergyFlow Complete
                        </div>
                        <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                          FULL SYSTEM
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white rounded-full px-6 py-2 text-sm font-bold">
                          5kW Solar + Battery System
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-4 bg-white/90 rounded-lg p-3 text-xs">
                        <div className="font-bold text-gray-800 mb-1">
                          Includes:
                        </div>
                        <div className="text-gray-600">• Solar Panels</div>
                        <div className="text-gray-600">• Battery Storage</div>
                        <div className="text-gray-600">• Installation</div>
                      </div>

                      <div className="absolute bottom-1/2 right-4 bg-green-600 text-white rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold">$4,999</div>
                        <div className="text-xs opacity-80">Complete Kit</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() =>
                      setHeroIndex((prev) =>
                        prev === 0 ? heroContent.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <ChevronDown className="w-5 h-5 text-white rotate-90" />
                  </button>
                  <button
                    onClick={() =>
                      setHeroIndex((prev) => (prev + 1) % heroContent.length)
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <ChevronDown className="w-5 h-5 text-white -rotate-90" />
                  </button>
                </div>

                {/* Product Indicator Dots */}
                <div className="flex justify-center space-x-3 mb-6">
                  {heroContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setHeroIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        heroIndex === index
                          ? "bg-white scale-125 shadow-lg"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-white/10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-gray-300">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">2000+</div>
                    <div className="text-xs text-gray-300">Happy Customers</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-3">
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-xs text-gray-300">Customer Rating</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection("products")}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  Explore EnergyFlow Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Floating Brand Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse flex items-center justify-center">
                <Zap className="w-8 h-8 text-yellow-300/50" />
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-green-400/20 rounded-full animate-pulse flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <Battery className="w-6 h-6 text-green-300/50" />
              </div>
              <div
                className="absolute top-1/2 -right-12 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <Sun className="w-5 h-5 text-blue-300/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                heroIndex === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
pro;
