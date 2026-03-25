"use client";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = () => {
    const [query, setQuery] = useState("");

    const handleClear = () => {
        setQuery("");
    };

    return (
        <div className="relative w-full group">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border-2 border-cyan-600 text-gray-700 rounded-full py-2 pl-4 pr-10 
             bg-white transition-all duration-300
             placeholder:text-gray-400
             /* Focus states - specifically removing the black outline */
             focus:outline-none 
             focus:ring-0 
             focus:border-cyan-600
             hover:border-cyan-800"
            />

            {/* Action Icons */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
                {query ? (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Clear search"
                    >
                        <CloseIcon className="text-gray-500 hover:text-gray-700" fontSize="small" />
                    </button>
                ) : (
                    <SearchIcon className="text-primary" fontSize="small" />
                )}
            </div>
        </div>
    );
};

export default SearchInput;