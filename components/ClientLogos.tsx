export default function ClientLogos() {
  // Using text placeholders for now as we don't have the actual logo assets
  // In a real implementation, these would be Image components
  const clients = [
    "hullabalu",
    "RENE.E Laboratory",
    "iWAY",
    "Reliance Foundation",
    "TWO WHEELERS FOR RENTAL",
    "YFT",
    "ONE STOP Publishing Solution",
    "m"
  ];

  return (
    <section className="bg-[#2a2a2a] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Clients</h2>
        
        <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-300 mb-12">
          Brandomedia is the unrivalled digital marketing powerhouse in Lawspet Pondicherry. We can assist you in increasing your web presence. Digital marketing, web development, social media marketing, video creation, branding, and restaurant and bar promotions are among the specialities of our team of specialists. Come experience the extraordinary with us as we transform the digital landscape together. Join our list of satisfied customers.
        </p>

        <div className="relative flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {/* Left Arrow */}
          <button className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center w-full max-w-5xl px-8">
            {clients.map((client, index) => (
              <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                {/* Placeholder for logo */}
                <div className="text-xl font-bold text-gray-400 border border-gray-600 p-4 rounded min-w-[120px] text-center">
                  {client}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
      </div>
    </section>
  );
}
