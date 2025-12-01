import ContactUsForm from "@/components/ContactUsForm";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Contact Info Section */}
       {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#4B0082] via-[#00008B] to-[#0000CD]"
          style={{
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with Brandomedia<br />
            Your Digital Partner in Pondicherry
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Get in touch with Brandomedia today and let's start a conversation about how our digital marketing expertise can elevate your business in Pondicherry. Whether you have questions, ideas, or are ready to embark on a digital journey, we're here to assist you. Reach out and discover how we can help you succeed online.
          </p>
          <button className="border-2 border-white px-10 py-3 rounded hover:bg-white hover:text-[#00008B] transition-colors font-semibold">
            Connect with us
          </button>
        </div>
      </section>
         {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop")',
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6">
          <div className="mt-12">
            <p className="text-4xl md:text-6xl font-bold">"Pondicherry"</p>
            <p className="text-2xl md:text-3xl font-semibold mt-2">Lets Go Digital</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00008B] text-center mb-12">
            Podicherry Branch
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
              <p className="text-black font-medium">No 1, First Floor, Nanbargal</p>
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
      <ContactUsForm />

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
