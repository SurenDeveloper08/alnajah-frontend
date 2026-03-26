"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = ["HOME", "SERVICES", "ABOUT US", "GALLERY", "CONTACT US", "MORE"];

  const SocialIcon = ({ d, viewBox = "0 0 24 24" }: { d: string, viewBox?: string }) => (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#004D5A] hover:border-white transition-all duration-300"
    >
      <svg width="18" height="18" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </a>
  );

  return (
    <footer className="w-full">
      {/* 1. Main Cyan Section */}
      <div className="bg-[#33C2D6] px-6 py-16 lg:py-20 text-white">
        {/* Constrain width here for large screens */}
        <div className="max-w-6xl mx-auto">

          {/* Header Navigation: Right Aligned */}
          <nav className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-10 mb-16 text-[10px] lg:text-xs font-bold tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link key={link} href={`/${link.toLowerCase().replace(" ", "-")}`} className="hover:opacity-70 transition-opacity">
                {link}
              </Link>
            ))}
          </nav>

          {/* 30/70 Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-center">
            {/* White Logo Side (30%) */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                <Image
                  src="/assets/logo-white.png"
                  alt="Al Najah Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Brand Philosophy Side (70%) */}
            <div className="text-center">
              <h2 className="text-3xl lg:text-5xl font-serif italic mb-8">
                Why Choose us?
              </h2>
              <div className="space-y-6 text-[11px] lg:text-base leading-relaxed font-light opacity-95">
                <p>
                  Choosing the right partner for your printing and packaging needs is about more than just ink on paper—it&apos;s
                  about bringing your brand&apos;s physical identity to life. We combine structural integrity with high-end aesthetics
                  to ensure your products don&apos;t just sit on a shelf—they stand out.
                </p>
                <p>
                  Your packaging is the first &quot;handshake&quot; your customer has with your product. We are dedicated to making
                  sure that moment is memorable, professional, and perfectly aligned with your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Deep Teal Bar */}
      <div className="bg-[#004D5A] py-8 px-6 text-white border-t border-white/10">
        {/* Constrain width here as well to keep icons aligned with logo above */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-4">
            <SocialIcon d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" />
            <SocialIcon d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            <SocialIcon d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z" />
            <SocialIcon d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] lg:text-xs tracking-[0.2em] opacity-60 uppercase">
              2026 Al Najah. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;