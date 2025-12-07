import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandomedia.com"),
  title: {
    default: "Brandomedia – Digital Marketing Agency",
    template: "%s | Brandomedia",
  },
  description:
    "Brandomedia offers digital marketing, branding, social media management, ads, and website development services to grow your business.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.brandomedia.com",
    title: "Brandomedia – Digital Marketing Agency",
    description:
      "Brandomedia offers digital marketing, branding, social media management, ads, and website development services to grow your business.",
    siteName: "Brandomedia",
    images: [
      {
        url: "/images/hero-face.webp",
        width: 1200,
        height: 630,
        alt: "Brandomedia Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandomedia – Digital Marketing Agency",
    description:
      "Brandomedia offers digital marketing, branding, social media management, ads, and website development services to grow your business.",
    images: ["/images/hero-face.webp"],
  },
  alternates: {
    canonical: "./",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brandomedia",
  url: "https://www.brandomedia.com",
  logo: "https://www.brandomedia.com/images/globe.svg",
  description:
    "Brandomedia offers digital marketing, branding, social media management, ads, and website development services.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-1234567890",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
