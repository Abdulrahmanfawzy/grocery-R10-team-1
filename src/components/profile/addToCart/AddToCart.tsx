import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/lib/api/profile/addToCart/addToCart";
import { Loader2 } from "lucide-react";

interface Props {
  id: number;
  quantity: number;
}

const AddToCart = ({ id, quantity }: Props) => {
  const { mutate, isPending } = useAddToCart();

  const handleAddToCart = () => {
    mutate({
      meal_id: id,
      quantity: quantity,
    });
  };

  return (
    <Button
      className="flex cursor-pointer items-center"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? <Loader2 className="animate-spin w-4" /> : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
