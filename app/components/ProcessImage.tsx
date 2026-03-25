"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedProcess = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-24">
      {/* 1. Main Container with your specific left-6 lg:left-16 padding */}
      <div className="px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        {/* 2. The Overlapping Image Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-2xl group">
          
          {/* Base Image: Printing Machine (Subtle Zoom Animation) */}
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/assets/printing-machine.png"
              alt="High-speed Printing Machine"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Cyan Layer: Layer.png (Slides in from the right) */}
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 h-full w-[60%] lg:w-[45%] z-20"
          >
            <Image
              src="/assets/Layer.png"
              alt="Cyan Overlay"
              fill
              className="object-fill object-right opacity-90"
            />
            
            {/* 3. Animated Text inside the Cyan Area */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute inset-0 flex flex-col justify-center items-end pr-8 lg:pr-16 text-white text-right"
            >
              <h3 className="text-xl lg:text-3xl font-bold tracking-tighter uppercase italic">
                Precision <br /> Printing
              </h3>
              <div className="w-12 h-1 bg-white mt-4 mb-2" />
              <p className="text-[10px] lg:text-xs font-medium tracking-widest opacity-80 uppercase">
                UAE Manufacturing Standard
              </p>
            </motion.div>
          </motion.div>

          {/* 4. Subtle Dark Overlay for depth */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
};

export default AnimatedProcess;