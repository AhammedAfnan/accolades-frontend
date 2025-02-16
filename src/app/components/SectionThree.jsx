export default function SectionThree() {
  return (
      <>
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Main Content Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Left Side - Responsive Image */}
          <div className="md:w-2/5 w-full min-w-[300px]">
            <img
              src="/images/image1.png"
              alt="Software Localization"
              className="w-full h-[369px] max-h-[400px] shadow-md object-cover"
            />
          </div>

          {/* Right Side - Responsive Text Content */}
          <div className="md:w-3/5 w-full space-y-4 text-center md:text-left font-[Outfit-Regular]">
            <h2 className="text-[22px] sm:text-2xl md:text-[24px] text-[#121212] leading-[30.24px]">
              The Importance of Software Localization
            </h2>
            <p className="text-[#7C7C7C] text-[15px] sm:text-lg md:text-[16px] leading-[24.96px]">
              In an era where digital boundaries are continually expanding,
              the demand for software localization services has surged. The
              ubiquity of the internet enables companies to engage with a
              global audience, necessitating adaptations of products and
              services to cater to diverse regional and linguistic
              preferences.
            </p>
          </div>
        </div>
      </section>

    </div>
      
      <div className="relative mt-10 w-full">
        <img
          src="/images/image2.png"
          alt="Software Localization Banner"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] text-center">
            <h1 className="text-white text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[Outfit-Regular] leading-[1.2]">
              Our Proven Localization Methodology
            </h1>
          </div>
        </div>
      </div>
      </>
  );
}
