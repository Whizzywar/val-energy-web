import React from "react";
import { TrendingUp, CheckCircle, CarIcon, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden text-white py-20 sm:py-32">
        <div className="absolute inset-0">
          <img
            src="/SolarEnergyPanel.jpg"
            alt="Solar panels background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-10 leading-tight">
            About Us
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our Vision is to be Africa's most trusted renewable energy partner,
            leading the continent's transition to clean energy and creating a
            future where sustainable power is accessible to all.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 font-semibold">
                Our Story
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Building a Sustainable Future, One Home at a Time
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, Valtech Solar Energy emerged from a simple
                vision: to make clean, reliable energy accessible to every
                Nigerian home and business. What started as a small team of
                passionate engineers has grown into Africa's leading renewable
                energy provider.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we've installed over 2,000 solar systems, generated 50MW
                of clean energy, and helped thousands reduce their carbon
                footprint while achieving energy independence. Our commitment to
                excellence and innovation drives everything we do.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-full min-h-[500px]">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative h-full rounded-2xl overflow-hidden ">
                <img
                  src="/solar.jpg"
                  alt="Solar panels installation representing our mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Guided by Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission and vision drive every decision we make and every
              customer we serve.
            </p>
          </div>

          <div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4  rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
                  <img
                    src="/ronnakorn.jpg"
                    alt="Solar panels installation representing our mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To empower every Nigerian with access to reliable,
                    affordable, and sustainable energy solutions that transform
                    lives, protect the environment, and drive economic growth
                    across our communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-15">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Thousands Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Nigeria's premier solar
              energy provider.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bike className="w-12 h-12" />,
                title: "Waybill Delivery",
                description: "We waybill to any location in Nigeria and Africa",
                badge: "Safe Delivery",
              },

              {
                icon: <CarIcon className="w-12 h-12" />,
                title: "Premium Products",
                description: "Only Tier-1 solar panels and lithium batteries",
                badge: "Top Tier",
              },

              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Proven Results",
                description: "99.9% uptime and 4.9-star customer satisfaction",
                badge: "4.9★",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600  transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Energy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join 2,000+ satisfied customers who have made the switch to clean,
            reliable solar power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
