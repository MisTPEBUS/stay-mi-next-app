import axios from "axios";

const GEOCODING_API_KEY = process.env.NEXT_PUBLIC_GEOCODING_API_KEY || "";

export async function getGeocode(address: string): Promise<{ lat: number; lng: number }> {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GEOCODING_API_KEY}`;

  try {
    const response = await axios.get(url);
    const result = response.data.results?.[0];

    if (!result) throw new Error("無法解析該地址");

    const { lat, lng } = result.geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("Geocoding 錯誤：", error);
    throw error;
  }
}
