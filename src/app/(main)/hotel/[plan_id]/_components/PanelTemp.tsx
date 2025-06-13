"use client";
import React from "react";

type RoomHTMLPanelProps = {
  title: string;
};

const RoomHTMLPanel = ({ title }: RoomHTMLPanelProps) => {
  return (
    <section className="gap-4 space-y-2 rounded-xl bg-white">
      <h3>{title}</h3>
      <div className="bg-black-sub max-w-none space-y-2 py-40"></div>
    </section>
  );
};

export default RoomHTMLPanel;
