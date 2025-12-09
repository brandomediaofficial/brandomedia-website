export default function Testimonials() {
  const testimonials = [
    {
      company: "Travel Site",
      text: "Brandomedia developed a high-quality hotel booking app for us, setting a new standard for user experience. Their work has been instrumental in our franchise's success, and their team is incredibly supportive and effective.",
    },
    {
      company: "Property Site",
      text: "We needed a robust property selling platform, and Brandomedia delivered perfectly with advanced features. Their development and marketing strategies are effective, and the team genuinely cares about our success.",
    },
    {
      company: "Hotel Site",
      text: "Brandomedia designed and built our hotel booking website, which has significantly boosted our business. Their digital marketing strategies are effective, and the team is friendly and responsive.",
    },
  ];

  return (
    <section className="bg-black py-16 text-white border-t border-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
          Our Testimonial
        </h2>

        <p className="text-center text-sm md:text-base text-gray-300 max-w-4xl mx-auto mb-12">
          At Brandomedia, we take great satisfaction in providing our clients
          with outstanding digital marketing solutions that provide measurable
          results. We create customised plans with a team of talented experts
          and a dedication to quality to support companies in thriving in the
          digital sphere. See what our pleased customers have to say about their
          interactions with us in our testimonial section rather than simply
          taking our word for it.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg flex flex-col items-center text-center h-full"
            >
              <h3 className="text-xl font-bold mb-6">{item.company}</h3>
              <p className="text-sm leading-relaxed mb-8 flex-grow">
                {item.text}
              </p>
              <div className="mt-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white opacity-80"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
