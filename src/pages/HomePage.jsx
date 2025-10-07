import React, { useState, useEffect } from "react";
import { Leaf, ArrowRight, ChevronDown, Play, Star, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Hero content data
  const heroContent = [
    {
      title: "EnergyFlow",
      subtitle: "Powering Tomorrow",
      description:
        "Revolutionary lithium batteries and solar solutions for a sustainable future",
      image: "src/images/VirtualSolar.jpg", // Replace with your image path
    },
    {
      title: "Clean Energy",
      subtitle: "Smart Solutions",
      description:
        "Advanced solar technology and energy storage systems for modern living",
      image: "src/images/SolarBattery.jpg", // Replace with your image path
    },
    {
      title: "Sustainable",
      subtitle: "Energy Systems",
      description:
        "Premium lithium batteries and solar equipment for residential & commercial use",
      image: "src/images/SolarPanel.jpg", // Replace with your image path
    },
  ];

  // Auto-rotate hero content
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  // Scroll to section function

  return (
    <div>
      {/* Navigation Links */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Link
          to="/"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-white/80 hover:text-white transition-colors duration-300 font-semibold"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
      <Navbar />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000"
        style={{
          backgroundImage: `url(${heroContent[heroIndex].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Container - Fully Centered */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Hero Content - Centered */}
          <div className="text-white space-y-8 text-center max-w-4xl">
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <Leaf className="w-5 h-5 mr-3 text-green-300" />
              <span className="font-semibold text-sm">
                Leading Clean Energy Provider
              </span>
            </div>

            {/* Main Headline - Enhanced and Centered */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block animate-fade-in">
                  {heroContent[heroIndex].title}
                </span>
                <span className="block bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 bg-clip-text text-transparent animate-fade-in-delay">
                  {heroContent[heroIndex].subtitle}
                </span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl leading-relaxed mx-auto">
                {heroContent[heroIndex].description}
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium">Industry Leader</span>
                </div>
              </div>
            </div>

            {/* Navigation to Products */}
            <div className="space-x-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                View Our Products
                <Zap className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Enhanced Stats - Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">
                  2000+
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-300 mb-2">
                  50MW+
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">
                  Power Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">
                  15+
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Additional Company Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">25</div>
                <div className="text-xs text-gray-300">Year Warranty</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-300">Clean Energy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">Free</div>
                <div className="text-xs text-gray-300">Installation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">EnergyFlow Demo</h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <ChevronDown className="w-6 h-6 rotate-45" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
      `}</style>

      <ProductsList />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
