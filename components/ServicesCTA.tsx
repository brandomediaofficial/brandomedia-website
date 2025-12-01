import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="w-full py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Would You Like To Discuss Your Project With Our Experts?
            </h2>
            <p className="text-sm md:text-base text-blue-100">
              Send your project details by clicking on get in touch and one of our team members will call you soon!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-blue-900 transition-colors whitespace-nowrap"
          >
            GET QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
