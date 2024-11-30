// app/country/page.js

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';
import MapComponent from '../components/MapComponent';

export default function CountryProfile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) {
      setError('No country code provided.');
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch country data
        const res = await axios.get(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const countryData = res.data[0];
        setCountry(countryData);

        // Fetch weather data
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        if (
          countryData.capitalInfo &&
          countryData.capitalInfo.latlng &&
          apiKey
        ) {
          const [lat, lon] = countryData.capitalInfo.latlng;
          const weatherRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                lat,
                lon,
                units: 'metric',
                appid: apiKey,
              },
            }
          );
          setWeather(weatherRes.data);
        }
      } catch (err) {
        console.error('Error fetching country data:', err);
        setError('Country not found.');
      }
    };

    fetchData();
  }, [code]);

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto flex-grow p-4">
          <p>{error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!country) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto flex-grow p-4">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full max-w-md mb-4"
        />
        <p>
          <strong>Capital:</strong>{' '}
          {country.capital ? country.capital[0] : 'N/A'}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Languages:</strong>{' '}
          {country.languages
            ? Object.values(country.languages).join(', ')
            : 'N/A'}
        </p>

        {/* Weather Information */}
        {weather && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">
              Current Weather in {country.capital[0]}
            </h2>
            <p>
              <strong>Temperature:</strong> {weather.main.temp} °C
            </p>
            <p>
              <strong>Weather:</strong> {weather.weather[0].description}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
        )}

        {/* News Section */}
        <NewsList countryName={country.name.common} />

        {/* Interactive Map */}
        {country.capitalInfo && country.capitalInfo.latlng && (
          <MapComponent
            latlng={country.capitalInfo.latlng}
            countryName={country.name.common}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
