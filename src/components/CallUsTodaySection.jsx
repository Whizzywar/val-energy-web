import React from "react";
import { Link } from "react-router-dom";

const CallUsTodaySection = () => {
  return (
    <div>
      <section className="relative py-20 sm:py-28 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/CutePanels.jpg')",
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/10"></div>

          {/* Animated Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Transform Your Energy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed drop-shadow-md">
            Join 2,000+ satisfied customers who have made the switch to clean,
            reliable solar power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg  hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallUsTodaySection;
