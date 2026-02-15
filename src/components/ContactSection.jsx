import React, { useEffect, useRef } from "react";
import { Award, Shield, CheckCircle, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const certificateCardsRef = useRef([]);
  const statsRef = useRef([]);

  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      organization: "International Organization for Standardization",
      year: "2023",
      description:
        "Certified for maintaining the highest standards in quality management and continuous improvement.",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
      imageUrl: "/certificates/iso-9001.jpg", // Replace with actual certificate image
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      organization: "International Organization for Standardization",
      year: "2023",
      description:
        "Committed to environmental responsibility and sustainable business practices.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      badgeColor: "bg-green-100 text-green-700",
      imageUrl: "/certificates/iso-14001.jpg",
    },
    {
      id: 3,
      title: "NABCEP Certified",
      subtitle: "Solar PV Installation Professional",
      organization: "North American Board of Certified Energy Practitioners",
      year: "2024",
      description:
        "Professional certification demonstrating expertise in solar photovoltaic installation and design.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      badgeColor: "bg-orange-100 text-orange-700",
      imageUrl: "/certificates/nabcep.jpg",
    },
    {
      id: 4,
      title: "SEIA Member",
      subtitle: "Solar Energy Industries Association",
      organization: "Solar Energy Industries Association",
      year: "2020 - Present",
      description:
        "Active member committed to advancing solar energy through advocacy and best practices.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      badgeColor: "bg-purple-100 text-purple-700",
      imageUrl: "/certificates/seia.jpg",
    },
  ];

  const stats = [
    { value: "4+", label: "Industry Certifications" },
    { value: "15+", label: "Years Certified" },
    { value: "100%", label: "Compliance Rate" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
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
        { opacity: 0, y: 30 },
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

      // Stats animation - stagger
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Certificate cards - stagger animation
      gsap.fromTo(
        certificateCardsRef.current,
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certificateCardsRef.current[0],
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Hover animations for cards
      certificateCardsRef.current.forEach((card) => {
        if (!card) return;

        const icon = card.querySelector(".cert-icon");
        const badge = card.querySelector(".cert-badge");
        const viewLink = card.querySelector(".view-link");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            scale: 1.2,
            rotation: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });

          gsap.to(badge, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.7)",
          });

          if (viewLink) {
            gsap.to(viewLink, {
              x: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });

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

          if (viewLink) {
            gsap.to(viewLink, {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold text-sm">Certified Excellence</span>
          </div>

          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ opacity: 0 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
              Certifications
            </span>
          </h2>

          <p
            ref={subtextRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            style={{ opacity: 0 }}
          >
            Trusted and certified by leading industry organizations, ensuring
            the highest standards of quality, safety, and environmental
            responsibility.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center"
                style={{ opacity: 0 }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (certificateCardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 border border-gray-100"
              style={{ opacity: 0, perspective: "1000px" }}
            >
              {/* Certificate Header with Gradient */}
              <div
                className={`bg-gradient-to-r ${cert.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <Award className="w-32 h-32" />
                </div>
                <div className="relative flex items-start justify-between">
                  <div className="flex-1">
                    <div className="cert-icon mb-4">{cert.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-blue-100 text-sm">{cert.subtitle}</p>
                  </div>
                  <span
                    className={`cert-badge ${cert.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">{cert.organization}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* View Certificate Link */}
                <button className="view-link inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Want to learn more about our certifications and compliance?
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Shield className="w-5 h-5" />
            Download Certification Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
