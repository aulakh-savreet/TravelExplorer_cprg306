'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense
        fallback={
          <main className="container mx-auto flex-grow p-4 flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          </main>
        }
      >
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  );
}

function SearchResults() {
  const searchParams = useSearchParams();
  const country = searchParams.get('country');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (country) {
      setLoading(true);
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
          setCountries(response.data);
          setError(null);
        })
        .catch((err) => {
          setError('No countries found.');
          setCountries([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [country]);

  if (loading) {
    return (
      <main className="container mx-auto flex-grow p-4 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </main>
    );
  }

  return (
    <main className="container mx-auto flex-grow p-4">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for "{country}"
      </h1>
      {error ? (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {countries.map((countryData) => (
            <CountryCard key={countryData.cca3} country={countryData} />
          ))}
        </div>
      )}
    </main>
  );
}