import {
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Send,
  Target,
} from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  // Method 3: Using Formspree (Alternative to EmailJS)
  const sendEmailWithFormspree = async () => {
    // Formspree is a free form backend service
    const response = await fetch("https://formspree.io/f/your-form-id-here", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        _subject: `New Contact Form Submission - ${formData.name}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Products data with detailed pricing
  const products = [
    {
      id: 1,
      name: "EnergyFlow Pro 100Ah",
      category: "Lithium Battery",
      price: 1299,
      originalPrice: 1499,
      image: "🔋",
      features: [
        "100Ah LiFePO4 Capacity",
        "10-Year Warranty",
        "Fast Charging Technology",
        "Built-in BMS Protection",
        "Lightweight Design",
      ],
      rating: 4.9,
      reviews: 324,
      inStock: true,
      popular: true,
      savings: 200,
    },
    {
      id: 2,
      name: "EnergyFlow Elite 200Ah",
      category: "Lithium Battery",
      price: 2199,
      originalPrice: 2499,
      image: "🔋",
      features: [
        "200Ah High Capacity",
        "15-Year Warranty",
        "Deep Cycle Performance",
        "Smart Monitoring System",
        "Temperature Control",
      ],
      rating: 4.8,
      reviews: 256,
      inStock: true,
      popular: false,
      savings: 300,
    },
    {
      id: 3,
      name: "SolarMax 400W Panel",
      category: "Solar Panel",
      price: 299,
      originalPrice: 349,
      image: "☀️",
      features: [
        "400W Monocrystalline",
        "25-Year Warranty",
        "22% Efficiency Rating",
        "Weather Resistant",
        "Easy Installation",
      ],
      rating: 4.7,
      reviews: 412,
      inStock: true,
      popular: true,
      savings: 50,
    },
    {
      id: 4,
      name: "SolarMax 500W Panel",
      category: "Solar Panel",
      price: 399,
      originalPrice: 459,
      image: "☀️",
      features: [
        "500W High Output",
        "25-Year Warranty",
        "Bifacial Technology",
        "Low Light Performance",
        "Durable Frame",
      ],
      rating: 4.8,
      reviews: 189,
      inStock: false,
      popular: false,
      savings: 60,
    },
    {
      id: 5,
      name: "PowerInverter 3000W",
      category: "Solar Inverter",
      price: 899,
      originalPrice: 999,
      image: "⚡",
      features: [
        "3000W Pure Sine Wave",
        "10-Year Warranty",
        "LCD Display",
        "Remote Monitoring",
        "Grid-Tie Compatible",
      ],
      rating: 4.6,
      reviews: 145,
      inStock: true,
      popular: false,
      savings: 100,
    },
    {
      id: 6,
      name: "Complete Solar Kit 5kW",
      category: "Complete System",
      price: 4999,
      originalPrice: 5999,
      image: "🏠",
      features: [
        "5kW Complete System",
        "25-Year Warranty",
        "Professional Installation",
        "Monitoring App",
        "Battery Compatible",
      ],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      popular: true,
      savings: 1000,
    },
  ];

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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
                Get Your Free Quote
              </h3>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 sm:space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="" className="text-gray-900">
                        Select a service
                      </option>
                      {products.map((product) => (
                        <option
                          key={product.id}
                          value={product.name}
                          className="text-gray-900"
                        >
                          {product.name}
                        </option>
                      ))}
                      <option value="consultation" className="text-gray-900">
                        General Consultation
                      </option>
                      <option value="installation" className="text-gray-900">
                        Installation Services
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your energy needs, property size, current energy costs, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 sm:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {formStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-400 rounded-lg sm:rounded-xl p-3 sm:p-4 text-green-300 text-center text-sm sm:text-base">
                    ✅ Message sent successfully! We'll contact you within 24
                    hours.
                  </div>
                )}

                {/* Privacy Notice */}
                <p className="text-xs sm:text-sm text-gray-400 text-center leading-relaxed">
                  🔒 Your information is secure and will never be shared with
                  third parties.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Header */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                  Contact Information
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                  Ready to harness the power of clean energy? Our team of
                  renewable energy experts is here to guide you through every
                  step of your sustainable energy journey.
                </p>
              </div>

              {/* Contact Methods */}
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
                    <p className="text-lg sm:text-xl font-bold text-blue-400 mb-2 break-all sm:break-normal">
                      info@energyflowsolutions.com
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

              {/* Emergency Support */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold">
                      24/7 Emergency Support
                    </h4>
                    <p className="text-sm sm:text-base text-gray-400">
                      For critical system issues and outages
                    </p>
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-red-400 text-center sm:text-left">
                  +1 (555) 911-SOLAR
                </p>
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
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
