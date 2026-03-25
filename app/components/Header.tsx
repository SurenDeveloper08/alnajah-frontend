"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "@/app/assets/logo.png"
// Assume these are also converted to Next.js components
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["HOME", "SERVICES", "ABOUT US", "GALLERY", "CONTACT US"];

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* DESKTOP HEADER ROW */}
        <div
          className="hidden lg:grid items-center py-3 lg:py-4"
          style={{ gridTemplateColumns: "20% 30% 20% 30%" }}
        >
          {/* Logo - Using Next.js Image */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo} // Ensure logo is in /public folder
                alt="AL NAJAH"
                width={160}
                height={64}
                className="h-14 xl:h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Search Input */}
          <div className="flex items-center">
            <SearchInput />
          </div>

          {/* Empty Column */}
          <div></div>

          {/* Contacts */}
          <div className="flex justify-end gap-8 text-gray-600 font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap">
            <a href="tel:+97167486990" className="flex items-center gap-2 hover:text-primary transition-colors">
              <PhoneIcon fontSize="small" /> +971 6 7486990
            </a>
            <a href="mailto:alnajahpp@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <EmailIcon fontSize="small" /> alnajahpp@gmail.com
            </a>
          </div>
        </div>

        {/* MOBILE HEADER ROW */}
        <div className="lg:hidden flex items-center justify-between py-4 border-b">
          <Link href="/">
            <Image
              src={Logo}
              alt="AL NAJAH"
              width={36}
              height={36}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-primary p-2"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* NAV ROW */}
        <nav className="w-full">
          <div className="hidden lg:flex justify-between items-center mt-2">
            {/* Dropdown Categories */}
            <div className="relative">
              <Dropdown />
            </div>

            {/* Desktop Menu */}
            <ul className="flex gap-10 text-lg xl:text-xl text-gray-700">
              {menuItems.map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <span
                      className="inline-block font-medium transition-all duration-300 ease-out group-hover:text-primary group-hover:scale-[1.06]"
                      style={{ textShadow: "0 0 0.6px currentColor" }}
                    >
                      {item}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="lg:hidden w-full py-4 space-y-4 bg-white animate-in fade-in slide-in-from-top-4">
              <div className="relative w-full px-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-full pl-5 pr-12 py-2 focus:ring-2 focus:ring-primary outline-none text-sm"
                />
                <SearchIcon
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"
                  fontSize="small"
                />
              </div>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="block px-4 py-2 border-b text-sm hover:bg-gray-50 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;