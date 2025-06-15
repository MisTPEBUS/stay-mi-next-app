import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const hotelPage = () => {
  return (
    <div className="bg-white-pure container mx-auto flex-col py-10">
      <Button variant="outline" asChild>
        <Link href={`/hotel/52accaef-1f99-4131-bfe4-e2e545c9c028`}>查看方案一</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href={`/hotel/cea51ab9-2a78-4de0-8511-28be46e1f39c`}>查看方案二</Link>
      </Button>
    </div>
  );
};

export default hotelPage;
