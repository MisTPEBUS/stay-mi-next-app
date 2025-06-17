"use client";

import SectionTitle from "@/app/(main)/(home)/SectionTitle";
import { SectionTitleContent } from "@/app/(main)/(home)/types";
import { useUserProductPlans } from "@/hooks/react-query/front-end/useUserProductPlans";

import { ProductCarousel } from "./components/ProductCarousel";

type ProductPanelProps = {
  hotel_id: string;
};
const title: SectionTitleContent = {
  heading: "伴手禮列表",
  label: "SOUVENIR",
};
const ProductPanel = (params: ProductPanelProps) => {
  const { data } = useUserProductPlans(params.hotel_id);
  console.log("ProductPanel", data);
  if (!data) return;
  return (
    <section className="">
      <div className="mb-8 md:mb-12">
        <SectionTitle content={title} className="mb-4" />
        <p className="text-black-sub">可於訂房時一併訂購</p>
      </div>

      <ProductCarousel products={data} />
    </section>
  );
};

export default ProductPanel;
