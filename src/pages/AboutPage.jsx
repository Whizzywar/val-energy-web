import React from "react";
import {
  Award,
  Clock,
  Shield,
  Users,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  BadgeCheck,
  Leaf,
  Sun,
  Battery,
  Globe,
  Heart,
  Star,
  CarIcon,
  Bike,
} from "lucide-react";

const ModernAboutSection = () => {
  const values = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainability",
      description: "Environmental responsibility in every solution",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all we do",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovation",
      description: "Leading with cutting-edge technology",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Customer First",
      description: "Your success is our top priority",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 sm:py-32">
        {/* Background Image with Moderate Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/VirtualSolar.jpg"
            alt="Solar panels background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
            <Sun className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold">
              Powering Africa's Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            About Us
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our Vision is to be Africa's most trusted renewable energy partner,
            leading the continent's transition to clean energy and creating a
            future where sustainable power is accessible to all.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 text-sm font-semibold">
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
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    ISO Certified
                  </span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    Industry Leader
                  </span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    Award Winning
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg">
                    <Globe className="w-12 h-12 text-blue-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg">
                    <Heart className="w-12 h-12 text-red-500 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Satisfaction
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg">
                    <Shield className="w-12 h-12 text-green-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      25yr
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Warranty
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg">
                    <Battery className="w-12 h-12 text-purple-600 mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Support
                    </div>
                  </div>
                </div>
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower every Nigerian with access to reliable, affordable,
                  and sustainable energy solutions that transform lives, protect
                  the environment, and drive economic growth across our
                  communities.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be Africa's most trusted renewable energy partner, leading
                  the continent's transition to clean energy and creating a
                  future where sustainable power is accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that define who we are and how we work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mb-6 ${value.textColor}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6">
              <BadgeCheck className="w-5 h-5 mr-2" />
              <span className="font-semibold">The Valtech Advantage</span>
            </div>
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
                icon: <Award className="w-12 h-12" />,
                title: "Industry-Leading Warranties",
                description:
                  "25-year panel warranty and 15-year battery warranty with full support",
                badge: "25 Years",
              },
              {
                icon: <Bike className="w-12 h-12" />,
                title: "Waybill Delivery",
                description: "We waybill to any location in Nigeria and Africa",
                badge: "We Deliver Anywhere",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Support",
                description:
                  "Round-the-clock monitoring and emergency response",
                badge: "Always On",
              },
              {
                icon: <CarIcon className="w-12 h-12" />,
                title: "Premium Products",
                description: "Only Tier-1 solar panels and lithium batteries",
                badge: "Top Tier",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Comprehensive Service",
                description:
                  "From consultation to maintenance, we handle everything",
                badge: "Full Service",
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
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Energy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join 2,000+ satisfied customers who have made the switch to clean,
            reliable solar power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernAboutSection;
