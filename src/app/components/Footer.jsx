import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 container mx-auto">
      <div className="w-full mx-auto px-6 lg:px-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column A */}
            <div>
              <img
                src="/images/logo.png"
                alt="DeskHive Logo"
                className="h-6 w-auto mb-4 mx-auto md:mx-0"
              />
              <ul className="space-y-2 text-[14px] leading-[16.41px] text-[#5E555C]">
                <li className="text-[18px] leading-[21.09px] font-[Roberto-Regular]">
                  <Link href="#" className="font-[Roberto-Bold]">Quick Links</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Our Process</Link>
                </li>
                <li>
                  <Link href="#">Technology</Link>
                </li>
                <li>
                  <Link href="#">Industries</Link>
                </li>
              </ul>
            </div>

            {/* Column B */}
            <div>
              <ul className="space-y-2 text-[14px] leading-[16.41px] text-[#5E555C]">
                <li className="text-[18px] leading-[21.09px] font-[Roberto-Regular]">
                  <Link href="#" className="font-[Roberto-Bold]">Services</Link>
                </li>
                <li>
                  <Link href="#">Translation Services</Link>
                </li>
                <li>
                  <Link href="#">Software Localization & Testing</Link>
                </li>
                <li>
                  <Link href="#">Desktop Publishing Services</Link>
                </li>
                <li>
                  <Link href="#">Training E-learning Services</Link>
                </li>
                <li>
                  <Link href="#">Website Localization Services</Link>
                </li>
                <li>
                  <Link href="#">Multimedia Services</Link>
                </li>
                <li>
                  <Link href="#">Multicultural Marketing Services</Link>
                </li>
                <li>
                  <Link href="#">Call Center Support Services</Link>
                </li>
                <li>
                  <Link href="#">Interpretation Services</Link>
                </li>
                <li>
                  <Link href="#">Legal Services</Link>
                </li>
              </ul>
            </div>

            {/* Column C */}
            <div>
              <ul className="space-y-2 text-[14px] leading-[16.41px] text-[#5E555C]">
                <li className="text-[18px] leading-[21.09px] font-[Roberto-Regular]">
                  <Link href="#" className="font-[Roberto-Bold]">Industries</Link>
                </li>
                <li>
                  <Link href="#">E Commerce Retail</Link>
                </li>
                <li>
                  <Link href="#">Life Sciences</Link>
                </li>
                <li>
                  <Link href="#">Legal</Link>
                </li>
                <li>
                  <Link href="#">Multimedia Entertainment</Link>
                </li>
                <li>
                  <Link href="#">Banking Finance</Link>
                </li>
                <li>
                  <Link href="#">Advertising, Marketing PR</Link>
                </li>
                <li>
                  <Link href="#">Government</Link>
                </li>
                <li>
                  <Link href="#">Hardware, Software Technology</Link>
                </li>
                <li>
                  <Link href="#">Energy and Mining</Link>
                </li>
                <li>
                  <Link href="#">Travel Hospitality</Link>
                </li>
                <li>
                  <Link href="#">Industrial Manufacturing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/images/map.png"
              alt="Footer Image"
              className="w-[567px] h-[333px]"
            />
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href=""
              className="border border-[#0C7479] p-[10px] rounded-full"
            >
              <img
                src="/images/icon.svg"
                alt="Whatsapp"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href=""
              className="border border-[#0C7479] p-[10px] rounded-full"
            >
              <img
                src="/images/facebook.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </Link>
            <Link
              href=""
              className="border border-[#0C7479] p-[10px] rounded-full"
            >
              <img
                src="/images/insta.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </Link>
          </div>

          <div className="text-[#5E555C] font-[Inter-Regular] text-[12px] leading-[14.52px]">
            <span>Copyright © 2024 <span className="text-[#0C7479]">Transfective</span> All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
