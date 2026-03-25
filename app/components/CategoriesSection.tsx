import React from 'react'

const CategoriesSection = () => {
  const row1 = ["BUSINESS CARD", "SOFT CASE BOXES", "HARD CASE BOXES", "SHOPPING BAG", "STICKERS"];
  const row2 = ["HARD CASE BOOKS", "INVITATION CARDS", "LETTERHEAD"];

  return (
    <section className="w-full py-16 bg-white text-center">
      <h2 className="text-3xl font-serif italic text-[#006B7D] mb-10">Product Categories</h2>
      
      <div className="max-w-5xl mx-auto px-6 space-y-4">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12">
          {row1.map(item => (
            <span key={item} className="text-gray-500 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
              {item}
            </span>
          ))}
        </div>
        
        {/* Row 2 (Indented/Staggered) */}
        <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12">
          {row2.map(item => (
            <span key={item} className="text-gray-500 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection