"use client";

import React from "react";
import Image from "next/image";
import Bgp from "@/app/assets/bg-patternx.png"
import HeroImg from "@/app/assets/hero-main.png"
import Machine from "@/app/assets/hero-machine.png"
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Background Pattern - Optimized with Next.js Image */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <Image
          src={Bgp}
          alt="background pattern"
          fill
          priority
          className="object-cover animate-backgroundZoom"
        />
      </div>

      {/* Hero Hand Image Container */}
      <div className="relative w-full h-full">
        {/* We use one Image component with responsive Tailwind classes 
            instead of three separate <img> tags to save bandwidth */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-full h-full flex items-end justify-center">
          <div className="relative w-full h-[50%] sm:h-[70%] lg:h-full animate-heroImage">
            <Image
              src={HeroImg}
              alt="Hero Hand"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-20 top-[25%] sm:top-[30%] md:top-[25%] -translate-y-1/2 text-left max-w-full z-20 px-2 sm:px-4 opacity-0 animate-heroTextFromLeft">
        
        {/* Mobile View */}
        <div className="sm:hidden text-center w-full">
          <p className="text-[clamp(1rem,5vw,1.5rem)] font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(1.5rem,7vw,3rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1rem,5vw,1.5rem)] font-medium mt-1">Come True</p>
        </div>

        {/* Tablet View */}
        <div className="hidden sm:block lg:hidden text-center sm:max-w-md mx-auto">
          <p className="text-[clamp(1.25rem,4vw,2rem)] font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1.25rem,4vw,2rem)] font-medium mt-1">Come True</p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block max-w-lg">
          <p className="text-[clamp(1.25rem,3vw,2rem)] lg:text-gray-600 font-medium mb-1">“Making your</p>
          <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-bold text-primary leading-tight">Print Dreams”</h1>
          <p className="text-[clamp(1.25rem,3vw,2rem)] lg:text-gray-600 font-medium mt-1">Come True</p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes heroImageMobile {
          from { opacity: 0; transform: translateY(48px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes heroImageDesktop {
          from { opacity: 0; transform: translateY(48px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1.02); }
        }

        .animate-heroImage {
          animation: heroImageMobile 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.15s;
        }

        @media (min-width: 1024px) {
          .animate-heroImage {
            animation: heroImageDesktop 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        }

        @keyframes heroTextFromLeft {
          from { opacity: 0; transform: translateX(-50px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .animate-heroTextFromLeft {
          animation: heroTextFromLeft 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.5s;
        }

        @keyframes backgroundZoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }

        .animate-backgroundZoom {
          animation: backgroundZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;