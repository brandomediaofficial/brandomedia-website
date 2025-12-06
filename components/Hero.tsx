"use client";

import React, { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <section className="relative h-[100dvh] md:h-[80vh] w-full bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient (optional, to match the dark blue tint if the image itself isn't dark enough) */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="hidden md:block">
            {/* Left side empty to show the face in the background image if it's positioned there. 
                    Based on the image, the face is on the left. */}
          </div>
        </div>
      </div>
    </section>
  );
}
