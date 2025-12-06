"use client";

import ContactUsForm from "@/components/ContactUsForm";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Contact Info Section */}
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl px-6 md:px-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Connect with Brandomedia
            <br />
            Your Digital Partner in Pondicherry
          </h1>
          <p className="text-lg mb-8 leading-relaxed max-w-2xl text-gray-200">
            Get in touch with Brandomedia today and let's start a conversation
            about how our digital marketing expertise can elevate your business
            in Pondicherry. Whether you have questions, ideas, or are ready to
            embark on a digital journey, we're here to assist you. Reach out and
            discover how we can help you succeed online.
          </p>
          <button
            onClick={handleScrollToContact}
            className="border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-blue-900 transition-colors font-bold uppercase tracking-wide"
          >
            Connect with us
          </button>
        </div>
      </section>

      {/* CTA Text Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00008B] mb-6">
            Contact us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Reach out to Brandomedia and start a conversation today. We're here
            to transform your digital presence and drive success for your
            Pondicherry-based business. Let's collaborate and make your digital
            dreams a reality.
          </p>
        </div>
      </section>

      {/* Beach Banner Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/pondicherry-cover.jpg")', // Pondicherry/Beach placeholder
          }}
        />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />

        <div className="relative z-10 text-center text-white px-6">
          <p className="text-4xl md:text-6xl font-bold mb-2">"Pondicherry"</p>
          <p className="text-2xl md:text-3xl font-semibold">Lets Go Digital</p>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00008B] text-center mb-12">
            Pondicherry Branch
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4 text-black" strokeWidth={1.5} />
              <p className="text-black font-medium">+91-9600290814</p>
              <p className="text-black font-medium">+91-8825874052</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-black" strokeWidth={1.5} />
              <p className="text-black font-medium">
                No 1, First Floor, Nanbargal
              </p>
              <p className="text-black font-medium">Nagar, Reddiarpalayam,</p>
              <p className="text-black font-medium">Puducherry, 605010</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 mb-4 text-black" strokeWidth={1.5} />
              <p className="text-black font-medium">info@brandomedia.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form">
        <ContactUsForm />
      </div>

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7449!2d79.8242!3d11.9416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzI5LjgiTiA3OcKwNDknMjcuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brandomedia Pondicherry Location"
        />
      </section>
    </main>
  );
}
