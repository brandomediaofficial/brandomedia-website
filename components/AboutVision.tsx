import React from "react";

export default function AboutVision() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left Side - White Background */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-black">
          Igniting Possibilities, Crafting Impact
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          At Brandomedia, we envision a digital cosmos where creativity knows no
          bounds. Our Everflux spirit keeps us agile, forever connected to the
          pulse of innovation. Lifelong learning fuels our ascent, and
          insatiable ambition propels us toward celestial heights. We don&apos;t
          merely create; we sculpt eternity. Our work leaves indelible marks,
          like constellations in the night sky. Brandomedia isn&apos;t just a
          name; it&apos;s a legacy—a force that shapes the digital universe.
          Join us on this cosmic journey, where imagination dances with
          technology, and every pixel tells a story. Together, we&apos;ll leave
          our mark, crafting impact that echoes through time. We are
          Brandomedia.
        </p>
      </div>

      {/* Right Side - Blue Background */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Brandomedia&apos;s
          <br />
          Vision
          <br />
          Statement
        </h2>
      </div>
    </section>
  );
}
