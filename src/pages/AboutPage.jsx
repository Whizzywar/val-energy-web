import React, { useRef, useEffect } from "react";
import { TrendingUp, CheckCircle, CarIcon, Bike } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ClientsFeedbackSection from "../components/ClientsFeedbackSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSection = () => {
  // Animation refs
  const heroRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroTextRef = useRef(null);
  const storyRef = useRef(null);
  const storyHeadingRef = useRef(null);
  const storyImageRef = useRef(null);
  const storyParagraphsRef = useRef([]);
  const missionRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionImageRef = useRef(null);
  const missionCardRef = useRef(null);
  const featuresRef = useRef(null);
  const featureCardsRef = useRef([]);

  useEffect(() => {
    // Initialize all animations using GSAP context
    const ctx = gsap.context(() => {
      initHeroAnimations();
      initStoryAnimations();
      initMissionAnimations();
      initFeaturesAnimations();

      initParallaxEffects();
    });

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Hero section animations
  const initHeroAnimations = () => {
    if (!heroHeadingRef.current || !heroTextRef.current) return;

    // Split hero heading into characters
    const heroHeadingSplit = new SplitText(heroHeadingRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word",
    });

    // Split hero text into lines
    const heroTextSplit = new SplitText(heroTextRef.current, {
      type: "lines",
      linesClass: "line",
    });

    // Set initial line overflow
    gsap.set(heroTextSplit.lines, {
      overflow: "hidden",
      paddingBottom: "0.3em",
    });

    // Create hero timeline
    const heroTL = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Animate background overlay
    heroTL.from(heroRef.current.querySelector(".hero-overlay"), {
      opacity: 0,
      duration: 1,
    });

    // Animate heading characters with 3D effect
    heroTL.from(
      heroHeadingSplit.chars,
      {
        opacity: 0,
        y: 100,
        rotationX: -90,
      },

      {
        yPercent: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.3,
        ease: "ease.out",
        stagger: 0.01,
      },
    );

    // Animate hero text lines
    heroTL.from(
      heroTextSplit.lines,
      {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
      },
      "-=0.6",
    );
  };

  // Story section animations
  const initStoryAnimations = () => {
    if (!storyRef.current) return;

    const storyTL = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate badge
    const badge = storyRef.current.querySelector(".story-badge");
    if (badge) {
      storyTL.from(badge, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.6,
        ease: "back.out(2)",
      });
    }

    // Animate heading with SplitText
    if (storyHeadingRef.current) {
      const headingSplit = new SplitText(storyHeadingRef.current, {
        type: "words",
        wordsClass: "word",
      });

      storyTL.from(
        headingSplit.words,
        {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      );
    }

    // Animate paragraphs
    storyParagraphsRef.current.forEach((paragraph, index) => {
      if (!paragraph) return;

      const paraSplit = new SplitText(paragraph, {
        type: "lines",
        linesClass: "line",
      });

      storyTL.from(
        paraSplit.lines,
        {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        `-=${0.3 - index * 0.1}`,
      );
    });

    // Animate image
    if (storyImageRef.current) {
      storyTL.from(
        storyImageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          x: 100,
          rotationY: 15,
          duration: 1,
          ease: "power3.out",
        },
        "-=1",
      );
    }
  };

  // Mission section animations
  const initMissionAnimations = () => {
    if (!missionRef.current) return;

    const missionTL = gsap.timeline({
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section heading
    if (missionHeadingRef.current) {
      const headingSplit = new SplitText(missionHeadingRef.current, {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
      });

      missionTL.from(headingSplit.chars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.5)",
      });
    }

    // Animate subtext
    const subtext = missionRef.current.querySelector(".mission-subtext");
    if (subtext) {
      missionTL.from(
        subtext,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5",
      );
    }

    // Animate image
    if (missionImageRef.current) {
      missionTL.from(
        missionImageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          x: -100,
          rotationY: -15,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );
    }

    // Animate mission card
    if (missionCardRef.current) {
      // Card entrance
      missionTL.from(
        missionCardRef.current,
        {
          opacity: 0,
          scale: 0.9,
          x: 100,
          rotationY: 15,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.9",
      );

      // Icon animation
      const icon = missionCardRef.current.querySelector(".mission-icon");
      if (icon) {
        missionTL.from(
          icon,
          {
            scale: 0,
            rotation: -360,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.6",
        );
      }

      // Text content
      const cardTitle = missionCardRef.current.querySelector(".mission-title");
      const cardText = missionCardRef.current.querySelector(".mission-text");

      if (cardTitle) {
        missionTL.from(
          cardTitle,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      if (cardText) {
        const textSplit = new SplitText(cardText, {
          type: "lines",
          linesClass: "line",
        });

        missionTL.from(
          textSplit.lines,
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }
    }
  };

  // Features section animations
  const initFeaturesAnimations = () => {
    if (!featuresRef.current) return;

    const featuresTL = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animate section heading
    const heading = featuresRef.current.querySelector(".features-heading");
    if (heading) {
      const headingSplit = new SplitText(heading, {
        type: "words",
        wordsClass: "word",
      });

      featuresTL.from(headingSplit.words, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.04,
        duration: 0.7,
        ease: "back.out(1.5)",
      });
    }

    // Animate subtext
    const subtext = featuresRef.current.querySelector(".features-subtext");
    if (subtext) {
      featuresTL.from(
        subtext,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      );
    }

    // Animate feature cards - sequential with stagger
    featureCardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Card entrance - each card staggers from the previous
      featuresTL.from(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          ease: "power3.out",
        },
        index === 0 ? "-=0.3" : "-=0.6", // First card overlaps less, others overlap more
      );

      // Icon animation
      const icon = card.querySelector(".feature-icon");
      if (icon) {
        featuresTL.from(
          icon,
          {
            scale: 0,
            rotation: -180,
            duration: 0.6,
            ease: "back.out(2)",
          },
          "<", // Starts with card
        );
      }

      // Badge animation
      const badge = card.querySelector(".feature-badge");
      if (badge) {
        featuresTL.from(
          badge,
          {
            opacity: 0,
            x: 20,
            duration: 0.4,
            ease: "power2.out",
          },
          "<0.2", // Starts 0.2s after card
        );
      }

      // Add hover effect
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });

        const cardIcon = card.querySelector(".feature-icon");
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
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        const cardIcon = card.querySelector(".feature-icon");
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

  // Parallax effects
  const initParallaxEffects = () => {
    // Hero image parallax
    const heroImage = heroRef.current?.querySelector("img");
    if (heroImage) {
      gsap.to(heroImage, {
        y: 100,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Story image parallax
    if (storyImageRef.current) {
      const img = storyImageRef.current.querySelector("img");
      if (img) {
        gsap.to(img, {
          y: -40,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: storyImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }

    // Mission image parallax
    if (missionImageRef.current) {
      const img = missionImageRef.current.querySelector("img");
      if (img) {
        gsap.to(img, {
          y: -40,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: missionImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden text-white py-20 sm:py-32"
      >
        <div className="absolute inset-0">
          <img
            src="/SolarEnergyPanel.jpg"
            alt="Solar panels background"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            ref={heroHeadingRef}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-10 leading-tight"
          >
            About Us
          </h1>

          <p
            ref={heroTextRef}
            className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Our Vision is to be Africa's most trusted renewable energy partner,
            leading the continent's transition to clean energy and creating a
            future where sustainable power is accessible to all.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="story-badge inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 font-semibold">
                Our Story
              </div>
              <h2
                ref={storyHeadingRef}
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              >
                Building a Sustainable Future, One Home at a Time
              </h2>
              <p
                ref={(el) => (storyParagraphsRef.current[0] = el)}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                Founded in 2009, Valtech Solar Energy emerged from a simple
                vision: to make clean, reliable energy accessible to every
                Nigerian home and business. What started as a small team of
                passionate engineers has grown into Africa's leading renewable
                energy provider.
              </p>
              <p
                ref={(el) => (storyParagraphsRef.current[1] = el)}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Today, we've installed over 2,000 solar systems, generated 50MW
                of clean energy, and helped thousands reduce their carbon
                footprint while achieving energy independence. Our commitment to
                excellence and innovation drives everything we do.
              </p>
            </div>

            {/* Image */}
            <div ref={storyImageRef} className="relative h-full min-h-[500px]">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <img
                  src="/solar.jpg"
                  alt="Solar panels installation representing our mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              ref={missionHeadingRef}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Guided by Purpose
            </h2>
            <p className="mission-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission and vision drive every decision we make and every
              customer we serve.
            </p>
          </div>

          <div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div ref={missionImageRef} className="relative">
                <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="/ronnakorn.jpg"
                    alt="Solar panels installation representing our mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              </div>

              <div ref={missionCardRef} className="relative group">
                <div className="absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl">
                  <div className="mission-icon w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mission-title text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="mission-text text-gray-600 text-lg leading-relaxed">
                    To empower every Nigerian with access to reliable,
                    affordable, and sustainable energy solutions that transform
                    lives, protect the environment, and drive economic growth
                    across our communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-15">
            <h2 className="features-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Thousands Choose Us
            </h2>
            <p className="features-subtext text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Nigeria's premier solar
              energy provider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureCardsRef.current[index] = el)}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
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

      <section className="">
        <ClientsFeedbackSection />
      </section>
    </div>
  );
};

export default AboutSection;
