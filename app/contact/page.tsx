import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Brandomedia",
  description:
    "Get in touch with Brandomedia in Pondicherry. Call or visit us for your digital marketing and web development needs.",
};

export default function Contact() {
  return <ContactClient />;
}
