"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SearchInput from "./SearchInput"; // Ensure this is also "use client"
import Bgp from "@/app/assets/bg-patternx.png"
import Hero from "@/app/assets/hero-main.png"
import Machine from "@/app/assets/hero-machine.png"
import Logo from "@/app/assets/logo.png"

const LandingPage = () => {
  const navLinks = ["Home", "Services", "About Us", "Gallery", "Contact Us", "More"];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white font-sans select-none">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-cyan-600 z-[60] shadow-sm" />

      {/* 1. BACKGROUND PATTERN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Bgp}
          alt="background"
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      {/* 2. THE HAND - ANIMATED */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full xl:translate-x-16 translate-y-10 scale-110">
          <Image
            src={Hero}
            alt="Hero Hand"
            fill
            className="object-contain object-center lg:object-bottom"
          />
        </div>
      </motion.div>

      {/* 4. HEADER SECTION */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-50 w-full px-6 py-4 lg:px-16 lg:py-6"
      >
        {/* ROW 1: Logo, Search, Contacts */}
        <div className="hidden lg:grid grid-cols-12 items-center w-full mb-4">
          <div className="col-span-2">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={70}
                height={70}
                className="brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />
            </Link>
          </div>
          
          <div className="col-span-3 relative pl-4">
            <SearchInput />
          </div>

          <div className="col-span-3" />

          <div className="col-span-4 text-right">
            <div className="flex justify-end gap-8 text-gray-600 font-normal text-sm lg:text-base xl:text-lg whitespace-nowrap">
              <a href="tel:+97167486990" className="flex items-center gap-2 hover:text-primary transition-colors">
                <PhoneIcon fontSize="small" /> +971 6 7486990
              </a>
              <a href="mailto:alnajahpp@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <EmailIcon fontSize="small" /> alnajahpp@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ROW 2: Browse Button & Nav */}
        <div className="flex flex-col items-start gap-2">
          <button className="bg-cyan-600 text-white px-4 py-1.5 text-[10px] lg:text-xs font-bold flex items-center gap-2 shadow-sm min-w-fit hover:bg-cyan-800 transition-all">
            <span className="text-lg leading-none">≡</span> BROWSE CATEGORIES
          </button>

          <nav className="flex gap-[clamp(1rem,1vw,3rem)] text-gray-500 font-medium text-[13px] lg:text-xs uppercase tracking-widest pt-2 pb-16 w-full lg:w-auto">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* 5. HERO TEXT - ANIMATED */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute left-6 lg:left-16 top-[30%] xl:top-[33%] z-[45]"
      >
        <p className="text-[clamp(1rem,5vw,1.5rem)] text-cyan-700 font-normal leading-none italic">
          "Making your
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary leading-[0.75] my-4 drop-shadow-sm">
          Print Dreams"
        </h1>
        <p className="text-[clamp(1rem,5vw,1.5rem)] font-normal text-cyan-700 italic">
          Come True
        </p>
        
        {/* Animated Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* 6. THE MACHINE - ANIMATED */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-6 lg:left-16 w-[45%] lg:w-[36%]"
      >
        <Image
          src={Machine}
          alt="Printing Machine"
          width={600}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;