import Image from "next/image";

export default function VideoProduction() {
  const services = [
    "Corporate Videos",
    "Promotional Videos",
    "Social Media Reels",
    "Property Videos",
    "Explainer Videos"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/video_production.webp"
              alt="Video Production"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-[black] font-semibold text-sm mb-2">
                Brandomedia Video Production Services
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Business Video Reimagined
              </h2>
            </div>

            <p className="text-gray-600">
              We&apos;re redefining the way businesses connect with one another, from unique solutions like interactive and personalized video to tailored video content.
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
        </div>
      </div>
    </section>
  );
}
