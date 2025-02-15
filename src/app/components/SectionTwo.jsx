export default function SectionTwo() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16">
      {/* Left & Right Sections */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
        {/* Left Side - Centered List (More Compact) */}
        <div className="md:w-1/2 flex flex-col justify-center h-auto py-6 md:pr-8 w-full">
          <ul className="space-y-4 text-base sm:text-lg font-medium text-gray-900">
            {[
              "Internationalization",
              "Software Translation",
              "Software Engineering",
              "User Acceptance Testing",
              "Functional Testing",
              "Localization Testing",
              "Bug Fixing",
            ].map((item, index) => (
              <li
                key={index}
                className={`flex justify-between items-center w-full border-b border-gray-300 pb-2 ${
                  item === "Internationalization" ? "bg-purple-100 text-purple-700 font-semibold py-3" : ""
                }`}
              >
                <span>{item}</span>
                <span className="text-primary-600">&#10148;</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Paragraph + Image */}
        <div className="md:w-1/2 space-y-5 w-full text-center md:text-left">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Preparing your software for localization, ensuring it can support
            multiple languages and cultural norms without engineering changes.
          </p>
          <img
            src="/images/globe.png"
            alt="Localization Process"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Full-Width Paragraph Below */}
      <div className="w-full mt-10 text-center md:text-left">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Additionally, we are equipped to produce all necessary documentation,
          roadmaps, and auxiliary tools needed for developing software from the
          ground up. Our team is also skilled in enhancing existing software,
          adapting it within your framework for any language desired.
        </p>
      </div>
    </section>
  );
}
