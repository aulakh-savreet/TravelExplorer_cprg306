'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RegionSelector({ countryName, onSelectRegion }) {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countryName) {
      const fetchRegions = async () => {
        setLoading(true);
        try {
          console.log(`Fetching regions for country: ${countryName}`);
          const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
            country: countryName,
          });

          console.log('Regions fetched successfully:', response.data);

          if (response.data && response.data.data && response.data.data.states) {
            setRegions(response.data.data.states);
          } else {
            setRegions([]);
            setError('No regions data found.');
          }
          setError(null);
        } catch (err) {
          console.error('Error fetching regions:', err.response || err.message || err);
          setError('Failed to load regions.');
          setRegions([]);
        } finally {
          setLoading(false);
        }
      };

      fetchRegions();
    }
  }, [countryName]);

  const handleChange = (e) => {
    const regionName = e.target.value;
    setSelectedRegion(regionName);
    const region = regions.find((reg) => reg.name === regionName);
    onSelectRegion(region);
  };

  if (loading) return <p>Loading regions...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (regions.length === 0) return <p>No regions found.</p>;

  return (
    <div className="mt-4">
      <label htmlFor="region-select" className="block text-lg font-medium mb-2">
        Select a State/Region:
      </label>
      <select
        id="region-select"
        value={selectedRegion}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">-- Choose a Region --</option>
        {regions.map((region) => (
          <option key={region.name} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
}
