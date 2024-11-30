'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
});

export default function MapComponent({ latlng, countryName }) {
  const position = latlng || [0, 0];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent server-side rendering issues
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Location Map</h2>
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        className="h-64 w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{countryName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
