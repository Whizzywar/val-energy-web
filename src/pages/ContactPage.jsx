import React, { useState, useRef, useEffect } from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [isDisabled, setIsDisabled] = useState(false);

  // Animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactCardsRef = useRef([]);
  const formFieldsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initialize all animations using GSAP context
    const ctx = gsap.context(() => {
      initHeaderAnimations();
      initFormAnimations();
      initContactInfoAnimations();
      initBackgroundAnimations();
    }, sectionRef);

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Header text animations with SplitText
  const initHeaderAnimations = () => {
    if (!headingRef.current || !descriptionRef.current) return;

    // Split heading into words and characters
    const headingSplit = new SplitText(headingRef.current, {
      type: "words,chars",
      wordsClass: "word",
      charsClass: "char",
    });

    // Split description into lines
    const descSplit = new SplitText(descriptionRef.current, {
      type: "lines",
      linesClass: "line",
    });

    // Set initial state for lines
    gsap.set(descSplit.lines, {
      overflow: "hidden",
      paddingBottom: "0.3em",
    });

    // Create timeline for header
    const headerTL = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading characters with wave effect
    headerTL.from(headingSplit.chars, {
      opacity: 0,
      y: 50,
      rotationX: -90,
      stagger: 0.02,
      ease: "back.out(1.7)",
    });

    // Animate description lines
    headerTL.from(
      descSplit.lines,
      {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5",
    );
  };

  // Form fields animations
  const initFormAnimations = () => {
    if (!formRef.current) return;

    const formTL = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate form container
    formTL.from(formRef.current, {
      opacity: 0,
      x: -100,
      rotationY: -15,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate form fields sequentially
    formFieldsRef.current.forEach((field, index) => {
      if (!field) return;

      formTL.from(
        field,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.5,
          ease: "back.out(1.5)",
        },
        `-=${0.4 - index * 0.05}`,
      );

      // Add subtle hover animation
      field.addEventListener("mouseenter", () => {
        gsap.to(field, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      field.addEventListener("mouseleave", () => {
        gsap.to(field, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Animate button
    if (buttonRef.current) {
      formTL.from(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3",
      );
    }
  };

  // Contact information cards animations
  const initContactInfoAnimations = () => {
    if (!contactInfoRef.current) return;

    const infoTL = gsap.timeline({
      scrollTrigger: {
        trigger: contactInfoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section heading
    const infoHeading = contactInfoRef.current.querySelector(".info-heading");
    const infoSubtext = contactInfoRef.current.querySelector(".info-subtext");

    if (infoHeading) {
      const headingSplit = new SplitText(infoHeading, {
        type: "words",
        wordsClass: "word",
      });

      infoTL.from(headingSplit.words, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(2)",
      });
    }

    if (infoSubtext) {
      infoTL.from(
        infoSubtext,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      );
    }

    // Animate contact cards
    contactCardsRef.current.forEach((card, index) => {
      if (!card) return;

      infoTL.from(
        card,
        {
          opacity: 0,
          x: 100,
          rotationY: 15,
          transformOrigin: "right center",
          duration: 0.7,
          ease: "power3.out",
        },
        `-=${0.5 - index * 0.1}`,
      );

      // Icon animation within card
      const icon = card.querySelector(".contact-icon");
      if (icon) {
        infoTL.from(
          icon,
          {
            scale: 0,
            rotation: -180,
            duration: 0.5,
            ease: "back.out(2)",
          },
          `-=${0.5}`,
        );
      }

      // Add hover effect for cards
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });

        const cardIcon = card.querySelector(".contact-icon");
        if (cardIcon) {
          gsap.to(cardIcon, {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: "back.out(2)",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        const cardIcon = card.querySelector(".contact-icon");
        if (cardIcon) {
          gsap.to(cardIcon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    });
  };

  // Background floating animation
  const initBackgroundAnimations = () => {
    if (!sectionRef.current) return;

    const bgElement = sectionRef.current.querySelector(".bg-glow");
    if (bgElement) {
      gsap.to(bgElement, {
        x: 50,
        y: 30,
        scale: 1.1,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  };

  // Form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setIsDisabled(true);

    // Animate button on submit
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsDisabled(false);

      // Success animation
      const successMsg = document.querySelector(".success-message");
      if (successMsg) {
        gsap.fromTo(
          successMsg,
          { opacity: 0, y: 20, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
        );
      }
    }, 2000);
  };

  const contactInfo = [
    {
      icon: PhoneCall,
      title: "Phone",
      value: "+234 802-057-4628",
      color: "text-blue-600",
      sub: "Mon–Sat · 7am–5pm",
    },
    {
      icon: Mail,
      title: "Email",
      value: "ValtechSolarEnergy@yahoo.com",
      color: "text-blue-600",
      sub: "We'll respond shortly",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Rivers Joy Park, Koka Junction Asaba, Delta State Nigeria",
      color: "text-blue-600",
      sub: "Experience our products firsthand",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full text-gray py-27 lg:py-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5"
          >
            Get a Free Quote From{" "}
            <span className="text-blue-600">Valtech Energy</span>
          </h2>

          <p
            ref={descriptionRef}
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4"
          >
            Reach out today and our energy experts will help you design the
            perfect solar or lithium solution for your home or business.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white/5 border border-black/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6"
          >
            <div ref={(el) => (formFieldsRef.current[0] = el)}>
              <label className="text-sm font-medium text-black mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                disabled={isDisabled}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
                required
              />
            </div>

            <div ref={(el) => (formFieldsRef.current[1] = el)}>
              <label className="text-sm font-medium text-black mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                disabled={isDisabled}
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div ref={(el) => (formFieldsRef.current[2] = el)}>
              <label className="text-sm font-medium text-black mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                disabled={isDisabled}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your energy needs..."
                required
              />
            </div>

            <button
              ref={buttonRef}
              onClick={handleSubmit}
              disabled={isDisabled}
              className="w-full py-3 px-6 rounded-lg font-semibold bg-blue-600  text-white transform hover:scale-[1.02] "
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="success-message text-green-500 font-medium text-center bg-green-50 py-2 rounded-lg">
                ✓ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 font-medium text-center bg-red-50 py-2 rounded-lg">
                ✗ Something went wrong. Try again.
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="info-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 lg:mb-2">
                Contact Information
              </h3>
              <p className="info-subtext text-gray-600 text-base sm:text-lg leading-relaxed">
                Let's Bring Your Energy Vision to Life
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <div
                key={i}
                ref={(el) => (contactCardsRef.current[i] = el)}
                className="flex gap-4 bg-white/5 border border-black/10 p-4 sm:p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div
                  className={`contact-icon w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center ${info.color} bg-blue-50`}
                >
                  <info.icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    {info.title}
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-black mb-1 break-words">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
