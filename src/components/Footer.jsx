import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "#",
      color: "hover:bg-blue-600",
      iconColor: "text-blue-400",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "#",
      color: "hover:bg-sky-500",
      iconColor: "text-sky-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color: "hover:bg-pink-500",
      iconColor: "text-white",
    },
    {
      name: "LinkedIn",
      icon: FaTiktok,
      url: "#",
      color: "hover:bg-black",
      iconColor: "text-white",
    },
  ];

  const products = [
    "Lithium Batteries",
    "Solar Panels",
    "Solar Inverters",
    "Charge Controllers",
    "BMS",
    "Energy Storage Solutions",
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-black to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold">Valtech Solar Energy</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium lithium batteries, solar inverters, and complete renewable
              energy systems powering homes and businesses with clean,
              dependable energy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+234 802-057-4628</span>
              </div>
              <a
                href="mailto:ValtechSolarEnergy@yahoo.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">ValtechSolarEnergy@yahoo.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">
                  Rivers Joy Park, Koka Junction Asaba, Delta State Nigeria
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center
                      border border-white/10 transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent
                      className={`w-4 h-4 transition-colors duration-300 ${social.iconColor} hover:text-white`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Our Products
              <span className="absolute bottom-0 left-7  w-12 h-0.5 bg-gradient-to-r from-blue-300 to-blue-600"></span>
            </h4>
            <ul className="space-y-0.5">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm gap-2 group "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-sm">
            <p className="text-center sm:text-left">
              © 2025 Valtech Solar Energy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
