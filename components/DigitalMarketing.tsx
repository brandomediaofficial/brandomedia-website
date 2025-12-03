import Image from "next/image";

export default function DigitalMarketing() {
  const services = [
    "Social Media Marketing",
    "Search Engine Optimization",
    "Search engine Marketing",
    "Local SEO",
    "Digital Marketing Strategy",
    "Influencer Marketing",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <p className="text-[black] font-semibold text-sm mb-2">
                Digital Transformation &amp; Traffic Building
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Digital Marketing Companies It Improves Business reach
              </h2>
            </div>

            <p className="text-gray-600">
              Utilise Our Digital Marketing Services to Reach Your Digital
              Objectives and Boost Your Profits.
            </p>

            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[black] font-bold">•</span>
                  <span className="font-semibold text-gray-900">{service}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-[black] text-[black] px-8 py-2 rounded font-bold hover:bg-[black] hover:text-white transition-colors">
              Get a Free Quote
            </button>
          </div>

          {/* Image Side with Purple Gradient Background */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 order-1 md:order-2">
            <Image
              src="/images/digital_marketing.webp"
              alt="Digital Marketing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
