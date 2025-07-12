import { northFunPlaces, Place } from "@/app/chat/config";

function deg2rad(deg: number) {
  return (deg * Math.PI) / 180;
}

function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);
  const φ1 = deg2rad(lat1);
  const φ2 = deg2rad(lat2);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function filterPlacesNearBy(
  cond: {
    reference: { lat: number; lng: number };
    duration: number;
    preferences: string[];
  },
  maxDistanceKm = 10
): Record<string, Place[]> {
  const list = northFunPlaces
    .filter((p) => cond.preferences.some((pref) => p.tags?.includes(pref)))
    .map((p) => ({
      p,
      distance: haversineDistance(cond.reference.lat, cond.reference.lng, p.location.lat, p.location.lng),
    }))
    .filter((o) => o.distance <= maxDistanceKm)
    .sort((a, b) => a.distance - b.distance)
    .map((o) => o.p);

  const perDay = Math.ceil(list.length / cond.duration);
  const grouped: Record<string, Place[]> = {};
  for (let i = 0; i < cond.duration; i++) {
    grouped[`Day ${i + 1}`] = list.slice(i * perDay, (i + 1) * perDay);
  }
  return grouped;
}

/**
 * 
 * // 假設 cond 物件已經包含住宿 location
const placesByDay = filterPlacesNearby({
  reference: { lat: hotel.lat, lng: hotel.lng },
  duration: cond.duration,
  preferences: cond.preferences
}, 8) // 只考慮 8 公里內景點
 */
