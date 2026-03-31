"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const categories = [
  // ROW 1
  { id: 1, title: "BUSINESS CARD", subtitle: "Stationery", img: "/assets/products/Visiting-Card.png", bgColor: "bg-[#F2F2F2]", btnColor: "bg-gray-800", row: 1 },
  { id: 2, title: "SOFT BOXES", subtitle: "Packaging", img: "/assets/products/softbox.png", bgColor: "bg-[#DDF2F9]", btnColor: "bg-[#0076A3]", row: 1 },
  { id: 3, title: "HARD BOXES", subtitle: "Luxury", img: "/assets/products/Visiting-Card.png", bgColor: "bg-[#FFF9D0]", btnColor: "bg-[#E9C400]", row: 1 },
  { id: 4, title: "SHOPPING BAG", subtitle: "Retail", img: "/assets/products/softbox.png", bgColor: "bg-[#E2F9DF]", btnColor: "bg-[#2D7A32]", row: 1 },
  // ROW 2
  { id: 5, title: "STICKERS", subtitle: "Branding", img: "/assets/products/Visiting-Card.png", bgColor: "bg-[#F3E8FF]", btnColor: "bg-[#6B21A8]", row: 2 },
  { id: 6, title: "HARD CASE BOOKS", subtitle: "Publishing", img: "/assets/products/softbox.png", bgColor: "bg-[#FFE4E6]", btnColor: "bg-[#9F1239]", row: 2 },
  { id: 7, title: "INVITATION", subtitle: "Events", img: "/assets/products/Visiting-Card.png", bgColor: "bg-[#E0F2FE]", btnColor: "bg-[#0369A1]", row: 2 },
  { id: 8, title: "LETTERHEAD", subtitle: "Corporate", img: "/assets/products/softbox.png", bgColor: "bg-[#F1F5F9]", btnColor: "bg-[#334155]", row: 2 },
];

export default function StableExpandingGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const CategoryCard = ({ cat }: { cat: typeof categories[0] }) => (
    <motion.div
      className="relative h-[280px] flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{
        flex: hoveredId === cat.id ? 2 : 1, 
      }}
      onMouseEnter={() => setHoveredId(cat.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <motion.div
        layout
        className={`relative w-full h-full overflow-hidden ${cat.bgColor} p-7 flex flex-row group hover:shadow-xl transition-shadow`}
      >
        {/* Content Section */}
        <div className="relative z-20 h-full flex flex-col justify-between w-full pointer-events-none">
          <div>
            <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest mb-1">
              {cat.subtitle}
            </p>
            <h3 className="text-xl font-black text-gray-500 leading-tight tracking-tighter">
              {cat.title}
            </h3>
          </div>

          <div className="h-10">
            <AnimatePresence>
              {hoveredId === cat.id && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className={`${cat.btnColor} pointer-events-auto text-white px-4 py-2 rounded-lg flex items-center gap-2 text-[10px] font-bold shadow-md w-fit whitespace-nowrap`}
                >
                  SHOP NOW <ArrowForwardIcon className="!text-xs" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute right-[-5%] bottom-[-5%] w-[65%] h-[75%] pointer-events-none">
          <motion.div 
            animate={{ 
              scale: hoveredId === cat.id ? 1.15 : 1,
              rotate: hoveredId === cat.id ? -4 : 0,
              x: hoveredId === cat.id ? -15 : 0
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative w-full h-full"
          >
            <Image
              src={cat.img}
              alt={cat.title}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 flex flex-col gap-6">
        
        <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-6 lg:mb-10"
                >
                  <h2 className="text-3xl lg:text-5xl font-serif italic text-cyan-700">
                     Products Categories
                  </h2>
                </motion.div>
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[280px]">
          {categories.filter(c => c.row === 1).map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-auto md:h-[280px]">
          {categories.filter(c => c.row === 2).map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}