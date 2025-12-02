import React, { useState, useEffect } from "react";
import { Leaf, Star, Award, Zap, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroContent = [
    {
      title: "Valtech Solar Energy",
      subtitle: "",
      description:
        "Your trusted partner for high-performance lithium batteries and solar solutions for a sustainable future.",
      image: "/VirtualSolar.jpg",
    },
    {
      title: "Clean Energy",
      subtitle: "Smart Solutions",
      description:
        "Advanced solar technology and energy storage systems for modern living.",
      image: "/SolarBattery.jpg",
    },
    {
      title: "Sustainable",
      subtitle: "Energy Systems",
      description:
        "Premium lithium batteries and solar equipment for residential & commercial use.",
      image: "/SolarPanel.jpg",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((p) => (p + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroContent.length]);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      <Navbar />

      <main className="relative w-full min-h-[80vh] flex flex-col justify-start items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroContent[heroIndex].image})`,
          }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <section className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-20 pb-10 sm:pt-31 sm:pb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
            <span className="block animate-fade-in">
              {heroContent[heroIndex].title}
            </span>
            <span className="block text-white bg-clip-text  animate-fade-in-delay">
              {heroContent[heroIndex].subtitle}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl sm:max-w-3xl leading-relaxed mx-auto px-4">
            {heroContent[heroIndex].description}
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Explore Products
              <Zap className="w-4 h-4 ml-1 animate-pulse" />
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </main>

      <section className="px-3 sm:px-5 lg:px-9 py-15">
        <ProductsList />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <AboutSection />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <ContactSection />
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 900ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 250ms
            both;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
