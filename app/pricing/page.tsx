import React from "react";
import PricingHero from "@/components/PricingHero";
import PricingTable from "@/components/PricingTable";
import ContactUsForm from "@/components/ContactUsForm";

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
