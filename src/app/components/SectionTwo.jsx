export default function SectionTwo() {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <section>
          {/* Left & Right Sections */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
            {/* Left Side - Centered List (More Compact) */}
            <div className="md:w-1/2 w-full flex flex-col justify-center h-auto py-6 md:pr-8 min-w-[320px]">
              <ul className="space-y-4 text-[Inter-Bold] sm:text-lg font-medium text-gray-900">
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
                    className={`flex justify-between items-center w-full border-b border-gray-300 border-l-6 border-l-[#A408CB] pb-2 ${
                      item === "Internationalization"
                        ? "bg-[#F6D1FF] p-6 text-[28px] leading-[32.2px] text-[#A408CB] font-[Inter-Bold]"
                        : "text-[#020202] p-6 text-center font-[Inter-Medium] text-[24px] leading-[27.6px]"
                    }`}
                  >
                    <span>{item}</span>
                    <img src="/images/arrow.svg" alt="" className="w-5 h-5" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Paragraph + Image */}
            <div className="md:w-1/2 w-full text-center md:text-left space-y-5">
              <p className="text-[#5E555C] text-[16px] font-[Inter-Medium] leading-[19.36px]">
                Preparing your software for localization, ensuring it can support multiple languages and cultural norms without engineering changes.
              </p>
              <img
                src="/images/globe.png"
                alt="Localization Process"
                className="w-full h-[389px] shadow-lg object-cover rounded-[40px]"
              />
            </div>
          </div>

          {/* Full-Width Paragraph Below */}
          <div className="w-full mt-10 text-center md:text-left">
            <p className="text-[#5E555C] font-[Inter-Regular] text-[16px] sm:text-lg leading-[24.96px]">
              Additionally, we are equipped to produce all necessary documentation, roadmaps, and auxiliary tools needed for developing software from the ground up. Our team is also skilled in enhancing existing software, adapting it within your framework for any language desired.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
