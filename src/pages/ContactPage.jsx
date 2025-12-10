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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setIsDisabled(true);

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsDisabled(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full text-gray py-27 lg:py-30 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px]  rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-5">
            Get a Free Quote From{" "}
            <span className="bg-blue-600 text-transparent bg-clip-text">
              Valtech Energy
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
            Reach out today and our energy experts will help you design the
            perfect solar or lithium solution for your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <div className="bg-white/5 border border-black/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10  space-y-6">
            <div>
              <label className="text-sm font-medium text-black mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                disabled={isDisabled}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-1 focus:ring-white-300 focus:border-transparent outline-none transition-all"
                placeholder=""
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                disabled={isDisabled}
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-1 focus:ring-white-100 focus:border-transparent outline-none transition-all"
                placeholder=""
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                disabled={isDisabled}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/5 border border-black/10 px-4 py-3 rounded-lg focus:ring-1 focus:ring-white-100 focus:border-transparent outline-none transition-all resize-none"
                placeholder=""
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isDisabled}
              className="w-full py-3 px-6 rounded-lg font-semibold bg-blue-600 transition-all shadow-lg shadow-green-500/20 text-white transform hover:scale-[1.02] active:scale-[0.97]"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

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
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 lg:mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Let's Bring Your Energy Vision to Life
              </p>
            </div>

            {[
              {
                icon: PhoneCall,
                title: "Phone",
                value: "+234 802-057-4628",
                color: "text-blue-600",
                sub: "Mon–Sat · 7am–5pm",
              },
              {
                icon: Mail,
                title: "Email",
                value: "ValtechSolarEnergy@yahoo.com",
                color: "text-blue-600",
                sub: "We'll respond shortly",
              },
              {
                icon: MapPin,
                title: "Address",
                value:
                  "Rivers Joy Park, Koka Junction Asaba, Delta State Nigeria",
                color: "text-blue-600",
                sub: "Experience our products firsthand",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="flex bg-white/5 border border-black/14 p-4 sm:p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition"
              >
                <div
                  className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center ${info.color}`}
                >
                  <info.icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    {info.title}
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-black mb-1 break-words">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">{info.sub}</p>
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
