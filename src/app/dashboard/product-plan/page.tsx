"use client";

import { ProductsPlanDeleteDialog } from "./_components/ProductsPlanDeleteDialog";
import { ProductsPlanDialog } from "./_components/ProductsPlanEditorDialog";
import { ProductPlanTable } from "./_components/ProductsPlanable";

const ProductPlanPage = () => {
  return (
    <div className="bg-white-pure mx-4 rounded-sm border shadow">
      <ProductPlanTable />
      <ProductsPlanDialog />
      <ProductsPlanDeleteDialog />
    </div>
  );
};
export default ProductPlanPage;
