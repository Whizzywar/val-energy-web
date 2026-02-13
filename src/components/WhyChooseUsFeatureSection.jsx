import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bike, Car as CarIcon, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsFeatureSection = () => {
  const featuresRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const featureCardsRef = useRef([]);

  const features = [
    {
      icon: <Bike className="w-12 h-12" />,
      title: "Waybill Delivery",
      description: "We waybill to any location in Nigeria and Africa",
      badge: "Safe Delivery",
    },
    {
      icon: <CarIcon className="w-12 h-12" />,
      title: "Premium Products",
      description: "Only Tier-1 solar panels and lithium batteries",
      badge: "Top Tier",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Proven Results",
      description: "99.9% uptime and 4.9-star customer satisfaction",
      badge: "4.9★",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for heading and subtext
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate heading - fade in and slide up
      headerTimeline.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      // Animate subtext - fade in and slide up
      headerTimeline.fromTo(
        subtextRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5", // Overlap with heading
      );

      // Stagger animation for feature cards
      gsap.fromTo(
        featureCardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2, // 0.2 second delay between each card
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Hover animation for icons
      featureCardsRef.current.forEach((card) => {
        if (!card) return;

        const icon = card.querySelector(".feature-icon");
        const badge = card.querySelector(".feature-badge");

        card.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
          gsap.to(badge, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(badge, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section ref={featuresRef} className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-15">
            <h2
              ref={headingRef}
              className="features-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ opacity: 0 }}
            >
              Why Thousands Choose Us
            </h2>
            <p
              ref={subtextRef}
              className="features-subtext text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ opacity: 0 }}
            >
              Experience the difference of working with Nigeria's premier solar
              energy provider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureCardsRef.current[index] = el)}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                style={{ opacity: 0 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="feature-icon w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="feature-badge bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsFeatureSection;
