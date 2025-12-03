import React from "react";

export default function PricingHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")', // Office/Meeting placeholder
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">
          PACKAGES AND PRICING
        </h1>
      </div>
    </section>
  );
}
