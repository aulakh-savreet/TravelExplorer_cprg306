'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountryCard from '../components/CountryCard';
import axios from 'axios';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const country = searchParams.get('country');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (country) {
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
          setCountries(response.data);
          setError(null);
        })
        .catch((err) => {
          setError('No countries found.');
          setCountries([]);
        });
    }
  }, [country]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        {error && <p>{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {countries.map((countryData) => (
            <CountryCard key={countryData.cca3} country={countryData} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
