import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="w-full mx-auto px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column A */}
          <div>
            <img
              src="/images/logo.png"
              alt="DeskHive Logo"
              className="h-6 w-auto mb-4 mx-auto md:mx-0"
            />
            <ul className="space-y-2 text-lg">
              <li><Link href="#">Quick Links</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Our Process</Link></li>
              <li><Link href="#">Technology</Link></li>
              <li><Link href="#">Industries</Link></li>
            </ul>
          </div>

          {/* Column B */}
          <div>
            <ul className="space-y-2 text-lg">
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Translation Services</Link></li>
              <li><Link href="#">Software Localization & Testing</Link></li>
              <li><Link href="#">Desktop Publishing Services</Link></li>
              <li><Link href="#">Training E-learning Services</Link></li>
              <li><Link href="#">Website Localization Services</Link></li>
              <li><Link href="#">Multimedia Services</Link></li>
              <li><Link href="#">Multicultural Marketing Services</Link></li>
              <li><Link href="#">Call Center Support Services</Link></li>
              <li><Link href="#">Interpretation Services</Link></li>
              <li><Link href="#">Legal Services</Link></li>
            </ul>
          </div>

          {/* Column C */}
          <div>
            <ul className="space-y-2 text-lg">
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">E Commerce Retail</Link></li>
              <li><Link href="#">Life Sciences</Link></li>
              <li><Link href="#">Legal</Link></li>
              <li><Link href="#">Multimedia Entertainment</Link></li>
              <li><Link href="#">Banking Finance</Link></li>
              <li><Link href="#">Advertising, Marketing PR</Link></li>
              <li><Link href="#">Government</Link></li>
              <li><Link href="#">Hardware, Software Technology</Link></li>
              <li><Link href="#">Energy and Mining</Link></li>
              <li><Link href="#">Travel Hospitality</Link></li>
              <li><Link href="#">Industrial Manufacturing</Link></li>
            </ul>
          </div>

          {/* Column E - Image */}
          <div className="flex justify-center items-center">
            <img src="/images/map.png" alt="Footer Image" className="w-full max-w-xs" />
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://facebook.com" className="hover:text-blue-500 border rounded-full p-2">
              <Facebook size={20} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-blue-400 border rounded-full p-2">
              <Linkedin size={20} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-pink-500 border rounded-full p-2">
              <Instagram size={20} />
            </Link>
          </div>

          <div className="text-gray-500 text-lg">
            <span>© 2024 Transfective All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
