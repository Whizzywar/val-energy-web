import React from "react";
import { Award, Clock, Shield, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-5 py-2 mb-6 md:mb-8">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm sm:text-base">
                Trusted by Thousands
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Valtech Energy?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 md:mb-12 leading-relaxed">
              With over 15 years of expertise in renewable energy, Valtech
              Energy has established itself as the premier provider of
              sustainable energy solutions, delivering reliability, innovation,
              and efficiency nationwide.
            </p>

            {/* FEATURES */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: (
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                  ),
                  title: "Industry-Leading Warranties",
                  description:
                    "Comprehensive warranties up to 25 years on solar panels and 15 years on lithium batteries with full technical support.",
                },
                {
                  icon: (
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                  ),
                  title: "Expert Installation Team",
                  description:
                    "Certified professionals with thousands of successful installations and continuous technical training.",
                },
                {
                  icon: (
                    <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                  ),
                  title: "24/7 Customer Support",
                  description:
                    "Round-the-clock technical assistance, maintenance, and emergency response for peace of mind.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-500">
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Transforming energy consumption across the nation
                </p>
              </div>

              <div className="grid grid-cols-2  gap-6 sm:gap-8">
                {[
                  {
                    value: "3000+",
                    label: "Customer satisfaction",
                    color: "text-blue-600",
                  },
                  {
                    value: "50MW",
                    label: "Clean Energy Generated",
                    color: "text-green-600",
                  },
                  {
                    value: "99.9%",
                    label: "System Reliability",
                    color: "text-purple-600",
                  },
                  {
                    value: "5.9★",
                    label: "Customer Rating",
                    color: "text-orange-600",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center bg-white/80 rounded-2xl p-1 sm:p-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <div
                      className={`text-xl sm:text-2xl font-bold mb-1 ${stat.color}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-xs font-semibold text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200/40 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-200/40 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
