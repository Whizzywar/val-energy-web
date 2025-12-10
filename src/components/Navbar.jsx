import { Menu, Phone, X, Zap } from "lucide-react";
import React, { useState } from "react";
import { Link, Links, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const navigationItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "products", label: "Products", path: "/products" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-white">
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b shadow-sm">
        <div className="flex items-center justify-between w-full h-16 px-6 sm:px-10 lg:px-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <h1 className="font-bold text-white text-2xl tracking-tight">
              Valtech Solar Energy
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  isActive(item.id)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.id) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA  */}
          <div className="">
            <Link
              to="/contact"
              className="hidden lg:flex items-center bg-blue-600 text-white  px-3 py-2 rounded-full text-xs font-medium shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              FREE QUOTE
              <div className="w-4 h-5 text-center group-hover:translate transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-md transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-2 ">
          <h2 className="text-black font-bold text-xl">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 rounded-md hover:bg-black transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-black  hover:text-white" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="px-4 py-6 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={` block w-full text-left px-1 py-2.5  font-medium text-sm uppercase tracking-wide border-b border-gray-400 transition-all duration-300 ${
                isActive(item.id) ? "bg-white text-black" : "text-gray-900 "
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-12 border-t border-gray-800">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
