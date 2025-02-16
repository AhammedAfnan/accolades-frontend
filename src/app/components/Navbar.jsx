"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full mt-[24px]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="block hover:opacity-80 transition-opacity duration-200">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-[22px] w-[296px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-[Outfit-Regular] text-[14px]">
            <div className="relative">
              <button className="flex items-center text-white bg-[#119391] rounded-[10px] py-[5px] px-[10px] transition">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-white bg-[#119391] rounded-[10px] py-[5px] px-[10px] transition">
                Sectors
                <ChevronDown className="ml-1 w-4 h-4" />
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
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-700 absolute right-4 top-6 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-white shadow-md p-4 space-y-4 md:hidden transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <Link href="" className="block text-gray-700 transition">Our Process</Link>
          <Link href="" className="block text-gray-700 transition">Technology</Link>
          <Link href="" className="block text-gray-700 transition">Blog</Link>
          <button className="flex items-center text-gray-700 w-full justify-between py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            Services
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center text-gray-700 w-full justify-between py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            Sectors
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="" className="block text-center text-white bg-green-700 rounded-md py-2 hover:bg-green-800 transition">
            Contact
          </Link>
          <button className="flex items-center justify-center text-gray-700 border-2 px-3 py-1 w-full rounded-md hover:border-green-700 transition">
            EN
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
