import { ProductItem } from "./ProductItem";
import type { CartItem } from "../../types/cart";

export function ProductSelector({
  products,
  onUpdateQuantity,
  onDelete,
}: {
  products: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <>
      {products &&
        products.map((item) => {
          return (
            <div key={item.id} className="w-full md:w-1/2 p-[16px]">
              <ProductItem
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onDelete={onDelete}
              />
            </div>
          );
        })}
    </>
  );
}
