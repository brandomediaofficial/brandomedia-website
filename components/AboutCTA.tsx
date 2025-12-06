import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      className="w-full py-20 px-4 text-center text-white relative bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop")',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Data-Fueled, Expert-Led Digital
          <br />
          Marketing For Driving Business Growth
        </h2>

        <p className="text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          At Brandomedia, we're not just a digital marketing agency - we're your
          growth partner. Our passionate team of 20+ experts combines their
          diverse skills and experience to craft powerful digital strategies
          that deliver real results.
        </p>

        <Link href="/contact">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Get a Custom Proposal
          </button>
        </Link>
      </div>
    </section>
  );
}
