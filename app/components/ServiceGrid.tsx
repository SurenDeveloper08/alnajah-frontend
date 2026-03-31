"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  { id: 1, title: "CREATIVE DESIGNING", desc: "Professional brand identity and structural packaging layout for modern businesses.", img: "/assets/products/business-card.jpg", bgColor: "bg-[#F0FAFB]" },
  { id: 2, title: "OFFSET PRINTING", desc: "High-volume precision printing for premium brochures, catalogs, and marketing materials.", img: "/assets/products/offset-printing.jpg", bgColor: "bg-[#E6F7F9]" },
  { id: 3, title: "COMMERCIAL PACKAGING", desc: "Scalable and durable packaging solutions for retail and industrial consumer goods.", img: "/assets/products/business-card.jpg", bgColor: "bg-[#F0FAFB]" },
  { id: 4, title: "HARD BOX MANUFACTURING", desc: "Premium rigid boxes designed for luxury gifting, electronics, and high-end retail.", img: "/assets/products/offset-printing.jpg", bgColor: "bg-[#E6F7F9]" },
  { id: 5, title: "SOFT BOX MANUFACTURING", desc: "Custom folding cartons and lightweight boxes for the cosmetic and food industries.", img: "/assets/products/business-card.jpg", bgColor: "bg-[#F0FAFB]" },
  { id: 6, title: "DIGITAL PRINTING", desc: "Fast, high-resolution printing for short-run custom projects and on-demand needs.", img: "/assets/products/offset-printing.jpg", bgColor: "bg-[#E6F7F9]" },
];

export default function ServiceGridFill() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header - Matches your Hero Text Style & Cyan Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          <h2 className="text-3xl lg:text-5xl font-serif italic text-cyan-700">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative aspect-square w-full ${service.bgColor} flex flex-col group cursor-pointer overflow-hidden border border-cyan-50 shadow-sm hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500`}
            >
              {/* 1. IMAGE SECTION - FILL */}
              <div className="relative w-full h-[60%] overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle Cyan Overlay on Hover */}
                  <div className="absolute inset-0 bg-cyan-600/0 group-hover:bg-cyan-600/10 transition-colors duration-500" />
                </motion.div>
              </div>

              {/* 2. CONTENT SECTION */}
              <div className="flex-grow flex flex-col justify-center p-8 bg-white">
                {/* Title - Fixed height with Cyan accent on hover */}
                <h3 className="text-[15px] font-black tracking-widest text-gray-900 group-hover:text-cyan-600 uppercase line-clamp-2 h-10 mb-1 leading-tight transition-colors">
                  {service.title}
                </h3>

                {/* Desc - Fixed height */}
                <p className="text-[12px] text-gray-400 line-clamp-2 h-9 mb-5 leading-relaxed">
                  {service.desc}
                </p>

                {/* More Link - Brand Colors */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-[0.2em] text-cyan-600">VIEW MORE</span>
                    <div className="h-[1px] w-6 bg-cyan-100 group-hover:w-12 group-hover:bg-cyan-500 transition-all duration-500" />
                  </div>
                  <ArrowForwardIcon className="!text-sm text-cyan-500 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>

              {/* Index Number Label - Cyan Styling */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-black text-cyan-600 shadow-sm border border-cyan-50">
                0{service.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}