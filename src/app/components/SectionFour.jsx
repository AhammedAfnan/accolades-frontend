export default function SectionFour() {
    const sections = [
      {
        image: "/images/image3.png",
        title: "Globalization",
        description:
          "Our approach begins with globalization—the foundational process of preparing software for localization into any language, locale, and culture. Strategic adjustments and continuous planning throughout the software development cycle are pivotal. Implementing best practices in globalization not only accelerates market readiness but also significantly curtails costs, mitigates risks, and alleviates the burden on internal teams.",
      },
      {
        image: "/images/image4.png",
        title: "Localization",
        description:
          "Our team provides expert linguistic support in multiple languages, maintaining consistency and accuracy across all platforms.",
      },
      {
        image: "/images/image5.jpeg",
        title: "Testing",
        description:
          "The final step in our methodology is comprehensive testing. No software localization project is deemed complete without ensuring that the software and mobile apps perform flawlessly across different languages, operating systems, browsers, channels, and devices. Our testing protocols are designed to prevent costly delays and avoid potential flaws. We offer an array of testing services, including functional, linguistic, layout/UI design, user experience (UX), user acceptance testing (UAT), internationalization (i18n), accessibility (A11Y), and automated testing.",
      },
    ];
  
    return (
      <section className="px-6 lg:px-12 py-12 space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-1/2 h-auto rounded-lg shadow-md"
              />
            </div>
  
            {/* Right Side - Heading + Paragraph */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="text-gray-700 text-lg">{section.description}</p>
            </div>
          </div>
        ))}
  
        {/* Final Paragraph */}
        <div className="text-center max-w-3xl mx-auto pt-12">
          <p className="text-lg text-gray-700 font-medium">
            Through these rigorous methodologies, Transfective guarantees that
            your software localization projects are executed with precision,
            ensuring your products resonate with and are accessible to users
            worldwide.
          </p>
        </div>
      </section>
    );
  }
  