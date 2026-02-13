import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallUsTodaySection = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);
  const accentRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in background image
      tl.fromTo(
        backgroundRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
      );

      // Fade in overlays
      tl.fromTo(
        overlayRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );

      tl.fromTo(
        accentRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // Fade in and slide up heading
      tl.fromTo(
        headingRef.current,
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
        "-=0.4",
      );

      // Fade in and slide up text
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // Fade in and scale button
      tl.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative py-20 sm:py-28 text-white overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/CutePanels.jpg')",
            opacity: 0,
          }}
        >
          {/* Dark Gradient Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/10"
            style={{ opacity: 0 }}
          ></div>

          {/* Animated Gradient Accent */}
          <div
            ref={accentRef}
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20"
            style={{ opacity: 0 }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg"
            style={{ opacity: 0 }}
          >
            Ready to Transform Your Energy?
          </h2>
          <p
            ref={textRef}
            className="text-xl text-blue-100 mb-10 leading-relaxed drop-shadow-md"
            style={{ opacity: 0 }}
          >
            Join 2,000+ satisfied customers who have made the switch to clean,
            reliable solar power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              ref={buttonRef}
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:scale-105 transition-all duration-300"
              style={{ opacity: 0 }}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallUsTodaySection;
