import { Menu, Phone, X, Zap } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with routes
  const navigationItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "products", label: "Products", path: "/products" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Check if a nav item is active based on current route
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl py-2"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-0"
        } border-b border-gray-100 dark:border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Brand Logo - Link to Home */}
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div
                  className={`bg-gradient-to-br from-blue-500 via-green-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 ${
                    isScrolled ? "w-12 h-12" : "w-14 h-14"
                  }`}
                >
                  <Zap
                    className={`text-white animate-pulse transition-all duration-300 ${
                      isScrolled ? "w-6 h-6" : "w-8 h-8"
                    }`}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1
                  className={`font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled ? "text-2xl" : "text-3xl"
                  }`}
                >
                  Valtech Energy
                </h1>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 -mt-1">
                  Clean Energy Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Phone Number */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+234 802-057-4628</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
