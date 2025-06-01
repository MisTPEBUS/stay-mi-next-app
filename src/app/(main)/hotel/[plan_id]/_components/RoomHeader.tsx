import React from "react";

import RoomImage from "./RoomImage";

const RoomHeader = () => {
  return (
    <section className="rounded-xl px-4 py-10">
      {/* 圖片區塊 */}
      <RoomImage />

      {/* API資料 */}
      <div className="mt-6 flex space-y-2 md:block">
        <h2 className="text-2xl font-bold text-black">
          豪華海景標準雙人房套房 <span className="text-black/70">| 台北雅TWO大飯店</span>
        </h2>

        <div className="text-muted-foreground flex items-center text-sm">
          <span>台北市中正區羅斯福路三段300號</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RoomHeader;
