import Image from "next/image";

export default function AgencyBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Side - Abstract Blue Wave */}
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&h=1000&fit=crop"
              alt="Digital Marketing Abstract"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#090565] mb-4">
                How Hiring a Digital Marketing Agency Can Help Your Business
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                To assist you in making the most money possible, the digital marketing services in Pondicherry provide consultations to answer all of your digital marketing questions. The following are just a few of the numerous advantages of using the services provided by digital marketing agencies:
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>A better position in search results</li>
              <li>Quick sales</li>
              <li>Managing your reputation</li>
              <li>Increased traffic with less conversion costs</li>
              <li>Creation of email lists</li>
              <li>Strategies Employed by Digital Marketing Agencies to Reach a Larger Audience</li>
            </ul>

            <div>
              <h3 className="text-lg font-bold text-[#090565] mb-3">
                Here are a few of the most popular methods and approaches employed by web marketers:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                <li>Making a schedule for editorial releases</li>
                <li>Producing timely and relevant material assistance in expanding the contributor base</li>
                <li>Boosting the substance Paying close attention to details and exercising critical thinking</li>
                <li>Growing the customer base</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#090565] mb-3">
                Price Paid for Experts in Digital Marketing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Although the attention increase and click-through-rate (CTR) methodologies are commonly used to compute the charge for digital marketing services, it starts at Rs. 20,000 and goes up from there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
