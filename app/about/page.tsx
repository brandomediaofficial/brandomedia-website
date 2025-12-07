import React from "react";
import AboutVision from "@/components/AboutVision";
import AboutGrowth from "@/components/AboutGrowth";
import AboutDifferentiators from "@/components/AboutDifferentiators";
import AboutCTA from "@/components/AboutCTA";
import AboutMission from "@/components/AboutMission";
import AboutValues from "@/components/AboutValues";
import AboutSuccessStory from "@/components/AboutSuccessStory";
import AboutExpertsBanner from "@/components/AboutExpertsBanner";
import AboutCompanyOverview from "@/components/AboutCompanyOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Brandomedia",
  description:
    "Learn more about Brandomedia, our mission, vision, and the team driving digital success for businesses in Pondicherry and beyond.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutCTA />
      <AboutGrowth />
      <AboutDifferentiators />
      <AboutVision />
      <AboutMission />
      <AboutValues />
      <AboutSuccessStory />
      <AboutCompanyOverview />
      <AboutExpertsBanner />
    </div>
  );
}
