import React from "react";

export default function AboutExpertsBanner() {
  return (
    <section className="w-full bg-black py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Would You Like To Discuss Your Project With Our Experts?
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Send your project details by clicking on get in touch and one of our
            team members will call you soon!
          </p>
        </div>

        <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
          GET QUOTE
        </button>
      </div>
    </section>
  );
}
