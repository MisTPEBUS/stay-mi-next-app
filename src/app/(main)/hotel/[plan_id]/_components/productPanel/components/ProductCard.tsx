import { Card, CardContent } from "@/components/ui/card";
import { ProductPlanPublicType } from "@/schema/dashboard/productPlan.dto";

import { MotionImage } from "./MotionImage";

export type ProductCardProps = Pick<
  ProductPlanPublicType,
  "id" | "price" | "product_name" | "product_features" | "product_description" | "product_imageUrl"
>;

export const ProductCard = ({
  price,
  product_name,
  product_features,
  product_description,
  product_imageUrl,
}: ProductCardProps) => {
  return (
    <Card className="flex min-h-[420px] max-w-[3060px] flex-col overflow-hidden rounded-2xl bg-white shadow-none">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        {product_imageUrl ? (
          <MotionImage
            src={product_imageUrl}
            alt={`${product_name} 圖片`}
            wrapperClassName=""
            imgClassName=""
            sizes="(max-width: 306px) 100vw"
            priority
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        <div className="absolute right-2 bottom-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {product_features}
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="text-base font-semibold text-black">{product_name}</h3>
          <p
            className="text-muted-foreground mt-1 line-clamp-2 text-sm whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: product_description }}
          />
        </div>
        <div className="mt-4 text-right">
          <p className="text-primary text-xl font-bold">${price}</p>
        </div>
      </CardContent>
    </Card>
  );
};
