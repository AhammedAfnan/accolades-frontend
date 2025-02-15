export default function SectionThree() {
    return (
      <section className="px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src="/images/image1.png"
              alt="Software Localization"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Right Side - Heading + Paragraph */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              The Importance of Software Localization
            </h2>
            <p className="text-gray-700 text-lg">
              In an era where digital boundaries are continually expanding, the demand for software localization services has surged. The ubiquity of the internet enables companies to engage with a global audience, necessitating adaptations of products and services to cater to diverse regional and linguistic preferences. Effective software localization transcends mere translation; it involves a comprehensive adaptation of user interfaces, documentation, manuals, audiovisual content, and software code across multiple languages. To maintain the integrity and context of translated content, our localization experts employ advanced technological tools, ensuring consistency and accuracy.
            </p>
          </div>
        </div>
  
        {/* Full-Width Image */}
        <div className="mt-12">
          <img
            src="/images/image2.png"
            alt="Software Localization Banner"
            className="w-full h-1/5"
          />
        </div>
      </section>
    );
  }
  