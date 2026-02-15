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
      // Timeline for badge, heading, and paragraph
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate badge - fade in and slide up
      textTimeline.fromTo(
        badgeRef.current,
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

      // Animate heading - fade in and slide up
      textTimeline.fromTo(
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
        "-=0.5", // Overlap with badge
      );

      // Animate paragraph - fade in and slide up
      textTimeline.fromTo(
        paragraphRef.current,
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

      // Separate animation for image
      gsap.fromTo(
        imageRef.current,
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
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Hover animation for image
      if (imageRef.current) {
        imageRef.current.addEventListener("mouseenter", () => {
          gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        imageRef.current.addEventListener("mouseleave", () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
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
              style={{ opacity: 0 }}
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">Trusted by Thousands</span>
            </div>

            <h2
              ref={headingRef}
              className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4 sm:mb-5"
              style={{ opacity: 0 }}
            >
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                Valtech Solar Energy?
              </span>
            </h2>

            <p
              ref={paragraphRef}
              className="text-lg text-gray-800 leading-relaxed"
              style={{ opacity: 0 }}
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
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-lg cursor-pointer"
                style={{ opacity: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
