import React, { useState, useEffect } from "react";
import {
  Leaf,
  ArrowRight,
  Phone,
  Zap,
  ChevronDown,
  Battery,
  Sun,
  Play,
  Star,
  Award,
} from "lucide-react";

const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Hero content data
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

  // Auto-rotate hero content
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${heroContent[heroIndex].bg} transition-all duration-2000`}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-20 animate-pulse"
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${10 + (i % 4) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i % 3)}s`,
                }}
              >
                <div className="w-4 h-4 bg-white/40 rounded-full blur-sm"></div>
              </div>
            ))}

            {/* Floating Icons */}
            <div
              className="absolute top-20 left-10 opacity-10 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <Battery className="w-8 h-8 text-white" />
            </div>
            <div
              className="absolute top-32 right-16 opacity-10 animate-bounce"
              style={{ animationDelay: "2s" }}
            >
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div
              className="absolute bottom-32 left-20 opacity-10 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div
              className="absolute bottom-40 right-32 opacity-10 animate-bounce"
              style={{ animationDelay: "1.5s" }}
            >
              <Battery className="w-7 h-7 text-white" />
            </div>
          </div>
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

              {/* Enhanced CTA Buttons - Centered */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="group bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
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
      </section>
    </div>
  );
};

export default HeroSection;
