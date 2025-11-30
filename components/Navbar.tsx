"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md">
      {/* Blue Top Section */}
      <div className="bg-[#090565] text-white px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="border-2 border-white rounded p-1 px-2">
              <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase font-sans">Brando</h1>
              <p className="text-[0.5rem] md:text-[0.6rem] text-center tracking-[0.3em] uppercase -mt-1">Media</p>
            </div>
          </div>
          
          {/* Phone and Button */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="font-semibold text-sm md:text-base">+91-7548880026</span>
            </div>
            <button className="bg-white text-[#090565] px-3 py-1.5 md:px-5 md:py-2 rounded hover:bg-gray-100 transition-colors font-semibold text-xs md:text-sm whitespace-nowrap">
              Request a Free Quote
            </button>
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
                  ? "font-bold text-[#090565]" 
                  : "font-bold text-gray-800 hover:text-[#090565]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/our-services" 
              className={`text-sm transition-colors ${
                pathname === "/our-services" 
                  ? "font-bold text-[#090565]" 
                  : "font-bold text-gray-800 hover:text-[#090565]"
              }`}
            >
              Our Services
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-sm font-bold transition-colors ${
                pathname === "/portfolio" 
                  ? "text-[#090565]" 
                  : "text-gray-800 hover:text-[#090565]"
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/our-roots" 
              className={`text-sm font-bold transition-colors ${
                pathname === "/our-roots" 
                  ? "text-[#090565]" 
                  : "text-gray-800 hover:text-[#090565]"
              }`}
            >
              About Us
            </Link>
           
            <Link 
              href="/careers" 
              className={`text-sm font-bold transition-colors ${
                pathname === "/careers" 
                  ? "text-[#090565]" 
                  : "text-gray-800 hover:text-[#090565]"
              }`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-bold transition-colors ${
                pathname === "/contact" 
                  ? "text-[#090565]" 
                  : "text-gray-800 hover:text-[#090565]"
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-bold transition-colors ${
                pathname === "/pricing" 
                  ? "text-[#090565]" 
                  : "text-gray-800 hover:text-[#090565]"
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
                      ? "font-bold text-[#090565]" 
                      : "font-bold text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/our-services" 
                  className={`text-sm transition-colors ${
                    pathname === "/our-services" 
                      ? "font-bold text-[#090565]" 
                      : "font-bold text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  Our Services
                </Link>
                <Link 
                  href="/portfolio" 
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/portfolio" 
                      ? "text-[#090565]" 
                      : "text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  Portfolio
                </Link>
                <Link 
                  href="/our-roots" 
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/our-roots" 
                      ? "text-[#090565]" 
                      : "text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  About Us
                </Link>
               
                <Link 
                  href="/careers" 
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/careers" 
                      ? "text-[#090565]" 
                      : "text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  Careers
                </Link>
                <Link 
                  href="/contact" 
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/contact" 
                      ? "text-[#090565]" 
                      : "text-gray-800 hover:text-[#090565]"
                  }`}
                >
                  Contact
                </Link>
                <Link 
                  href="/pricing" 
                  className={`text-sm font-bold transition-colors ${
                    pathname === "/pricing" 
                      ? "text-[#090565]" 
                      : "text-gray-800 hover:text-[#090565]"
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

