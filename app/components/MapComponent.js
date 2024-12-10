'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet-images/marker-icon-2x.png',
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
});

export default function MapComponent({ latlng, countryName }) {
  useEffect(() => {
    if (latlng[0] === 0 && latlng[1] === 0) return; 

    const map = L.map('map').setView(latlng, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    if (latlng && countryName) {
      L.marker(latlng)
        .addTo(map)
        .bindPopup(countryName)
        .openPopup();
    }

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
    };
  }, [latlng, countryName]);

  return <div id="map" className="h-96 w-full mt-8 rounded-lg overflow-hidden shadow"></div>;
}
