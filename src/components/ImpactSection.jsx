import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const infoCardsRef = useRef([]);
  const impactTitleRef = useRef(null);
  const impactSubtextRef = useRef(null);
  const statsCardsRef = useRef([]);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main heading animation
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Image animation - zoom in with fade
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Info cards below image - stagger animation
      gsap.fromTo(
        infoCardsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15, // Each card appears 0.15s after the previous
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Impact section title
      gsap.fromTo(
        impactTitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: impactTitleRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Impact subtext
      gsap.fromTo(
        impactSubtextRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: impactSubtextRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stats cards - stagger animation with bounce effect
      gsap.fromTo(
        statsCardsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1, // Sequential reveal
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: statsCardsRef.current[0],
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // CTA Button - pop in effect
      gsap.fromTo(
        ctaButtonRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ctaButtonRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Hover animations for stats cards
      statsCardsRef.current.forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: "2000+",
      label: "Product Delivered",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      value: "50MW",
      label: "Clean Energy Generated",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      value: "99.9%",
      label: "Product Reliability",
      color: "text-black",
      bg: "bg-purple-50",
    },
    {
      value: "4.9★",
      label: "Customer Rating",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div>
      <div ref={sectionRef}>
        <div className="min-h-screen pt-3 sm:pt-7">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-black leading-tight mb-5 sm:mb-8 lg:mb-10 px-2"
              style={{ opacity: 0 }}
            >
              We Are Committed To Providing Sustainable Energy Solutions For The
              Future
            </h1>

            <div className="rounded-3xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left Column - Image */}
                <div className="order-2 lg:order-1">
                  <div
                    ref={imageRef}
                    className="relative group overflow-hidden rounded-2xl shadow-lg"
                    style={{ opacity: 0 }}
                  >
                    <img
                      src="/siwawut.jpg"
                      alt="Solar panels and sustainable energy infrastructure"
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Additional Info Cards Below Image */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div
                      ref={(el) => (infoCardsRef.current[0] = el)}
                      className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 sm:p-4 text-center"
                      style={{ opacity: 0 }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                        15+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 font-medium">
                        Years Experience
                      </div>
                    </div>
                    <div
                      ref={(el) => (infoCardsRef.current[1] = el)}
                      className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4 text-center"
                      style={{ opacity: 0 }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-800 font-medium">
                        Renewable Focus
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Company Achievements */}
                <div className="relative order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                      <h3
                        ref={impactTitleRef}
                        className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-3 sm:mb-4"
                        style={{ opacity: 0 }}
                      >
                        Our Impact
                      </h3>
                      <p
                        ref={impactSubtextRef}
                        className="text-gray-800 text-sm sm:text-base lg:text-lg"
                        style={{ opacity: 0 }}
                      >
                        Transforming energy consumption across the nation
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          ref={(el) => (statsCardsRef.current[index] = el)}
                          className={`text-center ${stat.bg} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 border border-white/50 cursor-pointer`}
                          style={{ opacity: 0 }}
                        >
                          <div
                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-6 sm:mt-8 text-center">
                      <Link
                        ref={ctaButtonRef}
                        to="/about"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transform transition-all duration-300 hover:scale-105"
                        style={{ opacity: 0 }}
                      >
                        Learn More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
