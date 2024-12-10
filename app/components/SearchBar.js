'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      router.push(`/search?country=${encodeURIComponent(trimmedTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-8">
      <div className="relative w-full max-w-md">
        <label htmlFor="search" className="sr-only">
          Search for a country
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for a country"
          className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-4 text-primary hover:text-secondary transition"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
