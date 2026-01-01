"use client";

import Image from "next/image";

export default function CareersClient() {
  const handleScrollToPositions = () => {
    const positionsSection = document.getElementById("available-positions");
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApply = (position: string) => {
    window.location.href = `mailto:contact@brandomedia.in?subject=Application for ${position}`;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Join the Brandomedia Team
              <br />
              We&apos;re Looking for Top Talent
            </h1>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Join a growing team of talented professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Work on exciting and challenging projects.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Have a positive impact on the world.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Be part of a company that values diversity and inclusion.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Receive competitive compensation and benefits.</span>
              </li>
            </ul>

            <button
              onClick={handleScrollToPositions}
              className="border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors font-medium"
            >
              Click here to view our open positions
            </button>
          </div>

          <div className="relative h-[300px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
              alt="Team collaboration"
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              THE BRANDOMEDIA
            </h2>
            <h3 className="text-2xl font-bold text-black mb-6">Opportunity</h3>
            <p className="text-black leading-relaxed">
              We&apos;re looking for people who are results-oriented, who are
              always looking for ways to improve, and who are always willing to
              take on new challenges.
            </p>
          </div>

          <div className="relative h-[300px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
              alt="Team working together"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/*CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
              alt="Team collaboration"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Soar with Brandomedia and make your mark on the world.
            </h2>
            <p className="text-black leading-relaxed">
              When you join Brandomedia, you&apos;ll be learning from the best
              in the business. Our team of experts is passionate about digital
              marketing, and we&apos;re always looking for ways to improve our
              skills and knowledge. We offer hands-on training and endless
              opportunities for growth, so you can be sure that you&apos;ll be
              well-equipped to succeed in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section id="available-positions" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            AVAILABLE POSITIONS
          </h2>

          <div className="space-y-4">
            {[
              "Social Media Manager",
              "Software Developer",
              "Graphic Designer",
              "Digital Marketing Coordinator",
            ].map((position, index) => (
              <div
                key={index}
                className="bg-black text-white p-6 rounded flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{position}</h3>
                <button
                  onClick={() => handleApply(position)}
                  className="bg-black text-white border border-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
