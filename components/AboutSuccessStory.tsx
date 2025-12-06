"use client";

import React from "react";

export default function AboutSuccessStory() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Your Success Story is Our Focus
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-sm md:text-base">
          These aren't just words on a page; they are the foundation of how we
          approach every project at Brandomedia. When you partner with us, you
          gain a team that's genuinely invested in your success. We believe that
          by living our values, we don't just create great work, we help our
          people thrive and our clients achieve their goals. Brandomedia: We are
          a team fueled by innovation and driven by a passion for your success.
        </p>
      </div>

      {/* Full Width Image Placeholder */}
      <div className="w-full h-[400px] md:h-[600px] bg-gray-300 flex items-center justify-center relative overflow-hidden">
        {/* You can replace this src with the actual image URL later */}
        <img
          src="/images/birmingham-museums-trust-5EUh-tq31eA-unsplash.jpg"
          alt="Classical Painting representing success and struggle"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement!.classList.add("bg-gray-200");
            e.currentTarget.parentElement!.innerText =
              "Classical Painting Image Placeholder";
          }}
        />
      </div>
    </section>
  );
}
