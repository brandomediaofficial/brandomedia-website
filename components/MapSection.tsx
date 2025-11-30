export default function MapSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] bg-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.287789417684!2d79.8122!3d11.9601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53617000000001%3A0x0!2sBrandomedia%20Pondicherry!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Brandomedia Location"
      ></iframe>
    </section>
  );
}
