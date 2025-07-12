import { Place } from "../../config";

import { getDistanceKm } from "./getDistanceKm";

export function pickNearestPlaces(places: Place[], origin: { lat: number; lng: number }, count: number): Place[] {
  return [...places]
    .map((place) => ({
      ...place,
      distance: getDistanceKm(origin.lat, origin.lng, place.location.lat, place.location.lng),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map(({ distance, ...rest }) => rest);
}

export function pickNearestPlacesDiverse(
  candidates: Place[],
  origin: { lat: number; lng: number },
  maxCount: number = 3
): Place[] {
  // 按距離排序
  const sorted = [...candidates].sort((a, b) => {
    const distA = getDistanceKm(origin.lat, origin.lng, a.location.lat, a.location.lng);
    const distB = getDistanceKm(origin.lat, origin.lng, b.location.lat, b.location.lng);
    return distA - distB;
  });

  const selected: Place[] = [];
  const usedTypes = new Set<string>();
  const usedCities = new Set<string>();

  for (const place of sorted) {
    const tooSimilar = usedTypes.has(place.type) && usedCities.has(place.city);

    if (!tooSimilar || selected.length === 0) {
      selected.push(place);
      usedTypes.add(place.type);
      usedCities.add(place.city);
    }

    if (selected.length >= maxCount) break;
  }

  return selected;
}
