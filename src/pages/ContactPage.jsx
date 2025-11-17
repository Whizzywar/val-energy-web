import React, { useState } from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setIsDisabled(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full text-white bg-gradient-to-b from-black to-[#0a0a0a] py-20 lg:py-28"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-green-500/10 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-2 backdrop-blur-md mb-6">
            <PhoneCall className="w-5 h-5 mr-2 text-green-400" />
            <span className="font-semibold">Get Started</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Power Your Future With{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-green-300 text-transparent bg-clip-text">
              Clean Energy
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Reach out today and our energy experts will help you design the
            perfect solar or lithium solution for your home or business.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl space-y-6"
          >
            {/* Input */}
            <div>
              <label className="text-sm font-medium text-gray-200 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                disabled={isDisabled}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                disabled={isDisabled}
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                disabled={isDisabled}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us how we can help..."
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isDisabled}
              className="w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/20 text-white transform hover:scale-[1.02] active:scale-[0.97]"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-400 font-medium text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 font-medium text-center">
                Something went wrong. Try again.
              </p>
            )}

            <p className="text-xs text-gray-400 text-center">
              🔒 Your message is safe & encrypted.
            </p>
          </form>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our experts are available every day to help you transition to
                clean energy with confidence.
              </p>
            </div>

            {/* Card */}
            {[
              {
                icon: PhoneCall,
                title: "Phone Support",
                value: "+234 802-057-4628",
                color: "text-green-400 bg-green-500/10",
                sub: "Mon–Sun · 8AM–8PM",
              },
              {
                icon: Mail,
                title: "Email",
                value: "ubaniwisdom480@gmail.com",
                color: "text-blue-400 bg-blue-500/10",
                sub: "We'll respond within 2 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "456 Clean Energy Boulevard, Solar City, CA 90210",
                color: "text-purple-400 bg-purple-500/10",
                sub: "Experience our products firsthand",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="flex gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${info.color}`}
                >
                  <info.icon className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">{info.title}</h4>
                  <p className="text-lg sm:text-xl font-bold text-white mb-1">
                    {info.value}
                  </p>
                  <p className="text-gray-400 text-sm">{info.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
