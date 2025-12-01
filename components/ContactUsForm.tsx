export default function ContactUsForm() {
  const services = [
    "Social Media Marketing",
    "Website Development",
    "Video Production",
    "Branding Solution",
    "Search Engine Optimization",
    "Performance Marketing",
    "Instagram Marketing",
    "Pay Per Click (PPC)",
    "Consultancy",
    "Event Marketing",
    "Shopify Development",
    "Influencer Marketing"
  ];

  return (
    <section className="relative py-16 bg-gray-900 text-white">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/start_project.webp")' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Start a New Project</h2>
          <p className="text-gray-300 text-sm md:text-base">
            Whether you have a new business inquiry, you&apos;re interested in collaborating, or you&apos;d like to join our team,
            <br className="hidden md:block" />
            please contact us below. We&apos;d love to hear from you!
          </p>
        </div>

        <form className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 font-semibold">I&apos;m Interested In *</label>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id={`service-${index}`}
                        className="w-5 h-5 rounded border-gray-300 text-black focus:ring-gray-500"
                      />
                      <label htmlFor={`service-${index}`} className="text-sm cursor-pointer select-none">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>

              <div>
                <select defaultValue="" className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500 appearance-none">
                  <option value="" disabled>Monthly Marketing Budget</option>
                  <option value="low">&lt; $1,000</option>
                  <option value="medium">$1,000 - $5,000</option>
                  <option value="high">$5,000+</option>
                </select>
              </div>

              <div>
                <input 
                  type="url" 
                  placeholder="Website URL" 
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea 
                  rows={6}
                  className="w-full p-3 rounded bg-white text-black border-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:text-right">
             <button type="submit" className="bg-white text-[black] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors uppercase">
               Submit
             </button>
          </div>
        </form>
      </div>
    </section>
  );
}
