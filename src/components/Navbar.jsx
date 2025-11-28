import { Menu, Phone, X, Zap } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-between w-full h-16 px-6 sm:px-10 lg:px-14">
          <Link to="/" className="flex items-center space-x-2 group">
            <h1 className="font-bold bg-blue-400 bg-clip-text text-transparent text-2xl tracking-tight">
              Valtech Solar Energy
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-medium">+234 802-057-4628</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm px-3 py-2 font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
