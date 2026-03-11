import { FaStar } from "react-icons/fa";

export function StarRow({
  rating,
  size = 12,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar
          key={s}
          size={size}
          className={s <= rating ? "text-[#F4A728]" : "text-[#EEEEEE]"}
        />
      ))}
    </div>
  );
}
