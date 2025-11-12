import React, { useState, useEffect } from "react";
import { Leaf, ArrowRight, ChevronDown, Play, Star, Award } from "lucide-react";

const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroContent = [
    {
      title: "EnergyFlow",
      subtitle: "Powering Tomorrow",
      description:
        "Revolutionary lithium batteries and solar solutions for a sustainable future",
      image: "src/images/VirtualSolar.jpg",
    },
    {
      title: "Clean Energy",
      subtitle: "Smart Solutions",
      description:
        "Advanced solar technology and energy storage systems for modern living",
      image: "src/images/SolarBattery.jpg",
    },
    {
      title: "Sustainable",
      subtitle: "Energy Systems",
      description:
        "Premium lithium batteries and solar equipment for residential & commercial use",
      image: "src/images/SolarPanel.jpg",
    },
  ];

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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000"
          style={{
            backgroundImage: `url(${heroContent[heroIndex].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Main Content Container - Fully Centered */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-screen py-20">
              {/* Hero Content - Centered */}
              <div className="text-white w-full px-4 sm:px-6 lg:px-8 ">
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
            ></div>
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
