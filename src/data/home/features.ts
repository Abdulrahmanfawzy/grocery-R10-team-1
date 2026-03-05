const features: Feature[] = [
  {
    id: 1,
    title: "Best Prices & Deals",
    description: "Don't miss our daily amazing deals and prices",
    images: [
      "/src/assets/home/features/feature1.svg",
      "/src/assets/home/features/feature1-top.svg",
    ],
  },
  {
    id: 2,
    title: "Refundable",
    description: "If your items have damage we agree to refund it",
    images: [
      "/src/assets/home/features/feature2.svg",
      "/src/assets/home/features/feature2-top.svg",
    ],
  },
  {
    id: 3,
    title: "Best Prices & Deals",
    description: "Do purchase over $50 and get free delivery anywhere",
    images: ["/src/assets/home/features/feature3.svg"],
  },
];

type Feature = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export { features };
