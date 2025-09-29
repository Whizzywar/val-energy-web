import { Award, Clock, Shield, Users } from "lucide-react";
import React from "react";

const AboutSection = () => {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-3 mb-8">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-bold">Trusted by Thousands</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  EnergyFlow?
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                With over 15 years of expertise in renewable energy, EnergyFlow
                has established itself as the premier provider of cutting-edge
                sustainable energy solutions.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Award className="w-10 h-10 text-orange-500" />,
                    title: "Industry-Leading Warranties",
                    description:
                      "Comprehensive warranties up to 25 years on solar panels and 15 years on lithium batteries with full support.",
                  },
                  {
                    icon: <Users className="w-10 h-10 text-blue-500" />,
                    title: "Expert Installation Team",
                    description:
                      "Certified technicians with thousands of successful installations and continuous professional training.",
                  },
                  {
                    icon: <Clock className="w-10 h-10 text-green-500" />,
                    title: "24/7 Customer Support",
                    description:
                      "Round-the-clock technical support, maintenance services, and emergency assistance for peace of mind.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Achievements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-3xl p-10 border-2 border-gray-200">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Our Impact
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Transforming energy consumption across the nation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-sm">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      2000+
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      Systems Installed
                    </div>
                  </div>
                  <div className="text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-sm">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      50MW
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      Clean Energy Generated
                    </div>
                  </div>
                  <div className="text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      99.9%
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      System Reliability
                    </div>
                  </div>
                  <div className="text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-sm">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      4.9★
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      Customer Rating
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300"
                  >
                    Join Our Success Story
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/50 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-200/50 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
