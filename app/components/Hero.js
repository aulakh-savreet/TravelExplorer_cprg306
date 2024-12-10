import Link from 'next/link';
import SearchBar from './SearchBar'; 

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/images/Travel.webp" 
        alt="Beautiful Travel Destination"
        layout="fill"
        objectFit="cover"
        quality={75} 
        priority 
        placeholder="blur" 
        blurDataURL="/images/Travel-blur.webp" 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 dark:bg-gray-900 dark:opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-white dark:text-gray-100 mb-4">
          Discover the World with TravelExplorer
        </h1>
        <p className="text-lg md:text-2xl text-white dark:text-gray-300 mb-8">
          Explore amazing destinations and plan your next adventure.
        </p>

        <SearchBar />

        <Link href="/search">
          <span className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary mt-6 cursor-pointer">
            Start Your Journey
          </span>
        </Link>
      </div>
    </section>
  );
}
