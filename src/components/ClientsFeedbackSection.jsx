import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientsFeedbackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const subtextRef = useRef(null);
  const cardRef = useRef(null);
  const quoteIconRef = useRef(null);
  const contentRef = useRef(null);
  const customerInfoRef = useRef(null);
  const dotsRef = useRef(null);
  const trustBadgesRef = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Facilities Manager",
      company: "TechCorp Industries",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content:
        "Switching to renewable energy solutions has reduced our operational costs by 40% while helping us meet our sustainability goals. The transition was seamless and the support team was exceptional.",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "CEO",
      company: "GreenBuild Construction",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      content:
        "The solar panel installation exceeded our expectations. We're now generating 95% of our energy needs on-site, and the ROI timeline was even better than projected.",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Sustainability Director",
      company: "Metro Hospital Network",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content:
        "Our partnership has been transformative. The energy management system provides real-time insights that have optimized our consumption across all facilities. We've reduced our carbon footprint by 60%.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Operations Manager",
      company: "Pacific Manufacturing",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content:
        "The smart grid integration has revolutionized how we manage energy. We've seen a 35% decrease in energy waste and our maintenance costs have dropped significantly.",
    },
  ];

  // Initial entrance animations on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Subtext animation
      gsap.fromTo(
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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Card animation - scale and fade in
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Dots animation
      gsap.fromTo(
        dotsRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dotsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Trust badges - stagger animation
      gsap.fromTo(
        trustBadgesRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 0.6,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trustBadgesRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth transition animation when testimonial changes
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate out
    tl.to([quoteIconRef.current, contentRef.current, customerInfoRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.05,
    });

    // Animate in
    tl.fromTo(
      quoteIconRef.current,
      { opacity: 0, scale: 0.8, rotation: -10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
    );

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2",
    );

    tl.fromTo(
      customerInfoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
      "-=0.3",
    );
  }, [currentSlide]);

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={headerRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ opacity: 0 }}
          >
            Customer Success Stories
          </h2>
          <p
            ref={subtextRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ opacity: 0 }}
          >
            Discover how leading organizations are transforming their energy
            future with our innovative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div
            ref={cardRef}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
            style={{ opacity: 0 }}
          >
            <div className="p-8 md:p-12">
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <Quote
                    ref={quoteIconRef}
                    className="w-12 h-12 text-blue-600 mb-6"
                  />
                  <p
                    ref={contentRef}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
                  >
                    "{testimonials[currentSlide].content}"
                  </p>
                </div>

                {/* Customer Info */}
                <div ref={customerInfoRef} className="flex items-center gap-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentSlide].role}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {testimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div
          ref={dotsRef}
          className="flex justify-center gap-2 mt-6"
          style={{ opacity: 0 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-2 bg-blue-600"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["TechCorp", "GreenBuild", "Metro Health", "Pacific MFG"].map(
              (badge, index) => (
                <div
                  key={index}
                  ref={(el) => (trustBadgesRef.current[index] = el)}
                  className="text-2xl font-bold text-gray-400"
                  style={{ opacity: 0 }}
                >
                  {badge}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedbackSection;
