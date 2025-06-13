"use client";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useCallback } from "react";

export type LocationStyleType = {
  width: string;
  height: string;
};

export type LatLngType = {
  Lat: number;
  Lng: number;
};

const containerStyle: LocationStyleType = {
  width: "100%",
  height: "300px",
};

const options = {
  disableDefaultUI: true,
  gestureHandling: "greedy",
};
//雅兔大飯店

export type myGoogleMapProps = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

const myGoogleMap = ({ name, address, lat, lng }: myGoogleMapProps) => {
  const [infoOpen, setInfoOpen] = useState(true);
  const googleDirection = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const handleMarkerClick = useCallback(() => {
    setInfoOpen(true);
  }, []);
  const center = { lat, lng };
  return (
    <div className="relative">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GEOCODING_API_KEY!} libraries={["places"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={options}
          onClick={() => setInfoOpen(false)}
        >
          <Marker position={center} onClick={handleMarkerClick} />

          {infoOpen && (
            <InfoWindow position={center} onCloseClick={() => setInfoOpen(false)}>
              <div className="text-sm leading-tight">
                <div className="mb-1 font-semibold">{name}</div>
                <div className="text-gray-700">{address}</div>
                <a
                  href={googleDirection}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-blue-600 underline"
                >
                  在 Google 地圖上查看
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default myGoogleMap;
