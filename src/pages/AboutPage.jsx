import {
  Award,
  Clock,
  Shield,
  Users,
  X,
  FileText,
  CheckCircle,
  BadgeCheck,
  Eye,
} from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AboutSection = () => {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const partner = {
    id: 1,
    name: "SolarTech Industries",
    logo: "🔆",
    years: "5+ years",
    collaboration: "Technology Partnership",
    partnershipCertificate: {
      issued: "January 15, 2023",
      validUntil: "January 14, 2028",
      certificateId: "VTE-STI-2023-001",
      status: "Active",
      scope: "Solar Panel Technology & Supply Partnership",
      imageUrl: "/certificates/partnership-certificate.jpg",
    },
  };

  const openSlideOver = () => {
    setIsSlideOverOpen(true);
  };

  const viewCertificate = () => {
    setIsCertificateModalOpen(true);
  };

  const CertificateImage = () => (
    <div className="bg-black-600 border-2 sm:border-3 border-black-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6 sm:mb-8 border-b-2 border-black-300 pb-4 sm:pb-6">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="bg-gray-100 rounded-full p-2 sm:p-3 lg:p-4">
            <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black-600" />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2">
          Certificate of Partnership
        </h2>
        <p className="text-black-700 text-sm sm:text-base lg:text-lg">
          Official Collaboration Agreement
        </p>
      </div>

      {/* Certificate Body */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
          This certifies that
        </p>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
            Valtech Solar Energy
          </h3>
          <p className="text-gray-600 text-sm">and</p>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mt-1 sm:mt-2">
            {partner.name}
          </h3>
        </div>

        <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">
          have entered into a strategic partnership for
        </p>
        <div className="bg-gray-100 border border-black-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-black-800 font-semibold text-base sm:text-lg">
            {partner.partnershipCertificate.scope}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600">
              Certificate ID
            </div>
            <div className="font-bold text-black text-sm sm:text-base">
              {partner.partnershipCertificate.certificateId}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600">Issued Date</div>
            <div className="font-bold text-black text-sm sm:text-base">
              {partner.partnershipCertificate.issued}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600">Valid Until</div>
            <div className="font-bold text-black text-sm sm:text-base">
              {partner.partnershipCertificate.validUntil}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600">Status</div>
            <div className="font-bold text-green-600 text-sm sm:text-base">
              {partner.partnershipCertificate.status}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black-300 pt-4 sm:pt-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center">
            <div className="font-semibold text-black text-sm sm:text-base mb-1 sm:mb-2">
              Valtech Solar Energy
            </div>
            <div className="text-xs text-gray-600">Authorized Signature</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-black text-sm sm:text-base mb-1 sm:mb-2">
              {partner.name}
            </div>
            <div className="text-xs text-gray-600">Authorized Signature</div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-black text-4xl sm:text-6xl lg:text-8xl font-bold transform -rotate-45">
          CERTIFIED
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 text-center sm:text-left">
            Valtech Solar Energy
          </h1>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 text-center sm:text-left">
              We are committed to providing sustainable energy solutions for a
              better tomorrow.
            </p>

            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base mb-6 sm:mb-8 mx-auto lg:mx-0">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-semibold">Trusted by Thousands</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 sm:mb-8 text-center lg:text-left">
                    Why Choose{" "}
                    <span className="bg-blue-600 bg-clip-text text-transparent block sm:inline">
                      Valtech Solar Energy
                    </span>
                  </h2>

                  <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed text-center lg:text-left">
                    With over 15 years of expertise in renewable energy,
                    EnergyFlow has established itself as the premier provider of
                    cutting-edge sustainable energy solutions.
                  </p>

                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {[
                      {
                        icon: (
                          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                        ),
                        title: "Industry-Leading Warranties",
                        description:
                          "Comprehensive warranties up to 25 years on solar panels and 15 years on lithium batteries with full support.",
                      },
                      {
                        icon: (
                          <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                        ),
                        title: "Expert Installation Team",
                        description:
                          "Certified technicians with thousands of successful installations and continuous professional training.",
                      },
                      {
                        icon: (
                          <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                        ),
                        title: "24/7 Customer Support",
                        description:
                          "Round-the-clock technical support, maintenance services, and emergency assistance for peace of mind.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm mx-auto sm:mx-0">
                          {item.icon}
                        </div>
                        <div className="text-center sm:text-left flex-1">
                          <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Company Achievements */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 sm:border-2">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">
                        Our Impact
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        Transforming energy consumption across the nation
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                      {[
                        {
                          value: "2000+",
                          label: "Systems Installed",
                          color: "",
                        },
                        {
                          value: "50MW",
                          label: "Clean Energy Generated",
                          color: "",
                        },
                        {
                          value: "99.9%",
                          label: "System Reliability",
                          color: "",
                        },
                        {
                          value: "4.9★",
                          label: "Customer Rating",
                          color: "",
                        },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="text-center bg-white/80 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3 hover:bg-white transition-all duration-300 shadow-sm"
                        >
                          <div
                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${stat.color}-600 mb-1 sm:mb-2`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-200/50 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-200/50 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Partner Collaboration Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base mb-4 sm:mb-6">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-bold">Certified Partnership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
                Official Technology Partner
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Our certified collaboration ensures premium quality and
                guaranteed performance
              </p>
            </div>

            {/* Single Partner Card with Certificate Badge */}
            <div className="max-w-sm sm:max-w-md mx-auto relative mb-6 sm:mb-8">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-1 sm:space-x-2">
                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Certified Partner</span>
                </div>
              </div>

              <div
                onClick={openSlideOver}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center cursor-pointer group hover:from-blue-100 hover:to-green-100 transition-all duration-300 hover:scale-105 border border-blue-200 sm:border-2 hover:border-blue-300 shadow-lg relative"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-2">
                  {partner.name}
                </h3>
                <div className="inline-flex items-center bg-white text-blue-600 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-sm">
                  {partner.collaboration}
                </div>

                {/* Certificate Info with Actions */}
                <div className="bg-white/80 rounded-lg sm:rounded-xl p-3 sm:p-4 w-full mb-3 sm:mb-4 border border-green-200">
                  <div className="flex items-center space-x-2 text-black mb-2 sm:mb-3">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-semibold">
                      Partnership Certificate
                    </span>
                  </div>
                  <div className="text-xs text-black space-y-1 mb-2 sm:mb-3">
                    <div>
                      ID: {partner.partnershipCertificate.certificateId}
                    </div>
                    <div>
                      Status:{" "}
                      <span className="text-green-600 font-semibold">
                        {partner.partnershipCertificate.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        viewCertificate();
                      }}
                      className="flex-1 flex items-center justify-center space-x-1 bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs py-2 px-2 sm:px-3 rounded transition-colors duration-200"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                  </div>
                </div>

                <p className="text-black-600 text-center text-sm sm:text-base">
                  {partner.years} {partner.projects}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                <h4 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                  Partnership Benefits
                </h4>
                <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Access to premium solar technology
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Enhanced efficiency and performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Extended 25-year warranties
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Certified quality assurance
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                <h4 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3 flex items-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2" />
                  Quality Assurance
                </h4>
                <ul className="text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    International certifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Rigorous testing standards
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Continuous quality monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Performance guarantees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Over Panel for Single Partner - Responsive */}
      {isSlideOverOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsSlideOverOpen(false)}
          ></div>

          {/* Slide Panel - Responsive */}
          <div className="absolute inset-0 sm:inset-y-0 sm:right-0 sm:max-w-lg w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out sm:translate-x-0">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Partnership Details
                </h3>
                <button
                  onClick={() => setIsSlideOverOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">
                    {partner.logo}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h2>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 sm:px-4 sm:py-1 text-sm font-semibold mb-3 sm:mb-4">
                    {partner.collaboration}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={viewCertificate}
                    className="flex-1 flex items-center justify-center space-x-2 bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal - Responsive */}
      {isCertificateModalOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsCertificateModalOpen(false)}
            ></div>

            <div className="relative inline-block align-bottom bg-white rounded-lg sm:rounded-2xl text-left overflow-hidden shadow-xl transform transition-all w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto my-2 sm:my-8">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                  Partnership Certificate
                </h3>
                <button
                  onClick={() => setIsCertificateModalOpen(false)}
                  className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </button>
              </div>

              <div className="p-2 sm:p-4 lg:p-6 max-h-[80vh] overflow-y-auto">
                <CertificateImage />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
