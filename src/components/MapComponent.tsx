"use client";

import { useEffect } from "react";
import L from "leaflet";

// Fix for default markers in react-leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapComponent() {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView(
      [-7.801122762699335, 110.36600287622167],
      12
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker([-7.801122762699335, 110.36600287622167]).addTo(
      map
    );
    marker.bindPopup("<b>I'm here</b><br>I live in Yogyakarta.").openPopup();

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="w-full h-full rounded-lg" />;
}
