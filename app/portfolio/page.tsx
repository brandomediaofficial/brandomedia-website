import { Headset, MessageCircle, MessageSquare, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import port1 from "../../public/images/portfolio/port1.jpeg";
import port2 from "../../public/images/portfolio/port2.jpeg";
import port3 from "../../public/images/portfolio/port3.jpeg";
import port4 from "../../public/images/portfolio/port4.jpeg";

export const metadata: Metadata = {
  title: "Our Portfolio | Brandomedia",
  description:
    "Explore our portfolio of successful projects including web development, video production, and branding campaigns.",
};

export default function Portfolio() {
  console.log("Port1:", port1);
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder - Replace with actual image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2800&auto=format&fit=crop")',
            filter: "brightness(0.7)",
          }}
        />

        <div className="relative z-10 text-center text-white flex flex-col items-center">
          {/* Logo Placeholder */}
          <div className="w-20 h-20 md:w-32 md:h-32 border-4 border-white rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl md:text-4xl font-bold">B</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-[0.5em] uppercase mb-8">
            Portfolio
          </h1>

          <button className="border-2 border-white px-8 py-2 text-sm md:text-base tracking-widest hover:bg-white hover:text-black transition-colors uppercase">
            Explore
          </button>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
          Discover Our Diverse Range of Services in Our Portfolio
        </h2>
        <p className="text-black text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Our portfolio highlights our competence in providing complete,
          personalized solutions that empower brands and promote success in the
          digital arena.
        </p>
      </section>

      {/* Web Development Portfolio */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Web Development Portfolio
              </h2>
              <p className="text-lg md:text-xl font-semibold text-black mb-2">
                Your Website is the window of your business.
                <br />
                Keep it fresh, keep it exciting
              </p>
              <p className="text-black mt-4 font-medium">
                for more exciting Website
              </p>
              <p className="text-black font-bold text-xl mt-1">
                Swipe right &gt;&gt;
              </p>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory visible-scrollbar">
            {[
              {
                id: 1,
                image: port3,
                title: "E-Commerce Platform",
              },
              {
                id: 2,
                image: port4,
                title: "Corporate Website",
              },
              {
                id: 3,
                image: port2,
                title: "Design System",
              },
              {
                id: 4,
                image: port1,
                title: "Tech Blog",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="min-w-[85vw] md:min-w-[600px] snap-center flex-shrink-0"
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden aspect-[16/10] relative group">
                  {/* Laptop Mockup Placeholder */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={`Project ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Production Portfolio */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Video Production Portfolio
              </h2>
              <p className="text-lg font-medium text-black mb-2">
                There are three responses to a piece of Design
                <br />- yes, no, and WOW!
              </p>
              <p className="text-2xl md:text-3xl font-bold text-black mt-2">
                Wow is the one we aim for
              </p>

              <div className="mt-8">
                <p className="text-black font-medium">
                  for more exciting videos
                </p>
                <p className="text-black font-bold text-xl mt-1">
                  Swipe right &gt;&gt;
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory visible-scrollbar">
            {[
              {
                id: 1,
                image:
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
                title: "Brand Story",
                client: "Tech Corp",
              },
              {
                id: 2,
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
                title: "Product Launch",
                client: "Style Co",
              },
              {
                id: 3,
                image:
                  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
                title: "Event Coverage",
                client: "Global Summit",
              },
              {
                id: 4,
                image:
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
                title: "Documentary",
                client: "Nature Trust",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="min-w-[85vw] md:min-w-[500px] snap-center flex-shrink-0"
              >
                <div className="bg-black rounded-xl shadow-xl overflow-hidden aspect-video relative group cursor-pointer">
                  <Image
                    src={item.image}
                    alt={`Video Project ${item.title}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold truncate">
                      {item.title}
                    </p>
                    <p className="text-gray-300 text-sm">{item.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Agency Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 uppercase tracking-wide">
            Pondicherry Based Product Video & Photography Agency
          </h2>

          <p className="text-black text-sm md:text-base leading-relaxed mb-12 max-w-4xl mx-auto">
            For your potential customers, there is nothing more convincing than
            a professional product video. It might be daunting to make yet
            another investment, but adding one of our premium product videos to
            your product page will pay for itself in no time. Your conversion
            rates and customer engagement will go up, whilst consumer doubt and
            bounce rates will plummet. The final video will be optimized for
            maximum e-commerce conversion and kept to the recommended 1 to 2
            minutes. Just like all our services, we will reimburse you if you
            are not 100% satisfied!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            {/* Call Us Option */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <Headset className="w-16 h-16 text-black" strokeWidth={1.5} />
                <MessageCircle
                  className="w-8 h-8 text-black absolute -top-2 -right-4"
                  strokeWidth={1.5}
                />
              </div>

              <button className="bg-white text-black border-2 border-black px-10 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors uppercase">
                Call Us Now
              </button>
            </div>

            {/* Chat Option */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <MessageSquare
                  className="w-16 h-16 text-black"
                  strokeWidth={1.5}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-black">
                  ?
                </div>
              </div>

              <button className="bg-white text-black border-2 border-black px-10 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors uppercase">
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
