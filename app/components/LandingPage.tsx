"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SearchIcon from "@mui/icons-material/Search";
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
      {/* <div className="absolute top-0 left-0 w-full h-[5px] bg-cyan-600 z-[60] shadow-sm" /> */}
      <div className="bg-cyan-500 relative z-[100] w-full border-b border-gray-100 py-2 px-6 lg:px-16 flex justify-end items-center gap-8 text-[11px] font-medium text-white">
        <a href="tel:+97167486990" className="flex items-center gap-2 hover:text-white transition-colors">
          <PhoneIcon className="!text-sm text-white" /> +971 6 7486990
        </a>
        <a href="https://wa.me/971567135858" className="flex items-center gap-2 hover:text-white transition-colors">
          <WhatsAppIcon className="!text-sm text-white" /> +971 56 713 5858
        </a>
        <a href="mailto:alnajahpp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <EmailIcon className="!text-sm text-white" /> alnajahpp@gmail.com
        </a>
      </div>
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
        className="relative z-50 w-full px-6 lg:px-16 py-6"
      >
        {/* MAIN NAVIGATION ROW: Logo + Menus (Left) | Search (Right) */}
        <div className="flex items-center justify-between w-full">

          {/* Left Group: Logo and Nav Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
                className="brightness-110 drop-shadow-sm"
              />
            </Link>

            {/* Navigation Menus */}
            <nav className="hidden lg:flex gap-6 text-gray-400 font-bold text-[11px] uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-cyan-600 transition-colors whitespace-nowrap"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Group: Search Only */}
          <div className="w-full max-w-[200px] lg:max-w-[280px]">
           <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-gray-100/50 border border-gray-200 rounded-full py-2 px-5 pl-10 text-xs outline-none focus:border-cyan-500 focus:bg-white transition-all text-gray-600 italic"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 !text-gray-400 !text-lg" />
    </div>
          </div>

        </div>
      </motion.header>

      {/* 5. HERO TEXT - ANIMATED */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute left-6 lg:left-16 top-[30%] xl:top-[33%] z-[45]"
      >
        <p className="text-[clamp(1rem,5vw,1.5rem)] text-cyan-700 font-normal leading-none">
          "Making your
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-cyan-500 leading-[0.75] my-4 drop-shadow-sm">
          Print Dreams"
        </h1>
        <p className="text-[clamp(1rem,5vw,1.5rem)] font-normal text-cyan-700">
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