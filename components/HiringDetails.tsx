import Image from "next/image";

export default function HiringDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#090565] mb-4">
              Details to Think About Before Hiring Digital Marketing Experts
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              There are several things to think about before utilizing Pondicherry&apos;s digital marketing services. If you consider these things, you can be sure that you are choosing the best choice for your organization and yourself. A few of these factors are as follows:
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Make sure you communicate your goals and objectives to the digital marketing agency you employ so they can assist you reach them. Notify them of your goals so that they may employ the appropriate tactics, whether those goals are to raise brand recognition or website traffic.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Our agency offers a wide range of services:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Verify the digital marketing agency&apos;s reputation and areas of experience before hiring them. Is the agency well-known, for instance, for search engine optimization/digital marketing or internet marketing? Find out as much as you can about them by reading up on them or just asking. Find a company that focuses on helping people just like you reach your goals and dreams.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">Credibility, work history, and expertise:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get to know the organization you want to work with by reading up on them. Verify their standing in the industry. Inquire about their previous work, case studies, and references. You can learn more if you contact their former customers. A good question to ask is how long they&apos;ve been in the industry and how qualified their employees are.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">Familiarity with the field:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Research the agency&apos;s track record of success in your field. They may already know your target market and competitors if they are well-versed in your sector.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm">Techniques and methods:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You should find out what the company&apos;s marketing strategy is. If you want your online presence to survive, you must use white-hat SEO and other marketing techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Image Side - Colorful Mural */}
          <div className="relative h-[600px] md:h-[800px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/hiring_details.webp"
              alt="Creative Mural Art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
