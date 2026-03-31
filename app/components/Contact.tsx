"use client";

import React from "react";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-[#F8FDFF] overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/50 -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: Brand Identity & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <div className="mb-10">
              <p className="text-cyan-600 text-[12px] font-bold tracking-[0.4em] uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter uppercase mb-6">
                Let's Build Your <span className="text-cyan-500">Brand</span>
              </h2>
              <div className="h-1.5 w-20 bg-cyan-500" />
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-sm">
              From structural engineering to luxury finishes, our experts are ready to turn your packaging dreams into reality.
            </p>

            {/* Contact Detail Cards */}
            <div className="space-y-8">
              {[
                { icon: <PhoneIcon />, label: "Call Us", val: "+971 6 7486990", href: "tel:+97167486990" },
                 { icon: <EmailIcon />, label: "Email Support", val: "alnajahpp@gmail.com", href: "mailto:alnajahpp@gmail.com" },
                { icon: <LocationOnIcon />, label: "Visit Factory", val: "Ajman, United Arab Emirates", href: "#" },
              ].map((item, idx) => (
                <a 
                  href={item.href} 
                  key={idx} 
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white shadow-md group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 text-cyan-600">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "!text-xl" })}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-black text-gray-800 group-hover:text-cyan-600 transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-white p-10 lg:p-14 shadow-[0_30px_100px_rgba(0,163,186,0.1)] relative">
              {/* Form Corner Detail */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 flex items-center justify-center">
                <div className="w-10 h-[1px] bg-cyan-200 rotate-45" />
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="bg-gray-50 border-b-2 border-transparent focus:border-cyan-500 focus:bg-white p-4 text-sm outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-gray-50 border-b-2 border-transparent focus:border-cyan-500 focus:bg-white p-4 text-sm outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Service Interest</label>
                  <select className="bg-gray-50 border-b-2 border-transparent focus:border-cyan-500 focus:bg-white p-4 text-sm outline-none transition-all cursor-pointer appearance-none">
                    <option>Hard Box Manufacturing</option>
                    <option>Offset Printing</option>
                    <option>Creative Designing</option>
                    <option>Commercial Packaging</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project Brief</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your packaging requirements..."
                    className="bg-gray-50 border-b-2 border-transparent focus:border-cyan-500 focus:bg-white p-4 text-sm outline-none transition-all resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-black text-xs uppercase tracking-[0.3em] py-5 px-10 transition-all flex items-center justify-center gap-4 group">
                    Send Inquiry 
                    <SendIcon className="!text-sm group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Trust Badge Below Form */}
            <div className="mt-8 flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 transition-all">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Trusted by 500+ Global Brands</p>
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}