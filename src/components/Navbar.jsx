import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const lightBgRoutes = ["/products", "/contact", "/about"];
  const isLightPage = lightBgRoutes.includes(location.pathname);

  useEffect(() => {
    const nav = document.querySelector("nav");

    // On light pages, start with a dark gradient so white text is visible
    // On dark pages (home), start fully transparent
    gsap.set(nav, {
      backgroundColor: isLightPage ? "#00000040" : "transparent",
      backdropFilter: "blur(0px)",
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(nav, {
          backgroundColor: "#00000080",
          backdropFilter: "blur(10px)",
          duration: 0.4,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(nav, {
          backgroundColor: isLightPage ? "#00000040" : "transparent",
          backdropFilter: "blur(0px)",
          duration: 0.4,
          ease: "power1.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isLightPage]);

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
      <nav className="fixed top-0 left-0 w-full z-50 ">
        <div className="flex items-center justify-between w-full h-16 px-6 sm:px-10 lg:px-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <h1 className="font-bold text-2xl tracking-tight text-white">
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
                  isActive(item.path)
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-white"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="">
            <Link
              to="/contact"
              className="hidden lg:flex items-center bg-blue-600 text-white  px-3 py-2 rounded-full text-xs font-medium shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              GET QUOTE
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

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-2 ">
          <h2 className="text-black font-bold text-xl">Valtech Energy</h2>
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
              className={`block w-full text-left px-1 py-2.5 font-medium text-sm uppercase tracking-wide border-b border-gray-400 transition-all duration-300 ${
                isActive(item.path)
                  ? "text-blue-600 border-b-blue-600"
                  : "text-gray-900 hover:text-blue-600"
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
