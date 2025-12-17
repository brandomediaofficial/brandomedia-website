import Link from "next/link";
import Image from "next/image";
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
      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            {/* Column 1: Brand & CTA */}
            <div className="space-y-6">
              <div className="inline-block">
                <Image
                  src="/images/logo/footlogo1.png"
                  alt="Brandomedia Logo"
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>

              <p className="text-gray-600 leading-relaxed">
                Brandomedia is a leading digital marketing agency based in
                Pondicherry, specializing in driving online success for
                businesses. With our innovative strategies, creative solutions,
                and unwavering commitment, we help businesses thrive in the
                digital landscape. Trust us to elevate your brand, engage your
                audience, and achieve remarkable results.
              </p>

              <Link href="/contact">
                <button className="bg-[black] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-colors">
                  SAY HELLO!
                </button>
              </Link>
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
                <a
                  href="https://www.facebook.com/profile.php?id=61584224957944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[black]"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.youtube.com/@brandomediain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[black]"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/brandomedia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[black]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/110203653/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[black]"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-semibold text-gray-700 text-left md:text-right w-full md:w-auto">
                <Link href="/privacy-policy" className="hover:text-[black]">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-[black]">
                  Terms and Conditions
                </Link>
                <Link href="#" className="hover:text-[black]">
                  Refund Policy
                </Link>
                <Link href="#" className="hover:text-[black]">
                  Cancellation Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Copyright Bar */}
      <div className="bg-black text-white py-4 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Brandomedia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
