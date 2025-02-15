import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <img
              src="/images/logo.png"
              alt="DeskHive Logo"
              className="h-4 w-auto mb-4"
            />
            <ul className="space-y-2 text-black text-lg">
              <li>
                <Link href="#">Resources</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Customer Stories</Link>
              </li>
              <li>
                <Link href="#">Legal</Link>
              </li>
              <li>
                <Link href="#">Payment</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-black text-lg">
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Jobs</Link>
              </li>
              <li>
                <Link href="#">Hiring</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Tips and Tricks</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-black text-lg">
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons and Copyright Text in a flex container */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="hover:text-blue-500 border rounded-full p-2"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-blue-400 border rounded-full p-2"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-pink-500 border rounded-full p-2"
            >
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
