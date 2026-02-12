import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const ClientsFeedbackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Facilities Manager",
      company: "TechCorp Industries",
      image:
        "https://images.unsabsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content:
        "Switching to renewable energy solutions has reduced our operational costs by 40% while helping us meet our sustainability goals. The transition was seamless and the support team was exceptional.",
    },

    {
      id: 2,
      name: "Marcus Johnson",
      role: "CEO",
      company: "GreenBuild Construction",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      content:
        "The solar panel installation exceeded our expectations. We're now generating 95% of our energy needs on-site, and the ROI timeline was even better than projected.",
    },

    {
      id: 3,
      name: "Jennifer Chen",
      role: "Sustainability Director",
      company: "Metro Hospital Network",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content:
        "Our partnership has been transformative. The energy management system provides real-time insights that have optimized our consumption across all facilities. We've reduced our carbon footprint by 60%.",
    },

    {
      id: 4,
      name: "David Rodriguez",
      role: "Operations Manager",
      company: "Pacific Manufacturing",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content:
        "The smart grid integration has revolutionized how we manage energy. We've seen a 35% decrease in energy waste and our maintenance costs have dropped significantly.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations are transforming their energy
            future with our innovative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 md:p-12">
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonials[currentSlide].content}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentSlide].role}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {testimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300  ${
                index === currentSlide
                  ? "w-2 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">GreenBuild</div>
            <div className="text-2xl font-bold text-gray-400">Metro Health</div>
            <div className="text-2xl font-bold text-gray-400">Pacific MFG</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientsFeedbackSection;
