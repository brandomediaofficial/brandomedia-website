import React from "react";

export default function AboutValues() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Brandomedia: Our Values, Our Driving Force
        </h2>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center md:text-left">
          Brandomedia was born from a passion to make a difference in the
          digital marketing landscape. Fueled by a spirit of innovation,
          we&apos;ve grown into a team of passionate individuals, all united by
          a core set of values. These values are not just words, they are the
          driving force behind everything we do.
        </p>

        <h3 className="text-xl font-bold mb-8 text-gray-800">
          Our Values in Action:
        </h3>

        <ul className="space-y-6 text-gray-700">
          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Boundless Creativity:</strong>{" "}
              We believe in pushing boundaries and exploring fresh ideas.
              We&apos;re not afraid to think outside the box and develop
              innovative strategies that will make your brand stand out.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">
                Always Evolving & Connected:
              </strong>{" "}
              The digital landscape changes faster than ever. We stay ahead of
              the curve through continuous learning and a finger on the pulse of
              the latest trends. This ensures your campaigns are not only
              creative but strategically effective.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Lifelong Learners:</strong>{" "}
              We&apos;re a curious bunch, always seeking new knowledge and
              refining our skills. This ensures we&apos;re equipped with the
              latest tools and strategies to deliver exceptional results.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Insatiably Ambitious:</strong>{" "}
              We share a relentless drive for success, for both ourselves and
              our clients. We set high goals and work tirelessly, together, to
              achieve them.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-gray-500 mt-1">•</span>
            <div>
              <strong className="text-gray-900">Leaving Your Mark:</strong>{" "}
              We&apos;re passionate about creating impactful work that goes
              beyond the ordinary. We craft digital marketing campaigns designed
              to make a lasting impression and propel your brand forward.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
