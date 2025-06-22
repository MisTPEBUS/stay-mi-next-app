"use client";

import { useHotelBase } from "@/hooks/react-query/useHotelBase";

import HotelForm from "./_components/HotelForm";

const HotelSettingsPage = () => {
  const { data } = useHotelBase();

  return (
    <section className="mx-4 shadow">
      <HotelForm hotels={data?.hotels ?? []} />
    </section>
  );
};
export default HotelSettingsPage;
