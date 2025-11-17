import React from "react";
import { Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">Trusted by Thousands</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
                Valtech Energy?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              With over 15 years of expertise in renewable energy, Valtech
              Energy has established itself as a premier provider of sustainable
              power solutions — delivering reliability, innovation, and
              efficiency nationwide.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-300/10 blur-2xl rounded-3xl"></div>

              {/* Image */}
              <img
                src="/SolarPanel.jpg"
                alt="Valtech Energy"
                className="relative rounded-3xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
