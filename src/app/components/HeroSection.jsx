export default function HeroSection() {
    return (
      <section className="px-8 md:px-16 lg:px-24 py-16">
        {/* First Section: Text + Image */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Software Localization & Testing
            </h1>
            <h3 className="text-xl font-medium text-gray-700">
              Ensuring Excellence in Software Localization
            </h3>
            <p className="mt-4 text-lg text-gray-600">
            At Transfective, we recognize the critical importance of software localization in today’s global market. As organizations strive to tailor their software for various linguistic and cultural landscapes, a meticulous approach is required to ensure platforms are both linguistically accurate and culturally resonant. Our process encompasses every stage of localization—from identifying and extracting localizable elements to re-engineering and rigorously testing multiple language versions. We are committed to integrating quality at every phase, utilizing industry best practices and cutting-edge technology to deliver exceptional results.
          </p>
          </div>
  
          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/hero.jpeg"
              alt="Software Localization"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
  
        {/* Second Section: Heading + Paragraph */}
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-gray-900">
            Software Localization Explained
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Software localization involves adapting software to meet the linguistic, cultural, and legal norms of a target locale. This process goes beyond mere translation; it includes modifying graphics, layouts, and formatting to align with local legal standards, data compliance, device preferences, and prevailing technology trends. At Transfective, we provide a comprehensive suite of software localization services tailored to global markets. Our offerings include:
          </p>
        </div>
      </section>
    );
  }
  