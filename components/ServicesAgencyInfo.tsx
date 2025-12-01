import Link from "next/link";

export default function ServicesAgencyInfo() {
  return (
    <section className="w-full py-20 bg-white text-gray-900 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Placeholder - Using text for now as per previous components, or could be an image */}
          <div className="mb-10 flex justify-center">
             <div className="border-2 border-blue-800 rounded p-2 px-4 inline-block">
              <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase font-sans text-blue-900">Brando</h1>
              <p className="text-xs md:text-sm text-center tracking-[0.3em] uppercase -mt-1 text-blue-900">media</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12 text-left md:text-center">
            <p className="font-bold">
              Brandomedia is a creative agency based in Pondicherry India. We are a full-service studio
              offering strategy, design & video production across all platforms.
            </p>
            <p>
              Brandomedia has helped more than 100 businesses to get top-quality Video production and digital
              marketing services worldwide. Our digital marketing company been helping businesses for more
              than 10 years and offering the best video and digital marketing services to make their business more
              profitable.
            </p>
            <p>
              Our digital marketing company can design and execute digital marketing strategies for various
              platforms like Facebook, Twitter, Instagram, Pinterest, YouTube and more.
            </p>
            <p>
              Brandomedia is a certified digital marketing company with more than 10 team members having
              great experience in providing digital marketing and video production services. If you are a business,
              and want to know how digital marketing can help your business to grow then we can offer you a
              digital marketing consulting at very affordable charges.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              There are three responses to a piece of work
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              - yes, no, and WOW!
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Wow is the one we aim for"
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-block px-10 py-3 bg-blue-900 text-white font-bold rounded-full hover:bg-blue-800 transition-colors shadow-lg"
          >
            HIRE US !
          </Link>
        </div>
      </div>
    </section>
  );
}
