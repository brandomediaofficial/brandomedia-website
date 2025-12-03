import React from "react";
import Image from "next/image";

export default function Boost() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              {/* Logo Placeholder - Image 5 shows a logo at the top left of this section */}
              <div className="border-2 border-[black] rounded p-1 px-2 inline-block mb-6">
                <h1 className="text-xl font-bold tracking-widest uppercase font-sans text-[black]">
                  Brandomedia
                </h1>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[black] mb-6 leading-tight">
              Boost Your Company in , Pondicherry, <br />
              India With a Reputable Digital Marketing & <br />
              Video Production Firm
            </h2>

            <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-8">
              <p>
                Brandomedia, the best digital marketing agency in Pondicherry
                and Chennai. Our passionate team of experts is dedicated to
                helping businesses thrive online. With our expertise in digital
                marketing, video production, branding, restaurant and bar
                marketing, photography, and web development, we offer
                comprehensive solutions to enhance your online presence.
              </p>
              <p>
                We blend data-driven methods with industry knowledge to offer
                targeted customers, increase conversions, and improve brand
                visibility. Join together with us to take advantage of digital
                marketing's potential, interact with your audience, and
                accomplish your career goals. Our all-inclusive packages will
                develop your business ahead by increasing its online presence
                and offering captivating films, a unique brand identity, and
                easy- to-use websites.
              </p>
            </div>

            <button className="border-2 border-[black] text-black px-8 py-2 rounded font-bold hover:bg-[black] hover:text-white transition-colors">
              Our Story
            </button>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {/* Using the VR image */}
              <Image
                src="/images/boost-vr.webp"
                alt="VR Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
