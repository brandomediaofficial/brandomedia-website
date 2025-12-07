export default function ServicesDifferentiators() {
  return (
    <section className="w-full py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              What sets
              <br />
              Brandomedia
              <br />
              apart?
            </h2>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Get to Know Us</h3>
            <ul className="space-y-6 text-gray-200">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Expert Collaboration:</strong>{" "}
                  Our team of 20+ specialists works together seamlessly,
                  leveraging each other&apos;s strengths to create a holistic
                  digital marketing approach for your business.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Data-Driven Decisions:</strong>{" "}
                  We don&apos;t just guess - we use data insights to inform
                  every step of your campaign, ensuring maximum impact.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Proven Track Record:</strong>{" "}
                  We have a history of success in helping businesses achieve
                  their goals. Let us show you the Brandomedia difference!
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
