"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm w-full mt-[24px]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (Visible on all screen sizes) */}
          <div className="flex-shrink-0">
            <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-[22px] w-[296px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation (Hidden on mobile & tablets) */}
          <div className="hidden lg:flex items-center space-x-6 font-[Outfit-Regular] text-[14px]">
            <div className="relative">
              <button className="flex items-center text-white bg-[#119391] rounded-[10px] py-[5px] px-[10px] transition">
                Services
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-white bg-[#119391] rounded-[10px] py-[5px] px-[10px] transition">
                Sectors
              </button>
            </div>
            <Link href="" className="text-[#5E555C] transition">Our Process</Link>
            <Link href="" className="text-[#5E555C] transition">Technology</Link>
            <Link href="" className="text-[#5E555C] transition">Blog</Link>
            <Link href="" className="ml-4 inline-flex items-center justify-center border bg-[#119391] text-white px-3 py-1 rounded-[10px]">
              Contact
            </Link>
            <button className="flex items-center text-[#5E555C] border-2 px-3 py-1 rounded-[10px]">
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
