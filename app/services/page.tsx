import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesDifferentiators from "@/components/ServicesDifferentiators";
import ServicesMission from "@/components/ServicesMission";
import ServicesVision from "@/components/ServicesVision";
import ServicesValues from "@/components/ServicesValues";
import ServicesSuccessStory from "@/components/ServicesSuccessStory";
import ServicesAgencyInfo from "@/components/ServicesAgencyInfo";
import ServicesCTA from "@/components/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full">
      <ServicesHero />
      <ServicesIntro />
      <ServicesDifferentiators />
      <ServicesMission />
      <ServicesVision />
      <ServicesValues />
      <ServicesSuccessStory />
      <ServicesAgencyInfo />
      <ServicesCTA />
    </main>
  );
}
