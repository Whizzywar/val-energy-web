import {
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
import { Link } from "react-router-dom";

const ContactSection = () => {
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
        <p className="text-white text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
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
      <div className="min-h-screen  pt-3 sm:pt-7">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black leading-tight mb-5 sm:mb-8 lg:mb-10 px-2">
            We Are Committed To Providing Sustainable Energy Solutions For{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
              The Future
            </span>
          </h1>

          <div className=" rounded-3xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Column - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/siwawut.jpg"
                    alt="Solar panels and sustainable energy infrastructure"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Additional Info Cards Below Image */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">
                      Renewable Focus
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Company Achievements */}
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200">
                  <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">
                      Our Impact
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      Transforming energy consumption across the nation
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    {[
                      {
                        value: "2000+",
                        label: "Product Delivered",
                        color: "text-green-600",
                        bg: "bg-green-50",
                      },
                      {
                        value: "50MW",
                        label: "Clean Energy Generated",
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        value: "99.9%",
                        label: "Product Reliability",
                        color: "text-black",
                        bg: "bg-purple-50",
                      },
                      {
                        value: "4.9★",
                        label: "Customer Rating",
                        color: "text-orange-600",
                        bg: "bg-orange-50",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`text-center ${stat.bg} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/50`}
                      >
                        <div
                          className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action Button */}
                  <div className="mt-6 sm:mt-8 text-center">
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                      {" "}
                      Learn More About Us
                    </Link>
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
            <div className="max-w-sm sm:max-w-md mx-auto relative mb-3 sm:mb-8">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg flex items-center space-x-1 sm:space-x-2">
                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Authorized Partner</span>
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
          </div>
        </div>
      </div>

      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black  text-white w-screen py-10 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7x l  px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 drop-shadow-lg px-2">
              Discover The Advantages of Partnering With Industry Leaders in
              Solar Technology
            </h2>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
            {/* Partnership Benefits Card */}
            <div className="backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="flex items-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="rounded-full p-2 xs:p-2.5 sm:p-3 mr-2.5 xs:mr-3 sm:mr-4 group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  Partnership Benefits
                </h4>
              </div>

              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Access to premium solar technology
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Enhanced efficiency and performance
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Extended 25-year warranties
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Certified quality assurance
                  </span>
                </li>
              </ul>

              {/* Decorative element */}
              <div className="mt-4 xs:mt-5 sm:mt-6 pt-4 xs:pt-5 sm:pt-6 border-t border-blue-200">
                <div className="flex items-center justify-between text-xs xs:text-sm text-white">
                  <span className="font-semibold">Premium Access</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2">
              <div className="flex items-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="rounded-full p-2 xs:p-2.5 sm:p-3 mr-2.5 xs:mr-3 sm:mr-4 group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0">
                  <Shield className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  Quality Assurance
                </h4>
              </div>

              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    International certifications
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Rigorous testing standards
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Continuous quality monitoring
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <div className="flex-shrink-0 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white mt-1.5 xs:mt-2 mr-2 xs:mr-2.5 sm:mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
                    Performance guarantees
                  </span>
                </li>
              </ul>

              {/* Decorative element */}
              <div className="mt-4 xs:mt-5 sm:mt-6 pt-4 xs:pt-5 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs xs:text-sm text-white">
                  <span className="font-semibold">Certified Protection</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 "></div>
        </div>
      </section>

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

export default ContactSection;
