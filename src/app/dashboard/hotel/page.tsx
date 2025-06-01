// app/dashboard/hotel/page.tsx
"use client";

import { useHotelBase } from "@/hooks/react-query/useHotelBase";

import HotelForm from "./_components/HotelForm";

const HotelSettingsPage = () => {
  const { data } = useHotelBase();

  return (
    <section className="container mx-auto">
      <HotelForm hotels={data?.hotels ?? []} />
    </section>
  );
};
export default HotelSettingsPage;
