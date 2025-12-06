"use client";

import React from "react";
import { Check } from "lucide-react";

export default function PricingTable() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const webDevPlans = [
    {
      name: "Basic Website",
      subtitle: "(Starter Plan)",
      price: "₹7,999 – ₹12,999",
      description: "Perfect for small businesses or personal brands.",
      features: [
        "1–5 Pages (Home, About, Services, Contact)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "WhatsApp Integration",
        "Social Media Integration",
        "1 Revision",
        "Delivery: 3–5 Days",
      ],
      bestFor: "Startups, freelancers, small shops.",
      isPopular: false,
    },
    {
      name: "Business Website",
      subtitle: "(Most Popular)",
      price: "₹14,999 – ₹24,999",
      description: "Complete website for growing businesses.",
      features: [
        "5–10 Pages",
        "Custom UI Design",
        "On-Page SEO",
        "Blog Setup",
        "Fast Loading Optimization",
        "Google Analytics + Search Console",
        "3 Revisions",
        "Delivery: 7–10 Days",
      ],
      bestFor: "Agencies, restaurants, clinics, local businesses.",
      isPopular: true,
    },
    {
      name: "E-Commerce Website",
      subtitle: "",
      price: "₹29,999 – ₹49,999",
      description: "Sell products online with a powerful e-commerce system.",
      features: [
        "Product Management System",
        "Add to Cart & Checkout",
        "Payment Gateway Integration",
        "Inventory System",
        "Coupons & Offers",
        "Email Order Notifications",
        "SEO-Friendly Product Pages",
        "Delivery: 10–15 Days",
      ],
      bestFor: "Clothing stores, electronics, home businesses.",
      isPopular: false,
    },
  ];

  const digitalMarketingPlans = [
    {
      name: "Starter Social Media Package",
      price: "₹4,999 / month",
      description: "Great for small business presence.",
      features: [
        "8 Posts per Month",
        "Basic Captions",
        "Hashtag Research",
        "Page Setup / Optimization",
        "Monthly Report",
      ],
      bestFor: "Small businesses and beginners.",
      isPopular: false,
    },
    {
      name: "Growth Social Media Package",
      subtitle: "(Most Selected)",
      price: "₹9,999 – ₹14,999 / month",
      description: "Boost your brand visibility & engagement.",
      features: [
        "12–16 Posts per Month",
        "4 Reels per Month",
        "Creative Content",
        "Post Scheduling",
        "Community Management",
        "Monthly Report + Insights",
        "1 Ad Campaign Setup (Exclusive)",
      ],
      bestFor: "Restaurants, salons, retail, creators.",
      isPopular: true,
    },
    {
      name: "Performance Marketing Package",
      price: "₹14,999 – ₹29,999 / month",
      description: "For serious business growth.",
      features: [
        "12–20 Posts",
        "4–8 Reels",
        "Google Ads Management",
        "Meta Ads (Facebook + Instagram)",
        "Lead Generation Campaigns",
        "Advanced Analytics",
        "Competitor Research",
        "Strategy + Consultation",
      ],
      bestFor: "E-commerce, corporates, real estate.",
      isPopular: false,
    },
    {
      name: "SEO Packages",
      price: "₹7,999 – ₹19,999 / month",
      description: "",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Blog Optimization",
        "Local SEO for Pondicherry + Chennai",
        "Backlinks",
        "Monthly Reports",
      ],
      bestFor: "",
      isPopular: false,
    },
  ];

  const addOns = [
    { name: "Logo Design", price: "₹1,999 – ₹4,999" },
    { name: "Business Card / Brochure", price: "₹1,499 – ₹4,999" },
    { name: "Product Photoshoot", price: "₹2,999 – ₹14,999" },
    { name: "Video Reels", price: "₹499 – ₹2,499 per reel" },
    { name: "Monthly Website Maintenance", price: "₹999 – ₹2,999" },
    { name: "Google My Business Setup", price: "₹999" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Website Development Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              Website Development Pricing
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {webDevPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl flex flex-col ${
                  plan.isPopular
                    ? "border-black shadow-lg scale-105 z-10 relative"
                    : "border-gray-200"
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-black text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-sm text-gray-600 font-semibold mb-4">
                      {plan.subtitle}
                    </p>
                  )}
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                      Best For:
                    </p>
                    <p className="text-sm text-gray-800">{plan.bestFor}</p>
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={handleScrollToContact}
                    className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    👉 Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              Digital Marketing Packages
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {digitalMarketingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl flex flex-col ${
                  plan.isPopular
                    ? "border-black shadow-lg scale-105 z-10 relative"
                    : "border-gray-200"
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-black text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                    Most Selected
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-xs text-gray-600 font-semibold mb-3">
                      {plan.subtitle}
                    </p>
                  )}
                  <div className="text-xl font-bold text-gray-900 mb-3">
                    {plan.price}
                  </div>
                  {plan.description && (
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  )}

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.bestFor && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">
                        Best For:
                      </p>
                      <p className="text-xs text-gray-800">{plan.bestFor}</p>
                    </div>
                  )}
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={handleScrollToContact}
                    className="w-full bg-black text-white py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              Add-On Services
            </h2>
            <p className="text-gray-600">(Optional)</p>
            <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className={`p-6 flex justify-between items-center hover:bg-gray-50 transition-colors ${
                    index % 2 === 0
                      ? "md:border-b border-gray-200"
                      : "border-b border-gray-200 md:border-b-0"
                  } ${
                    // Remove bottom border for last 2 items in desktop grid
                    index >= addOns.length - 2 ? "md:border-b-0" : ""
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {addon.name}
                  </span>
                  <span className="font-bold text-black">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Why Choose Section */}
        <div className="mb-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-black">
              Why Choose Brandomedia?
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Transparent Pricing",
              "Fast Delivery",
              "24/7 Support",
              "Creative Professional Designs",
              "Local SEO Expertise (Pondicherry + Chennai)",
              "100% Custom Strategy for Each Client",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-black rounded-3xl p-8 md:p-16 text-center text-white max-w-5xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Let’s build your brand together.
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-black text-white border border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors transform hover:-translate-y-1"
            >
              👉 Get a Free Quote
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
