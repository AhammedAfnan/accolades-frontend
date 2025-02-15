export default function SectionThree() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Left Side - Reduced Width Image */}
        <div className="md:w-2/5 w-full">
          <img
            src="/images/image1.png"
            alt="Software Localization"
            className="w-full h-auto max-h-[400px] rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-3/5 w-full space-y-4 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            The Importance of Software Localization
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            In an era where digital boundaries are continually expanding, the 
            demand for software localization services has surged. The ubiquity 
            of the internet enables companies to engage with a global audience, 
            necessitating adaptations of products and services to cater to 
            diverse regional and linguistic preferences.
          </p>
        </div>
      </div>

      {/* Full-Width Rectangular Image with Centered Text */}
      <div className="relative mt-10">
        <img
          src="/images/image2.png"
          alt="Software Localization Banner"
          className="w-screen h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h2 className="text-white text-2xl sm:text-2xl font-semibold">
            Our Proven Localization Methodology
          </h2>
        </div>
      </div>
    </section>
  );
}
