import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { CheckCircle, TrendingUp, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const ProductsList = () => {
  // Refs for animation targets
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const productsGridRef = useRef(null);
  const productCardsRef = useRef([]);

  useEffect(() => {
    // Initialize animations after component mounts
    const ctx = gsap.context(() => {
      initHeaderAnimations();
      initProductCardAnimations();
      initParallaxEffects();
    });

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Header text animations with SplitText
  const initHeaderAnimations = () => {
    if (!headingRef.current || !descriptionRef.current) return;

    // Split heading into characters and words
    const headingSplit = new SplitText(headingRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word",
    });

    // Split description into lines
    const descSplit = new SplitText(descriptionRef.current, {
      type: "lines",
      linesClass: "line",
    });

    // Wrap lines in overflow hidden divs for clean animation
    gsap.set(descSplit.lines, {
      overflow: "hidden",
      paddingBottom: "0.2em",
    });

    // Create master timeline for header
    const headerTL = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading characters with 3D effect
    headerTL.from(headingSplit.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.01,
      ease: "ease.out",
      duration: 0.3,
    });

    // Animate description lines
    headerTL.from(
      descSplit.lines,
      {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    );
  };

  // Product cards animations
  const initProductCardAnimations = () => {
    productCardsRef.current.forEach((card) => {
      if (!card) return;

      // Create timeline for each card
      const cardTL = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Main card entrance animation
      cardTL.from(card, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotateY: -15,
        transformOrigin: "center center",
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate badges
      const badges = card.querySelectorAll(".badge");
      if (badges.length > 0) {
        cardTL.from(
          badges,
          {
            opacity: 0,
            x: -50,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.5",
        );
      }

      // Animate product image
      const image = card.querySelector(".product-image");
      if (image) {
        cardTL.from(
          image,
          {
            scale: 1.3,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        );
      }

      // Animate category and rating section
      const categorySection = card.querySelector(".category-section");
      if (categorySection) {
        cardTL.from(
          categorySection,
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6",
        );
      }

      // Animate product title
      const title = card.querySelector(".product-title");
      if (title) {
        cardTL.from(
          title,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      // Animate feature items
      const features = card.querySelectorAll(".feature-item");
      if (features.length > 0) {
        cardTL.from(
          features,
          {
            opacity: 0,
            x: -20,
            stagger: 0.08,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      // Animate price section with elastic effect
      const priceSection = card.querySelector(".price-section");
      if (priceSection) {
        cardTL.from(
          priceSection,
          {
            opacity: 0,
            scale: 0.5,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3",
        );
      }
    });
  };

  // Parallax scrolling effects
  const initParallaxEffects = () => {
    productCardsRef.current.forEach((card) => {
      if (!card) return;

      // Subtle parallax movement
      gsap.to(card, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Image parallax
      const image = card.querySelector(".product-image");
      if (image) {
        gsap.to(image, {
          y: 20,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });
  };

  const products = [
    {
      id: 1,
      name: "EnergyFlow Pro",
      category: "Lithium Battery",
      price: 1299,
      originalPrice: 1499,
      image: "/FingerBattery.jpg",
      badge: "Best Seller",
      discount: "13% OFF",
      features: [
        "100Ah LiFePO4 Capacity",
        "10-Year Warranty",
        "Fast Charging Technology",
        "Built-in BMS Protection",
      ],
    },
    {
      id: 2,
      name: "EnergyFlow Elite",
      category: "Lithium Battery",
      price: 2199,
      originalPrice: 2499,
      image: "/InverterBox.jpg",
      badge: "Premium",
      discount: "12% OFF",
      features: [
        "200Ah High Capacity",
        "Smart Monitoring System",
        "Deep Cycle Performance",
        "Temperature Control",
      ],
    },
    {
      id: 3,
      name: "SolarMax 400W",
      category: "Solar Panel",
      price: 299,
      originalPrice: 349,
      image: "/InverterBattery.jpg",
      badge: "Popular",
      discount: "14% OFF",
      features: [
        "22% Efficiency",
        "Monocrystalline Design",
        "Weather Resistant",
        "25-Year Warranty",
      ],
    },
    {
      id: 4,
      name: "SolarMax 500W",
      category: "Solar Panel",
      price: 399,
      originalPrice: 459,
      image: "/VirtualSolar.jpg",
      badge: "New",
      discount: "13% OFF",
      features: [
        "Bifacial Technology",
        "High Output",
        "Low-Light Performance",
        "Durable Frame",
      ],
    },
    {
      id: 5,
      name: "PowerInverter",
      category: "Solar Inverter",
      price: 899,
      originalPrice: 999,
      image: "/SolarBattery.jpg",
      badge: "Top Rated",
      discount: "10% OFF",
      features: [
        "Pure Sine Wave",
        "LCD Display",
        "Remote Monitoring",
        "Grid-Tie Compatible",
      ],
    },
    {
      id: 6,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 7,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 8,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 9,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 10,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 11,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
    {
      id: 12,
      name: "Complete Solar Kit",
      category: "Complete System",
      price: 499,
      originalPrice: 599,
      image: "/SolarPanel.jpg",
      badge: "Bundle",
      discount: "17% OFF",
      features: [
        "Full Installation",
        "Monitoring App",
        "Battery Compatible",
        "Premium Components",
      ],
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 text-center"
          >
            Power Your Future with{" "}
            <span className="text-blue-600">Clean Energy</span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-lg text-center text-gray-800 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of energy products designed for
            efficiency, sustainability, and cost savings for homes and
            businesses.
          </p>
        </div>

        {/* Products Grid */}
        <div
          ref={productsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productCardsRef.current[index] = el)}
              className="group bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-500 overflow-hidden relative"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="badge bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.badge}
                </span>
                <span className="badge bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {product.discount}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Category and Rating */}
                <div className="category-section flex items-center justify-between mb-3">
                  <p className="text-blue-600 font-medium text-xs uppercase tracking-wide flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {product.category}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="product-title text-xl font-bold text-black mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="feature-item flex items-center text-gray-800 group/item "
                    >
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Price Section */}
                <div className="price-section">
                  <div className="flex items-baseline gap-2">
                    <p className="text-black font-bold text-3xl">
                      ${product.price}
                    </p>
                    <span className="text-xs text-gray-500 font-normal">
                      USD
                    </span>
                  </div>
                  <p className="text-gray-400 line-through text-sm mt-1">
                    ${product.originalPrice}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
