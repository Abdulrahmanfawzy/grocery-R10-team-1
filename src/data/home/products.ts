type Product = {
  id: number;
  image?: string;
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 1.99,
    category: "Fruits",
    image: "/assets/images/products/bananas.png",
  },
  {
    id: 2,
    name: "Red Apples",
    price: 2.49,
    category: "Fruits",
    image: "/assets/images/products/apples.png",
  },
  {
    id: 3,
    name: "Whole Milk 1L",
    price: 1.79,
    category: "Dairy",
    image: "/assets/images/products/milk.png",
  },
  {
    id: 4,
    name: "Greek Yogurt",
    price: 3.29,
    category: "Dairy",
    image: "/assets/images/products/yogurt.png",
  },
  {
    id: 5,
    name: "Brown Bread",
    price: 2.19,
    category: "Bakery",
    image: "/assets/images/products/bread.png",
  },
  {
    id: 6,
    name: "Free-Range Eggs (12)",
    price: 4.59,
    category: "Breakfast",
    image: "/assets/images/products/eggs.png",
  },
  {
    id: 7,
    name: "Chicken Breast 500g",
    price: 6.99,
    category: "Meat",
    image: "/assets/images/products/chicken.png",
  },
  {
    id: 8,
    name: "Basmati Rice 1kg",
    price: 3.89,
    category: "Pantry",
    image: "/assets/images/products/rice.png",
  },
  {
    id: 9,
    name: "Olive Oil 500ml",
    price: 7.49,
    category: "Pantry",
    image: "/assets/images/products/olive-oil.png",
  },
  {
    id: 10,
    name: "Cheddar Cheese",
    price: 4.19,
    category: "Dairy",
    image: "/assets/images/products/cheese.png",
  },
  {
    id: 11,
    name: "Frozen Mixed Vegetables",
    price: 2.99,
    category: "Frozen",
    image: "/assets/images/products/mixed-vegetables.png",
  },
  {
    id: 12,
    name: "Orange Juice 1L",
    price: 2.69,
    category: "Beverages",
    image: "/assets/images/products/orange-juice.png",
  },
];

export type { Product };
export default products;
