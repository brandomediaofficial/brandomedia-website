import React from "react";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import ContactUsForm from "@/components/ContactUsForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Brandomedia",
  description:
    "Transparent pricing for our web development and digital marketing packages. Choose the plan that fits your business goals.",
};

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <PricingHero />
      <PricingTable />
      <div id="contact-form">
        <ContactUsForm />
      </div>
    </main>
  );
}
