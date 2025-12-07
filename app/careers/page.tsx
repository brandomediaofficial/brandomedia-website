import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Brandomedia",
  description:
    "Join the Brandomedia team! We're hiring talented professionals for social media, development, and design roles in Pondicherry.",
};

export default function Careers() {
  return <CareersClient />;
}
