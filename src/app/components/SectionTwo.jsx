export default function SectionTwo() {
    return (
      <section className="px-6 lg:px-12 py-12">
        {/* Left & Right Sections in a Row */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Left Side - List */}
          <div className="md:w-1/2">
            <ul className="space-y-2 text-lg font-medium text-gray-800">
              <li>Internationalization &gt;</li>
              <li>Software Translation &gt;</li>
              <li>Software Engineering &gt;</li>
              <li>User Acceptance Testing &gt;</li>
              <li>Functional Testing &gt;</li>
              <li>Localization Testing &gt;</li>
              <li>Bug Fixing &gt;</li>
            </ul>
          </div>
  
          {/* Right Side - Small Paragraph + Image */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 text-lg">
              Preparing your software for localization, ensuring it can support
              multiple languages and cultural norms without engineering changes.
            </p>
            <img
              src="/images/globe.png"
              alt="Localization Process"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
  
        {/* Full-Width Paragraph Below (Spanning Both Sides) */}
        <div className="w-full mt-8">
          <p className="text-gray-700 text-lg">
            Additionally, we are equipped to produce all necessary documentation,
            roadmaps, and auxiliary tools needed for developing software from the
            ground up. Our team is also skilled in enhancing existing software,
            adapting it within your framework for any language desired.
          </p>
        </div>
      </section>
    );
  }
  