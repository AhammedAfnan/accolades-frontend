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
        "Simply translating text is not enough. Our localization strategy is crafted for specific locales and languages, employing specialized industry resources and advanced technology. We support diverse resource file formats and seamlessly integrate with version control systems and code repositories to enable efficient, automated file handling. Additionally, our visual localization tools offer translators and reviewers critical context via live screens or screenshots, ensuring greater accuracy and relevance.",
    },
    {
      image: "/images/image5.jpeg",
      title: "Testing",
      description:
        "The final step in our methodology is comprehensive testing. No software localization project is deemed complete without ensuring that the software and mobile apps perform flawlessly across different languages, operating systems, browsers, channels, and devices. Our testing protocols are designed to prevent costly delays and avoid potential flaws. We offer an array of testing services, including functional, linguistic, layout/UI design, user experience (UX), user acceptance testing (UAT), internationalization (i18n), accessibility (A11Y), and automated testing.",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              {/* Left Side - Image (Responsive) */}
              <div className="w-full md:w-[312px] flex-shrink-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[233px] object-cover shadow-md rounded-lg"
                />
              </div>

              {/* Right Side - Heading + Paragraph */}
              <div className="flex-1">
                <h2 className="text-[24px] font-[Outfit-Regular] text-[#121212] leading-[30.24px]">
                  {section.title}
                </h2>
                <p className="text-[#7C7C7C] font-[Inter-Regular] text-[16px] leading-[24.96px]">
                  {section.description}
                </p>
              </div>
            </div>
          ))}

          {/* Final Paragraph at Bottom */}
          <div className="text-center mx-auto pt-12">
            <p className="text-[20px] text-[#5E555C] font-[Inter-Regular] border border-green-300 rounded-full px-6 py-3">
              Through these rigorous methodologies, Transfective guarantees that
              your software localization projects are executed with precision,
              ensuring your products resonate with and are accessible to users
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
