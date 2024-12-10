import Link from 'next/link';

export default function CountryCard({ country }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <p className="text-gray-600"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
        <p className="text-gray-600"><strong>Region:</strong> {country.region}</p>
        <Link href={`/country?code=${country.cca3}`} className="mt-4 inline-block text-primary hover:text-secondary font-medium">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}
