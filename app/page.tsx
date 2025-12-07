import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Boost from "@/components/Boost";
import CallToAction from "@/components/CallToAction";
import dynamic from "next/dynamic";

const VideoProduction = dynamic(() => import("@/components/VideoProduction"));
const DigitalMarketing = dynamic(() => import("@/components/DigitalMarketing"));
const BrandingServices = dynamic(() => import("@/components/BrandingServices"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const ThriveBanner = dynamic(() => import("@/components/ThriveBanner"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const WebDesignServices = dynamic(
  () => import("@/components/WebDesignServices")
);
const ClientLogos = dynamic(() => import("@/components/ClientLogos"));
const ContactUsForm = dynamic(() => import("@/components/ContactUsForm"));
const WaitingBanner = dynamic(() => import("@/components/WaitingBanner"));
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Pondicherry | Brandomedia",
  description:
    "Brandomedia is a leading digital marketing agency in Pondicherry offering SEO, SMM, Branding, and Web Design services to grow your business.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickLinks />
      <Services />
      <Boost />
      <CallToAction />
      <Portfolio />
      <DigitalMarketing />

      <VideoProduction />
      <BrandingServices />
      <WebDesignServices />
      <Testimonials />
      <ClientLogos />
      <ContactUsForm />
      <ThriveBanner />
      <WaitingBanner />
    </div>
  );
}
