"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientLogos() {
  // Using text placeholders for now as we don't have the actual logo assets
  // In a real implementation, these would be Image components
  const clients = [
    "Travel Packages",
    "Sadhisha",
    "Starlite",
    "wanderin",
    "Spacezad",
    "Work@hive",
    "Travel Stays",
    "Globemart",
    "Digicloud",
    "Auro Architects",
    "Sadhish worldwide",
    "Purple",
    "Sadhisha interior",
    "Zostel",
    "Sadhisha Ai",
    "Hotel Stays",
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const [[page, direction], setPage] = useState([0, 0]);

  // We simply wrap the page index to ensure it stays within 0..totalPages-1
  // But for the state 'page', we let it grow/shrink to track direction
  const itemIndex = ((page % totalPages) + totalPages) % totalPages;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentClients = clients.slice(
    itemIndex * itemsPerPage,
    (itemIndex + 1) * itemsPerPage
  );

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="bg-white py-16 text-black overflow-hidden bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Clients</h2>

        <p className="max-w-4xl mx-auto text-sm md:text-base text-black mb-12">
          Brandomedia is the unrivalled digital marketing powerhouse in Lawspet
          Pondicherry. We can assist you in increasing your web presence.
          Digital marketing, web development, social media marketing, video
          creation, branding, and restaurant and bar promotions are among the
          specialities of our team of specialists. Come experience the
          extraordinary with us as we transform the digital landscape together.
          Join our list of satisfied customers.
        </p>

        <div className="relative flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Logos Grid Container for Animation */}
          <div className="relative w-full max-w-5xl h-[300px] md:h-[200px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center px-8"
              >
                {currentClients.map((client, index) => (
                  <div
                    key={index}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {/* Placeholder for logo */}
                    <div className="text-xl font-bold text-black border border-black p-4 rounded min-w-[120px] text-center bg-white shadow-sm">
                      {client}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 z-10 relative">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                const newDirection = idx > itemIndex ? 1 : -1;
                setPage([page + (idx - itemIndex), newDirection]);
              }}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                itemIndex === idx ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
