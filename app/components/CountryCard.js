import Link from 'next/link';

export default function CountryCard({ country }) {
  return (
    <div className="border rounded overflow-hidden shadow-lg">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{country.name.common}</h2>
        <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
        <p>Region: {country.region}</p>
        <Link
          href={`/country?code=${country.cca3}`}
          className="text-blue-600 mt-2 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
