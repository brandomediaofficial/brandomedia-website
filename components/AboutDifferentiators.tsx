import React from "react";

export default function AboutDifferentiators() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left Side - Blue Background */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          What sets
          <br />
          Brandomedia
          <br />
          apart?
        </h2>
      </div>

      {/* Right Side - White Background */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-8 text-black">Get to Know Us</h3>

        <ul className="space-y-6 text-gray-700 text-sm md:text-base">
          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Expert Collaboration:</strong>{" "}
              Our team of 20+ specialists works together seamlessly, leveraging
              each other&apos;s strengths to create a holistic digital marketing
              approach for your business.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Data-Driven Decisions:</strong>{" "}
              We don&apos;t just guess - we use data insights to inform every
              step of your campaign, ensuring maximum impact.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Proven Track Record:</strong> We
              have a history of success in helping businesses achieve their
              goals. Let us show you the Brandomedia difference!
            </div>
          </li>
        </ul>

        {/* Chat Icon Placeholder - Bottom Right */}
        <div className="flex justify-end mt-8">
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
