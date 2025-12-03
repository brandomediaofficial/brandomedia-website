import React from "react";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#4a4a55] py-20 px-4 text-center text-white">
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

        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Get a Custom Proposal
        </button>
      </div>
    </section>
  );
}
