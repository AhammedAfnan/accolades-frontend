import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="block hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-4 w-auto max-w-full"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12 text-2xl relative">
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                Services
                <ChevronDown className="ml-1 w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                Sectors
                <ChevronDown className="ml-1 w-5 h-5" />
              </button>
            </div>
            <Link
              href=""
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Our Process
            </Link>
            <Link
              href=""
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Technology
            </Link>
            <Link
              href=""
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href=""
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-black rounded-md text-black transition-colors duration-200"
            >
              Contact
            </Link>
            <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                EN
                <ChevronDown className="ml-1 w-5 h-5" />
              </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
