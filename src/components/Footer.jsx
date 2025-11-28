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
      name: "Facebook",
      icon: FaFacebookF,
      url: "#",
      color: "group-hover:bg-blue-600",
      iconColor: "text-blue-500 group-hover:text-white",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "#",
      color: "group-hover:bg-sky-500",
      iconColor: "text-sky-400 group-hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color:
        "group-hover:bg-gradient-to-r from-purple-500 to-pink-500 group-hover:via-purple-500 group-hover:to-pink-600",
      iconColor: "text-pink-500 group-hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/+2348140067333",
      color: "group-hover:bg-green-600",
      iconColor: "text-green-500 group-hover:text-white",
    },
  ];

  const contactInfo = {
    phone: "+234 814 006 7333",
    email: "info@energyflow.com",
    address: "123 Renewable Energy Blvd, Solar City, SC 12345",
    whatsapp: "+2348140067333",
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
    <footer className="w-full bg-black text-white pt-14 pb-10">
      <div className="w-full px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div>
                <h3 className="text-3xl font-bold">Valtech Solar Energy</h3>
                <p className="text-white text-base mt-1 leading-relaxed">
                  Premium lithium batteries, solar inverters, and complete
                  renewable energy systems powering homes and businesses with
                  clean, dependable energy.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      social.name === "WhatsApp"
                        ? handleWhatsAppClick
                        : undefined
                    }
                    className={`group w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center
                      border border-white/10 transition-all duration-300 hover:scale-110 cursor-pointer ${social.color}`}
                  >
                    <IconComponent
                      className={`w-5 h-5 transition-colors duration-300 ${social.iconColor}`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 border-b border-white/10 pb-2">
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                "Lithium Batteries",
                "Solar Panels",
                "Solar Inverters",
                "Complete Systems",
                "Installation Services",
              ].map((item, index) => (
                <li key={index}>
                  <a className="text-white hover:underline transition-colors text-sm sm:text-base cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Free Consultation",
                "System Design",
                "Professional Installation",
                "Maintenance & Support",
                "24/7 Monitoring",
              ].map((service, index) => (
                <li key={index}>
                  <a className="text-white hover:underline transition-colors text-sm sm:text-base cursor-pointer">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10 mt-16 pt-6">
        <div className="w-full px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2025 Valtech Solar Energy. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <a
                key={index}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
