export default function CallToAction() {
  return (
    <section className="bg-[#090565] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            5 Mins Call Back
          </h2>
          <p className="text-gray-300 text-sm">
            Get a quick consultation with our experts
          </p>
        </div>
        
        <button className="bg-white text-[#090565] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors uppercase">
          Contact Us
        </button>
      </div>
    </section>
  );
}
