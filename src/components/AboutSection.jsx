import React, { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      // Badge animation - slide in from left with bounce
      tl.fromTo(
        badgeRef.current,
        {
          x: -50,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      );

      // Heading animation - fade in with slight upward movement
      tl.fromTo(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3", // Overlap with previous animation
      );

      // Paragraph animation - fade in with upward movement
      tl.fromTo(
        paragraphRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5",
      );

      // Image animation - zoom in with fade
      tl.fromTo(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          rotateY: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8", // Start while paragraph is animating
      );

      // Add subtle hover effect to image
      gsap.set(imageRef.current, { transformPerspective: 1000 });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-5 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div
              ref={badgeRef}
              className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 sm:px-6 py-2 mb-6"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">Trusted by Thousands</span>
            </div>

            <h2
              ref={headingRef}
              className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4 sm:mb-5"
            >
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                Valtech Solar Energy?
              </span>
            </h2>

            <p
              ref={paragraphRef}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              With over 15 years of expertise in renewable energy, Valtech
              Energy has established itself as a premier provider of sustainable
              power solutions — delivering reliability, innovation, and
              efficiency nationwide.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                ref={imageRef}
                src="/daniele.jpg"
                alt="Valtech Energy"
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
