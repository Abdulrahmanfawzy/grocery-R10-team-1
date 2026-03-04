import { DummyCategoryMiniSlider } from "@/components/data/mocData";

export default function CategoryMiniSlider() {
  return (
    <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide flex gap-4 py-4 px-2 text-sm snap-x snap-mandatory scroll-smooth">
      {DummyCategoryMiniSlider.map((category, index) => (
        <div
          key={index}
          className="p-4 rounded-2xl bg-white box-shadow flex-1 flex items-center flex-col min-w-30 snap-start"
        >
          <img
            src={category.image}
            alt={category.name}
            className=" rounded-lg"
          />
          <h3 className="text-center mt-2  text-xs md:text-sm font-light flex ">
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
