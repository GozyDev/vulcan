"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-[100px] shadow-[inset_0_0_5px_rgb(225,225,225,0.05)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Social icons */}
        <div className="flex space-x-6">
          <Link
            href="https://x.com/Gozy_Dev"
            target="_blank"
            className="bg-[#0F0F0F] shadow-[inset_0_0_10px_rgb(225,225,225,0.05)] p-3 rounded-lg hover:scale-105 transition"
          >
            <FaXTwitter className="w-12 h-12" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="bg-[#0F0F0F] shadow-[inset_0_0_10px_rgb(225,225,225,0.05)]  p-3 rounded-lg hover:scale-105 transition"
          >
            <FaInstagram className="w-12 h-12 " />
          </Link>
          <Link
            href="https://www.linkedin.com/in/henrygozy/"
            target="_blank"
            className="bg-[#0F0F0F] shadow-[inset_0_0_10px_rgb(225,225,225,0.05)]  p-3 rounded-lg  hover:scale-105 transition"
          >
            <FaLinkedin className="w-12 h-12 " />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex space-x-3 lg:space-x-5 text-gray-800 font-medium text-sm lg:text-lg">
          <Link
            href="/"
            className="text-[#969696] hover:text-[#FF9452]  text-md"
          >
            Home
          </Link>
          <Link
            href="/Features"
            className="text-[#969696] hover:text-[#FF9452] text-md"
          >
            Features
          </Link>
          <Link
            href="/About"
            className="text-[#969696] hover:text-[#FF9452] text-md"
          >
            About Us
          </Link>
          <Link
            href="/Pricing"
            className="text-[#969696] hover:text-[#FF9452] text-md"
          >
            Pricing
          </Link>
        </nav>

        {/* Logo */}
        <div className="">
          <img src="/vulcan.png" alt="" />
        </div>

        <p className="text-[#969696] text-md">
          2025 Boldshift All right reserved.
        </p>
      </div>
    </footer>
  );
}
