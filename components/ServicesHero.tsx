import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Data-Fueled, Expert-Led Digital <br className="hidden md:block" />
            Marketing For Driving Business Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
            At Brandomedia, we&apos;re not just a digital marketing agency -
            we&apos;re your growth partner. Our passionate team of 20+ experts
            combines their diverse skills and experience to craft powerful
            digital strategies that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Custom Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* Background overlay/texture if needed */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </section>
  );
}
