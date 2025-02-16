export default function HeroSection() {
  return (
    <>
      {/* Hero Section - Now in a Container */}
      <section className="w-full bg-hero bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
          {/* First Section: Text Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Properly Aligned Text */}
            <div className="w-full md:w-1/2 space-y-5">
              <h1 className="text-[40px] sm:text-4xl font-[Outfit-Bold] leading-[36px] text-[#2A2E40]">
                Software Localization & Testing
              </h1>
              <h3 className="text-[20px] sm:text-xl font-medium font-[Outfit-Bold] text-[#2A2E40] leading-[36px]">
                Ensuring Excellence in Software Localization
              </h3>
              <p className="text-[16px] font-[Outfit-Regular] sm:text-lg text-[#2A2E40] leading-[24.96px]">
                At Transfective, we recognize the critical importance of software
                localization in today’s global market. As organizations strive to
                tailor their software for various linguistic and cultural
                landscapes, a meticulous approach is required to ensure platforms
                are both linguistically accurate and culturally resonant. Our
                process encompasses every stage of localization—from identifying
                and extracting localizable elements to re-engineering and
                rigorously testing multiple language versions. We are committed to
                integrating quality at every phase, utilizing industry best
                practices and cutting-edge technology to deliver exceptional
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Now in a Container */}
      <div className="mt-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-[28px] sm:text-3xl font-[Outfit-Regular] text-[#121212] leading-[35.28px]">
            Software Localization Explained
          </h2>
          <p className="mt-4 text-[16px] sm:text-lg font-[Inter-Regular] text-[#575757] leading-[24.96px]">
            Software localization involves adapting software to meet the
            linguistic, cultural, and legal norms of a target locale. This process
            goes beyond mere translation; it includes modifying graphics, layouts,
            and formatting to align with local legal standards, data compliance,
            device preferences, and prevailing technology trends. At Transfective,
            we provide a comprehensive suite of software localization services
            tailored to global markets. Our offerings include:
          </p>
        </div>
      </div>
    </>
  );
}
