import Link from "next/link";
import { 
  FaCalendarAlt, 
  FaDollarSign, 
  FaChartLine, 
  FaGem, 
  FaChartBar, 
  FaDesktop, 
  FaHeart, 
  FaRobot, 
  FaRocket,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaBehance
} from "react-icons/fa";

export default function Footer() {
  const services = [
    { icon: <FaCalendarAlt />, name: "Lead Generation" },
    { icon: <FaDollarSign />, name: "Paid Media Marketing" },
    { icon: <FaChartLine />, name: "Search Engine Optimisation" },
    { icon: <FaGem />, name: "Creative Designing" },
    { icon: <FaChartBar />, name: "Performance Marketing" },
    { icon: <FaDesktop />, name: "Web Design & Development" },
    { icon: <FaHeart />, name: "Influencer Marketing" },
    { icon: <FaRobot />, name: "Google Ads Marketing" },
    { icon: <FaRocket />, name: "Creative Marketing" },
  ];

  return (
    <footer className="w-full bg-white text-gray-800 font-sans">
      {/* Services Strip */}
      <div className="bg-gray-100 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-semibold text-gray-700">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-[#6b46c1] text-lg">{service.icon}</span>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Top Text */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#090565] leading-tight">
              Thrive in Your Town: Digital Marketing for Local Businesses
              <br />
              Own Your City Online: Localized Digital Marketing Strategies
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The digital landscape is no longer a one-size-fits-all game. In today&apos;s hyper-connected world, customers crave authentic connections with local businesses. Here at Brandomedia, we help businesses own their city online with localized digital marketing strategies. We go beyond generic tactics, crafting campaigns that resonate with the unique heartbeat of your community.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            {/* Column 1: Brand & CTA */}
            <div className="space-y-6">
              <div className="border-2 border-[#090565] rounded-lg p-2 inline-block">
                <h3 className="text-2xl font-bold text-[#090565] tracking-widest uppercase">BRANDOMEDIA</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Brandomedia is a leading digital marketing agency based in Pondicherry, specializing in driving online success for businesses. With our innovative strategies, creative solutions, and unwavering commitment, we help businesses thrive in the digital landscape. Trust us to elevate your brand, engage your audience, and achieve remarkable results.
              </p>

              <button className="bg-[#090565] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-900 transition-colors">
                SAY HELLO!
              </button>
            </div>

            {/* Column 2: Hours & Addresses */}
            <div className="space-y-8">
              <div className="flex items-start gap-3">
                <FaClock className="text-xl mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Business Hours: 24/7 hours</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Pondicherry</h4>
                  <p className="text-gray-600">
                    No 12, illangoadigal street, Mudaliarpet, Puducherry, 605001
                  </p>
                </div>
              </div>

              <div className="pt-4 font-bold text-gray-800">
                Bangalore | Chennai | Pondicherry
              </div>
            </div>

            {/* Column 3: Contact & Links */}
            <div className="space-y-8 md:text-right flex flex-col items-start md:items-end">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <FaPhoneAlt className="text-xl" />
                <div className="text-left md:text-right font-bold text-lg">
                  <p>+91-7548880026</p>
                </div>
              </div>

              <div className="flex gap-4 text-2xl text-black">
                <a href="#" className="hover:text-[#090565]"><FaFacebook /></a>
                <a href="#" className="hover:text-[#090565]"><FaYoutube /></a>
                <a href="#" className="hover:text-[#090565]"><FaInstagram /></a>
                <a href="#" className="hover:text-[#090565]"><FaLinkedin /></a>
                <a href="#" className="hover:text-[#090565]"><FaBehance /></a>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-semibold text-gray-700 text-left md:text-right w-full md:w-auto">
                <Link href="#" className="hover:text-[#090565]">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#090565]">Terms and Conditions</Link>
                <Link href="#" className="hover:text-[#090565]">Refund Policy</Link>
                <Link href="#" className="hover:text-[#090565]">Cancellation Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black text-white py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Brandomedia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
