import React from "react";

export default function AboutMission() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left Side - Blue Background */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Brandomedia&apos;s
          <br />
          Mission
          <br />
          Statement
        </h2>
      </div>

      {/* Right Side - White Background */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-black">
          Empowering Brands, Crafting Impact
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            At Brandomedia, our mission is clear: empower brands to thrive in
            the digital spotlight. We blend creativity, data, and technology to
            sculpt impactful narratives that resonate across screens. Our canvas
            spans from pixel-perfect campaigns to cinematic storytelling.
          </p>

          <p>
            We don&apos;t just create content; we ignite connections. Our
            mission is to be the compass guiding brands toward lasting
            relevance, measurable results, and a legacy that transcends trends.
          </p>

          <p>
            Join us at Brandomedia, where every frame, every pixel, and every
            click tells a story of transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
