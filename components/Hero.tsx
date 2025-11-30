import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen md:h-[80vh] w-full bg-brandomedia-blue overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/images/hero-face.png')" }}
      ></div>
      
      {/* Overlay Gradient (optional, to match the dark blue tint if the image itself isn't dark enough) */}
      <div className="absolute inset-0 bg-brandomedia-blue/40 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="hidden md:block">
                {/* Left side empty to show the face in the background image if it's positioned there. 
                    Based on the image, the face is on the left. */}
            </div>
            <div className="text-white flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Leading Digital Marketing and <br/>
                    Video Production Agency in Pondicherry
                </h2>
                <p className="text-sm md:text-base mb-8 text-gray-200 leading-relaxed max-w-lg">
                    In addition to social media marketing, we additionally provide branding,
                    web design, web building, SEO, PPC, and video production. Our group of
                    professionals can assist you in expanding your company's web presence.
                </p>
                <div>
                    <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-brandomedia-blue transition-colors font-bold">
                        Connect with us
                    </button>
                </div>
                <p className="mt-6 text-xs text-gray-400">
                    © Copyright Brandomedia
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
