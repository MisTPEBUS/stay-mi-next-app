import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const hotelPage = () => {
  const plan_id = "ya-two-hotel";
  return (
    <>
      <Button variant="outline" asChild>
        <Link href={`/hotel/${plan_id}`}>查看方案</Link>
      </Button>
    </>
  );
};

export default hotelPage;
