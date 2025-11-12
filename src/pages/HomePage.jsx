import React, { useState, useEffect } from "react";
import { Leaf, Star, Award, Zap, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroContent = [
    {
      title: "Valtech energy",
      subtitle: "Powering Tomorrow",
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

  // rotate hero
  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((p) => (p + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroContent.length]);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      {/* fixed navbar (already fixed inside component) */}
      <Navbar />

      {/* spacer so hero begins below navbar (Navbar: A) */}
      <div className="h-5"></div>

      {/* HERO */}
      <main className="relative w-full flex items-center justify-center">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroContent[heroIndex].image})` }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* content container */}
        <section className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-center text-center">
          {/* Brand badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <Leaf className="w-5 h-5 mr-3 text-green-300" />
            <span className="font-semibold text-sm text-white">
              Leading Clean Energy Provider
            </span>
          </div>

          {/* Headline (Hero layout 1: centered, large) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white max-w-4xl">
            <span className="block animate-fade-in">
              {heroContent[heroIndex].title}
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 bg-clip-text text-transparent animate-fade-in-delay">
              {heroContent[heroIndex].subtitle}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed mx-auto">
            {heroContent[heroIndex].description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/products"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Explore Products
              <Zap className="w-4 h-4 ml-1 animate-pulse" />
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </main>

      {/* Video modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* imitate video iframe or element - replace with real player */}
            <div className="aspect-video bg-black rounded">
              <p className="text-white text-center mt-8">Video player here</p>
            </div>
            <div className="mt-3 text-right">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="px-4 py-2 rounded bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* main site sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <ProductsList />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <AboutSection />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <ContactSection />
      </section>

      {/* small custom animations (scoped) */}
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
