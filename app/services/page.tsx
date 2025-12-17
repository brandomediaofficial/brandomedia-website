import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Monitor,
  Globe,
  ShoppingCart,
  Layout,
  Database,
  Server,
  Search,
  BarChart,
  Layers,
  Settings,
  Shield,
  Smartphone,
  Zap,
  MousePointerClick,
  Network,
  MonitorSmartphone,
  Atom,
  FileCode,
  Palette,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Brandomedia | Web Development & Digital Marketing",
  description:
    "Professional web development, digital marketing, and branding services in Pondicherry. Elevate your business with Brandomedia.",
};

interface Project {
  title: string;
  desc: string;
  image: string;
  reverse: boolean;
  link: string;
  subtitle?: string;
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section (Image 1) */}
      <section className="bg-black text-white py-12 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Elevate Your Business with Exceptional Website Development in
              Pondicherry
            </h1>
            <p className="text-sm text-gray-100 mb-6 leading-relaxed max-w-xl">
              Experience expert website development in Pondicherry that delivers
              stunning designs and seamless functionality to drive your business
              forward.
            </p>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-colors uppercase tracking-wide text-sm">
                Get Free Quote
              </button>
            </Link>
          </div>
          <div className="relative">
            {/* Placeholder for the lady image - using a professional stock photo */}
            <div className="relative z-10 w-full max-w-md mx-auto h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
                alt="Web Developer"
                fill
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
            {/* Decorative elements from the design */}
            <div className="absolute -top-10 -right-10 text-yellow-400 opacity-20">
              <Settings size={80} />
            </div>
            <div className="absolute bottom-10 -left-10 text-gray-400 opacity-20">
              <Shield size={60} />
            </div>
          </div>
        </div>
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-600 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Intro Section (Image 0) */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Boost Your Online Presence with
            <br />
            Professional Web Development Services
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            At Brandomedia, we offer a huge variety of web development services.
            We work closely with our customers to create high performing and
            secure custom websites. Our expert developers have lots of
            experience to understand your project requirements and deliver a
            project that meets your needs. We will be happy in assisting you to
            offer a strong online presence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Globe, title: "Corporate Website" },
              { icon: Layout, title: "React Website" },
              { icon: ShoppingCart, title: "E-Commerce Website" },
              { icon: Smartphone, title: "Shopify Website" },
              { icon: Database, title: "CMS Website" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 mb-4 flex items-center justify-center border-2 border-slate-900 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase (Image 4) */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center">
          {/* 3D Carousel Simulation */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
            {/* Center Item */}
            <div className="absolute z-30 w-[60%] md:w-[40%] h-[200px] md:h-[300px] transition-transform duration-500 hover:scale-105 cursor-pointer shadow-2xl rounded-lg overflow-hidden border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2574&auto=format&fit=crop"
                alt="Project Center"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Item */}
            <div className="absolute z-20 w-[50%] md:w-[35%] h-[180px] md:h-[260px] -translate-x-[60%] scale-90 opacity-80 shadow-xl rounded-lg overflow-hidden border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2670&auto=format&fit=crop"
                alt="Project Left"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Item */}
            <div className="absolute z-20 w-[50%] md:w-[35%] h-[180px] md:h-[260px] translate-x-[60%] scale-90 opacity-80 shadow-xl rounded-lg overflow-hidden border-2 border-white">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Project Right"
                fill
                className="object-cover"
              />
            </div>

            {/* Far Left Item */}
            <div className="absolute z-10 w-[40%] md:w-[30%] h-[150px] md:h-[220px] -translate-x-[110%] scale-75 opacity-60 shadow-lg rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop"
                alt="Mobile UI Far Left"
                fill
                className="object-cover"
              />
            </div>

            {/* Far Right Item */}
            <div className="absolute z-10 w-[40%] md:w-[30%] h-[150px] md:h-[220px] translate-x-[110%] scale-75 opacity-60 shadow-lg rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                alt="Project Far Right"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid (Images 2 & 3) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              {
                icon: Layout,
                title: "Web Designing",
                desc: "We provide compelling, creative, user and SEO-friendly website designs.",
              },
              {
                icon: Globe,
                title: "Domain Registration",
                desc: "We can do it instantly in a cost-effective way and set your business ready to go online.",
              },
              {
                icon: Settings,
                title: "Website Maintenance",
                desc: "We nurture your business online and makes your business grow faster",
              },
              {
                icon: Server,
                title: "Web Hosting",
                desc: "It offers the facilities required for them to create a site and makes it accessible on the internet.",
              },
              {
                icon: Monitor,
                title: "Website Development",
                desc: "We offer best-in-class website development at an affordable Price.",
              },
              {
                icon: Database,
                title: "CMS Development",
                desc: "We provide inclusive CMS development services to give you ease of content publication.",
              },
              {
                icon: Server,
                title: "Vercel Hosting",
                desc: "We offer affordable and tailored Vercel hosting services to all websites.",
              },
              {
                icon: BarChart,
                title: "Digital Marketing",
                desc: "We ensure your growth in the ever-changing online market and set your business online.",
              },
              {
                icon: Database,
                title: "Database",
                desc: "We provide affordable database services to store your data somewhere in the clouds.",
              },
              {
                icon: Layers,
                title: "Portal Development",
                desc: "We also offer portal development services project information on site from various sources.",
              },
              {
                icon: Search,
                title: "Search Engine optimization",
                desc: "SEO is called the backbone of the business. With professional SEO executives and business analysts.",
              },
              {
                icon: ShoppingCart,
                title: "Ecommerce development",
                desc: "This digital era has made everyone to adapt the digital world of business.",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="mb-4 text-slate-900">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tools Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-16 text-slate-900 uppercase">
            Our Tools
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { icon: FileCode, label: "HTML5" },
              { icon: Palette, label: "CSS3" },
              { icon: Atom, label: "React" },
              { icon: Server, label: "Node JS" },
              { icon: Database, label: "SQL" },
            ].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
              >
                <tool.icon
                  size={64}
                  strokeWidth={1.5}
                  className="text-slate-800"
                />
                <span className="font-bold text-slate-700">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 uppercase">
              Our Process
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Along with making sure that your website is universally compatible
              and user-friendly, an exclusive expert team of designers and
              developers are you assigned to ensure that not only the plan goes
              according to a timeline but also that your approval is taken at
              every step. We will work closely with you to make sure that your
              website is just as had dreamt and better. Keeping in mind that the
              main purpose of a website is to increase your visibility, your
              website is made search-engine friendly. Your brand identity and
              core value are prominently flown into the screens and pages of
              your website with ease.
            </p>
            <p className="text-slate-600 max-w-4xl mx-auto mt-4 leading-relaxed">
              Our process ranges from discussions, approvals, and feedback, to
              incorporating your vision for your website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Dynamic & Mobile Ready Website",
                desc: "We provide compelling, creative, Majority of the users visiting your website are most likely using a mobile device. So, if you insist on dynamic, accelerated performance, mobile-friendly website frameworks.designs.",
              },
              {
                icon: MousePointerClick,
                title: "Convenient Navigation",
                desc: "We help website visitors navigate efficiently within the website. By designing the perfect homepage with efficient site navigation capabilities, we ensure simple and easy accessibility to core pages of the site, thus reducing bounce rates.",
              },
              {
                icon: Zap,
                title: "Performance Ready",
                desc: "With a brilliant website live, we configure strategic forms enabled with Analytics and Heatmap tools to sense the User-Journey and make relevant changes. Speed is of an utmost component of the test during this process.",
              },
              {
                icon: BarChart,
                title: "Analytics and the aftermath",
                desc: "We offer Clickstream + In-page analytics reporting which allows you to keep track of our work to develop and promote your website based on various performance indicators. With our analytics in place, we get better at the art of making your website that works for you over a period of time.",
              },
              {
                icon: MonitorSmartphone,
                title: "Web Browsers Compatibility",
                desc: "Your website can be accessed through multiple devices, mobile as well as desktops and there are multiple web browsers that have distinct methods to visually deliver your web content to users. We design and integrate your web design to be compatible across different browsers in all operating systems.",
              },
              {
                icon: Network,
                title: "Sitemap and Architecture",
                desc: "A sitemap is a file that consists of all web pages of your website that is accessible to Search Engine web crawlers. Along with strong, engaging and unique content for your website users which offers a fresh perspective regarding the subject matter. This allows search engines and users to easily access all content of your website.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-6 text-slate-800">
                  <item.icon size={48} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Banner */}
      <section className="bg-black py-8 text-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
          Portfolio
        </h2>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col gap-24">
          {[
            {
              title: "Travel Stays",
              desc: "Travel Stays is a hotel booking website that offers a wide range of hotel options to its users. The website is designed to be user-friendly and easy to navigate, with a focus on providing a seamless booking experience.",
              image: "../images/port1.jpeg",
              reverse: true,
              link: "https://travelstays.world",
            },
            {
              title: "Sadhisha Worldwide",
              desc: "Sadhisha Worldwide is a premier property and land selling platform committed to helping clients find their perfect plot. The website offers a seamless browsing experience for diverse real estate listings, ensuring transparency and ease in every transaction.",
              image: "../images/port2.jpeg",
              reverse: false,
              link: "https://sadhishaworldwide.in",
            },
            {
              title: "Starlite hotel",
              desc: "A luxury hotel website designed to showcase premium accommodations and amenities. We integrated a seamless booking engine and immersive visual galleries to enhance guest engagement and drive direct reservations.",
              image: "../images/port3.jpeg",
              reverse: true,
              link: "https://starliteresorts.in/",
            },
            {
              title: "Medical",
              desc: "A comprehensive digital platform for a healthcare provider, featuring patient-centric design, appointment scheduling, and doctor profiles. Our solution ensures accessibility and builds trust with prospective patients.",
              image: "../images/port4.jpeg",
              reverse: false,
              link: "https://rscarefoundation.in/",
            },
          ].map((project: Project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                project.reverse ? "" : ""
              }`}
            >
              {/* Image Column */}
              <div
                className={`relative ${
                  project.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative z-10 bg-slate-100 rounded-xl p-8 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} Website`}
                    className="rounded-lg shadow-xl w-full max-w-md"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`${project.reverse ? "md:order-1" : "md:order-2"}`}
              >
                <h2 className="text-3xl font-bold mb-4 text-slate-900 uppercase">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4 tracking-wider">
                    {project.subtitle}
                  </h3>
                )}
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>
                <Link
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : "_self"}
                >
                  <button className="bg-[#333] text-white px-8 py-3 rounded-none font-medium hover:bg-black transition-colors">
                    View Site
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agency Info Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black uppercase">
            PONDICHERRY-BASED WEB DESIGN AGENCY
          </h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            At Brandomedia, we have assembled a talented team of digital
            strategists, designers, developers, marketers, communications
            specialists, project managers and business developers to work in a
            collaborative manner on our client projects. We build on each
            other&apos;s expertise, working together in teams to generate great
            outcomes for projects.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Phone size={48} className="text-slate-900" strokeWidth={1.5} />
              </div>
              <a href="tel:+917548880026">
                <button className="bg-white text-black border border-black px-8 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors uppercase tracking-wide">
                  CALL US NOW
                </button>
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <MessageSquare
                  size={48}
                  className="text-slate-900"
                  strokeWidth={1.5}
                />
              </div>
              <a
                href="https://wa.me/917548880026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-black border border-black px-8 py-3 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors uppercase tracking-wide">
                  CHAT WITH US
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Section (Images 3, 0, 1) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl space-y-16 text-slate-700">
          {/* Best Internet Website Designers */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Best Internet Website Designers in Pondicherry
            </h3>
            <p className="leading-relaxed mb-6">
              Creating a website requires skill and creativity. Our expert
              designers in Pondicherry craft strong, user-friendly websites to
              enhance your online presence. We understand your audience and
              market demand, offering complete design and SEO services to grow
              your business.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Why Choose Professional Web Designers?
            </h3>
            <p className="leading-relaxed mb-6">
              Professional web designers transform your digital presence.
              Here&apos;s why they are essential:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>User Experience:</strong> We create easy-to-navigate
                layouts that keep visitors engaged.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Our designs are built to rank
                higher on search engines.
              </li>
              <li>
                <strong>First Impressions:</strong> Visually appealing
                interfaces build immediate trust and credibility.
              </li>
              <li>
                <strong>Creative Solutions:</strong> We blend creativity with
                functionality for unique results.
              </li>
              <li>
                <strong>Business Growth:</strong> Strategically built websites
                attract customers and boost conversions.
              </li>
              <li>
                <strong>Mobile Responsiveness:</strong> We ensure your site
                looks perfect on all devices.
              </li>
              <li>
                <strong>Latest Trends:</strong> We stay updated with modern
                design technologies.
              </li>
            </ul>
          </div>

          {/* Responsibilities & Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Responsibilities & Key Skills
            </h3>
            <p className="leading-relaxed mb-6">
              Our designers create aesthetically pleasing, functional websites
              tailored to your brand. We handle layouts, color schemes, fonts,
              and multimedia integration, ensuring mobile optimization and
              functionality.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Key Skills We Possess
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Proficiency in HTML, CSS, JavaScript, and CMS.</li>
              <li>Expertise in UI/UX design principles.</li>
              <li>Strong communication and collaboration.</li>
              <li>In-depth SEO knowledge.</li>
              <li>Responsive and mobile-friendly coding.</li>
              <li>Rigorous testing and debugging.</li>
              <li>Creative problem-solving.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Choosing the Right Designer
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Portfolio:</strong> Check our proven track record.
              </li>
              <li>
                <strong>Budget:</strong> We offer competitive pricing for
                quality work.
              </li>
              <li>
                <strong>Communication:</strong> We ensure clear collaboration.
              </li>
              <li>
                <strong>Process:</strong> Transparent timelines and milestones.
              </li>
              <li>
                <strong>Expertise:</strong> Technical skills for secure,
                optimized sites.
              </li>
            </ul>
          </div>

          {/* Services & Cost */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Services We Offer
            </h3>
            <p className="leading-relaxed mb-6">
              We provide comprehensive web solutions, from static sites to
              complex e-commerce platforms.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6 mb-8 text-slate-800 font-medium">
              <li>Java, HTML, CSS Development</li>
              <li>Website Design & SEO</li>
              <li>Wix & CMS Design</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Website Maintenance</li>
              <li>Content & Copywriting</li>
              <li>Google Analytics Integration</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Website Development Costs
            </h3>
            <p className="leading-relaxed">
              Pricing depends on your requirements. Dynamic websites start from
              <strong> Rs 15,000</strong>, while static websites start from
              <strong> Rs 8,000</strong>. Factors like custom UI/UX, advanced
              SEO, and additional features may affect the final cost.
            </p>
          </div>
        </div>
      </section>

      {/* Grow Your Business Section (Image 2) */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Grow Your Business Online.
            <br />
            Pondicherry Web Design Experts
          </h2>
          <h3 className="text-xl font-semibold mb-8 text-slate-800">
            No Corner Left Behind: Web Design Solutions for All of Pondicherry.
          </h3>
          <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Unleash your Pondicherry brand&apos;s potential. We craft stunning
            websites and digital strategies that resonate with local audiences.
            Get online, get noticed, get growing. Web design that tells your
            story. Serving all of Pondicherry, we create beautiful,
            user-friendly websites that convert visitors into customers.
            Let&apos;s build something amazing together. Your one-stop shop for
            a thriving online presence. From Auroville to Mahe, our Pondicherry
            web design experts deliver results-driven websites that elevate your
            brand.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-gray-100 mb-8 text-lg">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white border border-white px-6 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors shadow-lg">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
