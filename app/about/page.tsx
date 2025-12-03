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
