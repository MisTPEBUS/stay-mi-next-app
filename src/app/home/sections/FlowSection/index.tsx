import React from "react";

import SectionTitle from "../../SectionTitle";
import { SectionTitleContent } from "../../types";

const title: SectionTitleContent = {
  heading: "從搜尋到入住，就這麼簡單",
  label: "BOOKING",
};

const FlowSection = () => {
  return (
    <section className="container mx-auto py-[160px]">
      <SectionTitle content={title} />
    </section>
  );
};

export default FlowSection;
