import type { ProductList } from "@/types/home/product";

const newProducts: ProductList = [
  {
    id: 1,
    name: "Papyas 5kg",
    price: 90.99,
    discount: 10.99,
    category: "Fruits",
    image: "/src/assets/home/fruits/papyas.svg",
    owner: "Mr.food",
    rating: 4,
  },
  {
    id: 2,
    name: "Peaches 2kg",
    price: 57.8,
    discount: 2.8,
    category: "Fruits",
    image: "/src/assets/home/fruits/peaches.svg",
    owner: "Mr.food",
    rating: 3,
  },
  {
    id: 3,
    name: "Blackberries 3kg",
    price: 65.99,
    discount: 5.99,
    category: "Fruits",
    image: "/src/assets/home/fruits/blackberries.svg",
    owner: "Mr.food",
    rating: 3,
  },
  {
    id: 4,
    name: "Apples 8kg",
    price: 50.99,
    discount: 5.99,
    category: "Fruits",
    image: "/src/assets/home/fruits/apples.svg",
    owner: "Mr.food",
    rating: 2,
  },
  {
    id: 5,
    name: "Persimmon 1kg",
    price: 37,
    discount: 2,
    category: "Fruits",
    image: "/src/assets/home/fruits/persimmon.svg",
    owner: "Mr.food",
    rating: 2,
  },
];

export default newProducts;
