export default function SectionFive() {
  const services = [
    {
      icon: "/images/image6.svg",
      title: "Decades of Expertise",
      description:
        "Leverage our vast array of specialized resources and over 14 years of experience in managing intricate training programs.",
    },
    {
      icon: "/images/image7.svg",
      title: "Comprehensive Discovery",
      description:
        "Our dedicated specialists are committed to thoroughly understanding your business objectives, pinpointing precise opportunities to enhance content delivery.",
    },
    {
      icon: "/images/image8.svg",
      title: "Streamlined Solutions",
      description:
        "Eliminate the complexities of your localization efforts with our comprehensive, integrated service offerings and hybrid production models.",
    },
    {
      icon: "/images/image9.svg",
      title: "Unmatched Quality",
      description:
        "Avoid the pitfalls of cross-functional miscommunications and enhance overall consistency with our unified approach to content management.",
    },
    {
      icon: "/images/image10.svg",
      title: "Reliable Timeliness",
      description:
        "Depend on our proven track record of 99% on-time delivery to ensure your training materials are prepared exactly when you need them.",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-12 text-center container mx-auto bg-[#FFF9FE]">
      {/* Section Heading */}
      <h2 className="text-[32px] font-[Outfit-Regular] text-[#119391] mb-8 leading-[36.8px] text-center">
        Why Choose Transfective ?
      </h2>

      {/* Grid Layout for Cards (3-2 Layout) */}
      <div className="grid gap-6 max-w-5xl mx-auto p-[14px]">
        {/* First row (3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-[0px_4px_40px_0px_#F2D2F0] rounded-[20px]">
              {/* SVG Icon */}
              <div className="w-20 h-20 mx-auto mb-4">
                <img src={service.icon} alt={service.title} className="w-[160px]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#747474] font-[Inter-Medium] text-[16px] leading-[19.36px] text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Second row (centered 2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mx-auto w-full lg:w-2/3">
          {services.slice(3).map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-[0px_4px_40px_0px_#F2D2F0] rounded-[20px]">
              {/* SVG Icon */}
              <div className="w-20 h-20 mx-auto mb-4">
                <img src={service.icon} alt={service.title} className="w-[160px]" />
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-[Quicksand-Bold] leading-[30px] text-center text-[#121212] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#747474] font-[Inter-Medium] text-[16px] leading-[19.36px] text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
