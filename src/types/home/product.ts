type Product = {
  id: number;
  name: string;
  price: number;
  discount: number;
  category: string;
  rating: number;
  image: string;
  owner: string;
};

type ProductList = Product[];
export type { Product, ProductList };
