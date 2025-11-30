import Image from "next/image";

export default function BrandingServices() {
  const services = [
    "Brand Guidelines",
    "Brand Identity",
    "Brand Name",
    "Logo Design",
    "Brochure Design",
    "Packaging Design"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-[#090565] font-semibold text-sm mb-2">
                Brandomedia Branding Services
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Branding &amp; Design Agency - Achieve Your Marketing Goals
              </h2>
            </div>

            <p className="text-gray-600">
              Create stunning and distinctive website designs that turn visitors become customers.
            </p>

            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#090565] font-bold">•</span>
                  <span className="font-semibold text-gray-900">{service}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-[#090565] text-[#090565] px-8 py-2 rounded font-bold hover:bg-[#090565] hover:text-white transition-colors">
              Get a Free Quote
            </button>
          </div>

          {/* Image Side */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/branding_services.webp"
              alt="Branding Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
