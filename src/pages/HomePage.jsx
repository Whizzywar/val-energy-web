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

  const handleWhatsAppClick = () => {
    const phoneNumber = "+2348140067333";
    const message = encodeURIComponent(
      "Hello Valtech! I'm interested in your solar energy products."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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

        <section className="relative z-10 w-full text-base sm:text-lg lg:text-xl flex flex-col items-center justify-center text-center pt-20 pb-10 sm:pt-31 sm:pb-14">
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

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </button>

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
