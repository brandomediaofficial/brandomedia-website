import Image from "next/image";
import Link from "next/link";

export default function WebDesignServices() {
  const services = [
    "E-Commerce Website",
    "CMS Website",
    "Corporate Website",
    "HTML 5 Website",
    "Wordpress Website",
    "Shopify Website",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/seo.png"
              alt="Web Design Services"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <p className="text-[black] font-semibold text-sm mb-2">
                Brandomedia Web Design Services
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
                SEO SERVICES DRIVEN BY RESULTS
              </h2>
            </div>

            <p className="text-gray-600">
              Hire us to deliver organic results for your business and crush
              your competition.
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
        </div>
      </div>
    </section>
  );
}
