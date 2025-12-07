import React from "react";
import Link from "next/link";

export default function AboutCompanyOverview() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Representation */}
        <div className="mb-12 flex justify-center">
          <div className="border-2 border-black rounded p-2 px-4 inline-block">
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase font-sans text-black">
              Brando
            </h1>
            <p className="text-xs md:text-sm text-center tracking-[0.3em] uppercase -mt-1 text-black">
              media
            </p>
          </div>
        </div>

        <div className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed text-left md:text-center">
          <p className="font-bold">
            Brandomedia is a creative agency based in Pondicherry India. We are
            a full-service studio offering strategy, design & video production
            across all platforms.
          </p>

          <p>
            Brandomedia has helped more than 100 businesses to get top-quality
            Video production and digital marketing services worldwide. Our
            digital marketing company been helping businesses for more than 10
            years and offering the best video and digital marketing services to
            make their business more profitable.
          </p>

          <p>
            Our digital marketing company can design and execute digital
            marketing strategies for various platforms like Facebook, Twitter,
            Instagram, Pinterest, YouTube and more.
          </p>

          <p>
            Brandomedia is a certified digital marketing company with more than
            10 team members having great experience in providing digital
            marketing and video production services. If you are a business, and
            want to know how digital marketing can help your business to grow
            then we can offer you a digital marketing consulting at very
            affordable charges.
          </p>
        </div>

        <div className="mt-16 mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
            There are three responses to a piece of work
          </h3>
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
            - yes, no, and WOW!
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Wow is the one we aim for&quot;
          </h2>
        </div>

        <Link href="/contact#contact-form">
          <button className="bg-white text-black border border-black px-10 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
            HIRE US !
          </button>
        </Link>
      </div>
    </section>
  );
}
