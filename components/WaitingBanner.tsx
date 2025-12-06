import Link from "next/link";

export default function WaitingBanner() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What are you waiting for?
            </h2>
            <p className="text-gray-200">
              Join our list of happy clients and let us help you transform your
              business.
            </p>
          </div>

          <Link href="/#contact-us">
            <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[black] transition-colors uppercase whitespace-nowrap">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
