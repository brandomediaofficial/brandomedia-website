
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Boost from "@/components/Boost";
import CallToAction from "@/components/CallToAction";
import VideoProduction from "@/components/VideoProduction";
import DigitalMarketing from "@/components/DigitalMarketing";
import BrandingServices from "@/components/BrandingServices";
import Portfolio from "@/components/Portfolio";
import ThriveBanner from "@/components/ThriveBanner";
import Testimonials from "@/components/Testimonials";
import WebDesignServices from "@/components/WebDesignServices";
import ClientLogos from "@/components/ClientLogos";
import StartProjectForm from "@/components/StartProjectForm";
import WaitingBanner from "@/components/WaitingBanner";
import LocalMarketing from "@/components/LocalMarketing";
import MapSection from "@/components/MapSection";
import AgencyBenefits from "@/components/AgencyBenefits";
import HiringDetails from "@/components/HiringDetails";

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
      <StartProjectForm />
      <ThriveBanner />
      <AgencyBenefits />
      <HiringDetails />
      <WaitingBanner />
      <LocalMarketing />
      <MapSection />
    </div>
  );
}
