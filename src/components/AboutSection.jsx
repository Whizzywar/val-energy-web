import React from "react";
import { Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full  py-5 md:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 sm:px-6 py-2 mb-6">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">
                Trusted by Thousands
              </span>
            </div>

            <h2 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4 sm:mb-5">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                Valtech Solar Energy?
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              With over 15 years of expertise in renewable energy, Valtech
              Energy has established itself as a premier provider of sustainable
              power solutions — delivering reliability, innovation, and
              efficiency nationwide.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/daniele.jpg"
                alt="Valtech Energy"
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
