import { Award, CheckCircle, ArrowRight, TrendingUp, Zap } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const ProductsList = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const productsRef = useRef([]);

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
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split and animate main heading
      const headingSplit = new SplitText(headingRef.current, {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
      });

      gsap.from(headingSplit.chars, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.02,
        ease: "back.out(1.7)",
      });

      // Split and animate subheading
      const subheadingSplit = new SplitText(subheadingRef.current, {
        type: "words",
        wordsClass: "word",
      });

      gsap.from(subheadingSplit.words, {
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.03,
        ease: "power2.out",
      });

      // Split and animate description
      const descriptionSplit = new SplitText(descriptionRef.current, {
        type: "lines,words",
        linesClass: "line",
        wordsClass: "word",
      });

      gsap.from(descriptionSplit.words, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 1,
        },
        opacity: 0,
        y: 20,
        stagger: 0.015,
        ease: "power1.out",
      });

      // Animate product cards
      productsRef.current.forEach((card, index) => {
        if (!card) return;

        // Animate product name
        const productName = card.querySelector(".product-name");
        if (productName) {
          const nameSplit = new SplitText(productName, {
            type: "words,chars",
            wordsClass: "word",
            charsClass: "char",
          });

          gsap.from(nameSplit.chars, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
            opacity: 0,
            scale: 0.3,
            rotation: -15,
            stagger: 0.03,
            ease: "back.out(2)",
          });
        }

        // Animate feature texts
        const features = card.querySelectorAll(".feature-text");
        features.forEach((feature, i) => {
          const featureSplit = new SplitText(feature, {
            type: "words",
            wordsClass: "word",
          });

          gsap.from(featureSplit.words, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 55%",
              scrub: 1,
            },
            opacity: 0,
            x: -20,
            stagger: 0.02,
            delay: i * 0.05,
            ease: "power2.out",
          });
        });

        // Animate card container
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 0,
          y: 100,
          rotationY: 15,
          scale: 0.9,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="py-4 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div
            ref={subheadingRef}
            className="inline-flex text-center text-base sm:text-lg lg:text-xl bg-blue-50 text-blue-700 rounded-full px-4 py-3 mb-5 shadow-sm"
          >
            <Award className="w-6 h-6 mr-2" />
            <span className="font-semibold">Premium Energy Solutions</span>
          </div>

          <h2
            ref={headingRef}
            className="text-4xl text-center sm:text-5xl md:text-6xl font-bold pt-2 text-black leading-tight"
          >
            Explore Our <span className="text-blue-600">Products</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-gray-600 text-lg mt-3 max-w-3xl mx-auto"
          >
            Professionally engineered energy solutions designed for performance,
            durability, and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productsRef.current[index] = el)}
              className="group bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              {/* Badge & Discount */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.badge}
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {product.discount}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
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

                <h3 className="product-name text-xl font-bold text-black mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-700 group/item hover:text-blue-600 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="feature-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* PRICE */}
                <div className="inline-flex">
                  <div>
                    <p className="text-black font-bold text-2xl flex items-baseline gap-1">
                      ${product.price}
                      <span className="text-xs text-gray-500 font-normal">
                        USD
                      </span>
                    </p>
                    <p className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
