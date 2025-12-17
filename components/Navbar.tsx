"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md">
      {/* Blue Top Section */}
      <div className="bg-black text-white px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/navlogo3.png"
                alt="Brandomedia Logo"
                width={150}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
          </div>
          {/* Phone and Button */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="font-semibold text-sm md:text-base">
                +91-7548880026
              </span>
            </div>
            <a
              href="https://wa.me/917548880026?text=Hi,%20I%20would%20like%20to%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white border border-white px-3 py-1.5 md:px-5 md:py-2 rounded hover:bg-white hover:text-black transition-colors font-semibold text-xs md:text-sm whitespace-nowrap"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* White Navigation Section */}
      <div className="bg-white text-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-10 py-2">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                pathname === "/"
                  ? "font-bold text-[black]"
                  : "font-bold text-gray-800 hover:text-[black]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm transition-colors ${
                pathname === "/services"
                  ? "font-bold text-[black]"
                  : "font-bold text-gray-800 hover:text-[black]"
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-bold transition-colors ${
                pathname === "/portfolio"
                  ? "text-[black]"
                  : "text-gray-800 hover:text-[black]"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`text-sm font-bold transition-colors ${
                pathname === "/about"
                  ? "text-[black]"
                  : "text-gray-800 hover:text-[black]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/careers"
              className={`text-sm font-bold transition-colors ${
                pathname === "/careers"
                  ? "text-[black]"
                  : "text-gray-800 hover:text-[black]"
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-bold transition-colors ${
                pathname === "/contact"
                  ? "text-[black]"
                  : "text-gray-800 hover:text-[black]"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-bold transition-colors ${
                pathname === "/pricing"
                  ? "text-[black]"
                  : "text-gray-800 hover:text-[black]"
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between py-4">
            <span className="text-sm font-semibold">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`text-sm transition-colors ${
                    pathname === "/"
                      ? "font-bold text-[black]"
                      : "font-bold text-gray-800 hover:text-[black]"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`text-sm transition-colors ${
                    pathname === "/services"
                      ? "font-bold text-[black]"
                      : "font-bold text-gray-800 hover:text-[black]"
                  }`}
                >
                  Our Services
                </Link>
                <Link
                  href="/portfolio"
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/portfolio"
                      ? "text-[black]"
                      : "text-gray-800 hover:text-[black]"
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/about"
                      ? "text-[black]"
                      : "text-gray-800 hover:text-[black]"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/careers"
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/careers"
                      ? "text-[black]"
                      : "text-gray-800 hover:text-[black]"
                  }`}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/contact"
                      ? "text-[black]"
                      : "text-gray-800 hover:text-[black]"
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/pricing"
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/pricing"
                      ? "text-[black]"
                      : "text-gray-800 hover:text-[black]"
                  }`}
                >
                  Pricing
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
