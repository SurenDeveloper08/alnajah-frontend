"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import Link from 'next/link';

const Dropdown = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "Digital Printing", slug: "digital-printing" },
    { name: "Offset Printing", slug: "offset-printing" },
    { name: "Large Format", slug: "large-format" },
    { name: "Custom Packaging", slug: "packaging" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setCategoryOpen(!categoryOpen)}
        className="font-bold text-white bg-primary hover:bg-[#1a9e99] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 px-5 py-2.5 flex items-center gap-2 transition-all duration-300 ease-in-out shadow-sm uppercase text-xs tracking-wider"
      >
        <span className="text-lg leading-none">≡</span>
        Browse Categories
        <ArrowDropDown 
          className={`transition-transform duration-300 ${categoryOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {categoryOpen && (
        <div 
          className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl z-[100] rounded-sm animate-in fade-in zoom-in-95 duration-200"
        >
          <ul className="py-1">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/${cat.slug}`}
                  onClick={() => setCategoryOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-primary transition-colors duration-200 border-b border-gray-50 last:border-none"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;