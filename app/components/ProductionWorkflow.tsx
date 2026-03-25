"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductionWorkflow = () => {
  return (
    <section className="w-full bg-white py-8 lg:py-12 overflow-hidden">
      {/* Container with your brand spacing */}
      <div className="px-6 lg:px-16 max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header: Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          <h2 className="text-3xl lg:text-5xl font-serif italic text-cyan-700">
            Our Production Process
          </h2>
        </motion.div>

        {/* The Image Container: Centered */}
        <div className="w-full overflow-x-auto no-scrollbar flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full min-w-[800px] max-w-[1200px] aspect-[21/9]"
          >
            <Image
              src="/assets/process.png" 
              alt="Al Najah Production Workflow"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Decorative Divider: Centered within the flow */}
        <div className="mt-6 w-full h-4 flex overflow-hidden mx-auto shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="bg-cyan-500" 
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.1 }}
            className="bg-cyan-200" 
          />
        </div>
      </div>
    </section>
  );
};

export default ProductionWorkflow;