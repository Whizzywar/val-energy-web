import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import AboutSection from "../components/AboutSection";
import CallUsTodaySection from "../components/CallUsTodaySection";
import ImpactSection from "../components/ImpactSection";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const HomePage = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  const heroContent = [
    {
      title: "Valtech Solar Energy",
      subtitle: "",
      description:
        "Your trusted partner for high-performance lithium batteries and solar solutions for a sustainable future.",
      image: "/evgeniy.jpg",
    },
    {
      title: "Clean Energy Solutions",
      subtitle: "",
      description:
        "Advanced solar technology and energy storage systems for modern living.",
      image: "/solar2.jpg",
    },
    {
      title: "Sustainable Energy Systems",
      subtitle: "",
      description:
        "Premium lithium batteries and solar equipment for residential & commercial use.",
      image: "/kumpan.jpg",
    },
  ];

  // Animate text on hero index change
  useGSAP(() => {
    if (titleRef.current) {
      // Split the title text
      const titleSplit = new SplitText(titleRef.current, {
        type: "chars,words",
        charsClass: "split-char",
        wordsClass: "split-word",
      });

      // Animate title characters with sliding effect
      gsap.fromTo(
        titleSplit.chars,
        {
          yPercent: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.05,
        },
      );
    }

    if (subtitleRef.current && heroContent[heroIndex].subtitle) {
      // Split the subtitle text
      const subtitleSplit = new SplitText(subtitleRef.current, {
        type: "chars,words",
        charsClass: "split-char",
      });

      // Animate subtitle with sliding effect
      gsap.fromTo(
        subtitleSplit.chars,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.05,
          delay: 0.055,
        },
      );
    }

    if (descriptionRef.current) {
      // Split description into lines
      const descSplit = new SplitText(descriptionRef.current, {
        type: "lines",
        linesClass: "split-line",
      });

      // Wrap lines in overflow containers for slide effect
      descSplit.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      // Animate description lines
      gsap.fromTo(
        descSplit.lines,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.05,
          delay: 0.6,
        },
      );
    }
  }, [heroIndex]);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection("right");
      setHeroIndex((p) => (p + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroContent.length]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+2348140067333";
    const message = encodeURIComponent(
      "Hello Valtech! I'm interested in your solar energy products.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleIndicatorClick = (index) => {
    setDirection(index > heroIndex ? "right" : "left");
    setHeroIndex(index);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">
      <Navbar />

      <main className="relative w-full min-h-[80vh] flex flex-col justify-start items-center pt-20 overflow-hidden">
        {/* Background Images with Sliding Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {heroContent.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out ${
                index === heroIndex
                  ? "translate-x-0"
                  : direction === "right"
                    ? index < heroIndex
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : index < heroIndex
                      ? "-translate-x-full"
                      : "translate-x-full"
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              aria-hidden
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>

        <section className="relative z-10 w-full text-base sm:text-lg lg:text-xl flex flex-col items-center justify-center text-center pt-20 pb-10 sm:pt-31 sm:pb-14">
          {/* Content with Sliding Effect */}
          <div className="relative w-full min-h-[300px]">
            {heroContent.map((item, index) => (
              <div
                key={index}
                className={`w-full transition-opacity duration-700 ${
                  index === heroIndex
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-white max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
                  <span
                    ref={index === heroIndex ? titleRef : null}
                    className="block overflow-hidden"
                    style={{ perspective: "400px" }}
                  >
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span
                      ref={index === heroIndex ? subtitleRef : null}
                      className="block text-white bg-clip-text overflow-hidden"
                    >
                      {item.subtitle}
                    </span>
                  )}
                </h1>

                <p
                  ref={index === heroIndex ? descriptionRef : null}
                  className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl sm:max-w-3xl leading-relaxed mx-auto px-4"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className=" flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Explore Products
              <Zap className="w-4 h-4 ml-1 animate-pulse" />
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex gap-2 justify-center">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === heroIndex
                    ? "w-3 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === heroIndex ? "true" : "false"}
              />
            ))}
          </div>
        </section>
      </main>

      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500  text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 "
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
      </button>

      <section className="px-3 sm:px-5 lg:px-9 py-15">
        <ProductsList />
      </section>

      <section className="px-2 sm:px-3 lg:px-4 py-8 bg-gray-50">
        <AboutSection />
      </section>

      <section className="">
        <ImpactSection />
      </section>

      <section className="">
        <CallUsTodaySection />
      </section>
    </div>
  );
};

export default HomePage;
