import React, { useState } from "react";

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
      className="relative w-full text-white bg-gradient-to-b from-black to-[#0a0a0a] py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Bring Your{" "}
            <span className="bg-blue-600 text-transparent bg-clip-text">
              Energy Vision
            </span>{" "}
            to Life
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Fill out the form and our team will reach out shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-xl space-y-6"
          >
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
                placeholder="How can we help you?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className="w-full py-3 px-6 rounded-lg font-semibold  bg-blue-600  transition-all shadow-lg shadow-green-500/20 text-white transform hover:scale-[1.02] active:scale-[0.97]"
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

            <p className="text-xs text-gray-400 text-center">
              🔒 Your message is secure and encrypted.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
