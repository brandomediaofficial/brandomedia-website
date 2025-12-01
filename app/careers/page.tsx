export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Join the Brandomedia Team<br />
              We're Looking for Top Talent
            </h1>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Join a growing team of talented professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Work on exciting and challenging projects.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Have a positive impact on the world.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Be part of a company that values diversity and inclusion.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Receive competitive compensation and benefits.</span>
              </li>
            </ul>

            <button className="border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-[#00008B] transition-colors font-medium">
              Click here to view our open positions
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              THE BRANDOMEDIA
            </h2>
            <h3 className="text-2xl font-bold text-black mb-6">
              Opportunity
            </h3>
            <p className="text-black leading-relaxed">
              We're looking for people who are results-oriented, who are always looking for ways to improve, and who are always willing to take on new challenges.
            </p>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

       {/*CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Soar with Brandomedia and make your mark on the world.
            </h2>
            <p className="text-black leading-relaxed">
              When you join Brandomedia, you'll be learning from the best in the business. Our team of experts is passionate about digital marketing, and we're always looking for ways to improve our skills and knowledge. We offer hands-on training and endless opportunities for growth, so you can be sure that you'll be well-equipped to succeed in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            AVAILABLE POSITIONS
          </h2>

          <div className="space-y-4">
            {['Social Media Manager', 'Wordpress Developer', 'Graphic Designer', 'Digital Marketing Coordinator'].map((position, index) => (
              <div 
                key={index}
                className="bg-black text-white p-6 rounded flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{position}</h3>
                <button className="bg-white text-black px-8 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
}
