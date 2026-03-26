import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    const services = [
        "DESIGNING",
        "OFFSET PRINTING",
        "COMMERCIAL PACKAGING",
        "HARD BOX MANUFACTURING",
        "SOFT BOX MANUFACTURING",
        "DIGITAL PRINTING",
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* 1. TOP SECTION (White Background with Logo/Vans) */}
            <div className="relative pt-16 px-6 md:px-12 lg:px-24 flex justify-center">

                {/* Subtle Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    {/* Top Left Watermark Logo */}
                    <div className="absolute -left-10 bottom-0 w-64 h-64 grayscale opacity-30">
                        <Image
                            src="/assets/logo.png"
                            alt="watermark"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content Card */}
                <div className="relative z-10 max-w-4xl bg-gray-200/80 backdrop-blur-sm p-8 md:p-12 text-center shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 italic">
                        Who we are?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base tracking-tight">
                        Established In 2009, As A Small-scale Packing Venture,
                        <span className="font-bold"> AL NAJAH PAPER BOXES AND PACKAGES </span>
                        as Come A Long Way To Be One Of The Leading Rigid Box And Soft Box
                        Manufacturers In The UAE. We Are Currently Working With Many Well-known
                        Brands Offering Innovative, And Quality Packaging Solutions. All Our Luxury
                        Rigid Box Designs Are Made With Great Structural Integrity Using High-end
                        Materials To Provide Memorable Unboxing Experiences. We Believe That Great
                        Customer Happiness Starts From Packaging And All Of Our Rigid Boxes Are
                        Authentically Created To Win Hearts.
                    </p>
                </div>
            </div>

            {/* 2. BOTTOM BLUE SECTION (Services Grid) */}
            <div className="relative bg-[#33C2D6] py-10 px-6 lg:px-24">
                {/* Right Side Watermark */}
                <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none z-0">
                    <Image
                        src="/assets/logo.png"
                        alt="Al Najah watermark"
                        fill
                        className="object-contain object-right opacity-10 brightness-0 invert"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="text-white text-center font-bold text-sm md:text-lg lg:text-xl tracking-wider"
                        >
                            {service}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;