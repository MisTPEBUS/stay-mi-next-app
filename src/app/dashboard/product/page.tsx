"use client";

import { ProductDeleteDialog } from "./_components/ProductDeleteDialog";
import { ProductDialog } from "./_components/ProductEditorDialog";
import { ProductTable } from "./_components/ProductTable";

const ProductPage = () => {
  return (
    <div className="bg-white-pure mx-4 rounded-sm border shadow">
      <ProductTable />
      <ProductDialog />
      <ProductDeleteDialog />
    </div>
  );
};
export default ProductPage;
