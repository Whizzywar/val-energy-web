import { Zap } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      name: "",
      icon: FaFacebookF,
      url: "#",
      color: "hover:bg-blue-600",
      iconColor: "text-blue-600 group-hover:text-white",
    },
    {
      name: "",
      icon: FaTwitter,
      url: "#",
      color: "hover:bg-blue-400",
      iconColor: "text-blue-400 group-hover:text-white",
    },
    {
      name: "",
      icon: FaInstagram,
      url: "#",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
      iconColor: "text-pink-600 group-hover:text-white",
    },
    {
      name: "",
      icon: FaWhatsapp,
      url: "https://wa.me/+2348140067333",
      color: "hover:bg-green-700",
      iconColor: "text-green-700 group-hover:text-white",
    },
  ];

  const contactInfo = {
    phone: "+234 814 006 7333",
    email: "info@energyflow.com",
    address: "123 Renewable Energy Blvd, Solar City, SC 12345",
    whatsapp: "+234 814 006 7333",
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Valtech! I'm interested in your clean energy solutions."
    );
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-green-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white  animate-pulse transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {" "}
                    Valtech Energy
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Clean Energy Solutions
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-lg text-sm sm:text-base">
                Leading provider of premium lithium batteries, solar panels, and
                complete renewable energy systems. Empowering homes and
                businesses with sustainable energy solutions for over 15 years.
              </p>

              {/* Social Media Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                      title={`Connect with us on ${social.name}`}
                      onClick={
                        social.name === "WhatsApp"
                          ? handleWhatsAppClick
                          : undefined
                      }
                    >
                      <IconComponent
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${social.iconColor}`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-6">
                Our Products
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Lithium Batteries",
                  "Solar Panels",
                  "Solar Inverters",
                  "Complete Systems",
                  "Installation Services",
                ].map((product, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base block py-1"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-6">
                Our Services
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Free Consultation",
                  "System Design",
                  "Professional Installation",
                  "Maintenance & Support",
                  "24/7 Monitoring",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base block py-1"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Valtech Energy. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Warranty Information",
                  "Financing Options",
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
