import {
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Target,
} from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Formspree Integration
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqaypqad";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const isDisabled = status === "loading";

  return (
    <div>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-bold text-sm sm:text-base">
                Get Started Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to Go{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                Solar?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Transform your energy future with EnergyFlow's premium solar and
              battery solutions. Get your free consultation and personalized
              quote today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isDisabled}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isDisabled}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isDisabled}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-800 font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-red-800 font-medium">
                      Failed to send message
                    </span>
                  </div>
                  <p className="text-red-600 text-sm mt-1">
                    Please try again later or contact us directly.
                  </p>
                </div>
              )}

              <p className="text-xs sm:text-sm text-gray-400 text-center leading-relaxed">
                🔒 Your information is secure and will never be shared with
                third parties.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                Contact Information
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                Ready to harness the power of clean energy? Our team of
                renewable energy experts is here to guide you through every step
                of your sustainable energy journey.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Phone Support */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <div className="text-center sm:text-left w-full">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Phone Support
                  </h4>
                  <p className="text-xl sm:text-2xl font-bold text-green-400 mb-2">
                    +1 (555) 123-ENERGY
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    Mon-Fri 8AM-8PM, Sat 9AM-5PM, Sun 10AM-4PM
                  </p>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <div className="text-center sm:text-left w-full">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Email Us
                  </h4>
                  <p
                    href=""
                    className="text-lg sm:text-xl font-bold text-blue-400 mb-2 break-all sm:break-normal"
                  >
                    <a
                      href="mailto:ubaniwisdom480@gmail.com/?subject=EnergyFlow Solar Inquiry&body=Hello EnergyFlow Team, I'm interested in learning more about your solar solutions."
                      className="flex items-start space-x-4 no-underline"
                    ></a>
                    ubaniwisdom480@gmail.com
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    Quick response within 2 hours during business days
                  </p>
                </div>
              </div>

              {/* Visit Showroom */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <div className="text-center sm:text-left w-full">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    Visit Our Showroom
                  </h4>
                  <p className="text-base sm:text-lg text-white mb-2">
                    456 Clean Energy Boulevard
                    <br />
                    Solar City, CA 90210
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    Experience our products firsthand
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
                Why Customers Choose Us
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">
                    98% Customer Satisfaction Rate
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Target className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">
                    Average 40% Energy Cost Reduction
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">
                    15+ Years Industry Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
