import Image from "next/image";
import Link from "next/link";

export default function BrandingServices() {
  const services = [
    "Brand Guidelines",
    "Brand Identity",
    "Brand Name",
    "Logo Design",
    "Brochure Design",
    "Packaging Design",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-[black] font-semibold text-sm mb-2">
                Brandomedia Branding Services
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Branding &amp; Design Agency - Achieve Your Marketing Goals
              </h2>
            </div>

            <p className="text-gray-600">
              Create stunning and distinctive website designs that turn visitors
              become customers.
            </p>

            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[black] font-bold">•</span>
                  <span className="font-semibold text-gray-900">{service}</span>
                </div>
              ))}
            </div>

            <Link href="/#contact-us">
              <button className="border-2 border-[black] text-[black] px-8 py-2 rounded font-bold hover:bg-[black] hover:text-white transition-colors">
                Get a Free Quote
              </button>
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/branding.avif"
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
