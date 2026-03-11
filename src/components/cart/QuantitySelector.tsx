import { GoTrash } from "react-icons/go";
import { FaPlus, FaMinus } from "react-icons/fa";

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex justify-between flex-row items-center border-1 w-[120px] md:w-[136px] border-[#BCB8B1] rounded-[10px] p-[8px]">
      <button
        onClick={onDecrease}
        className="text-[#014162] text-[16px] font-bold flex items-center justify-center w-6 h-6 hover:bg-gray-100 rounded"
      >
        <FaMinus className="text-[#014162] text-[12px]" />
      </button>

      <div className="text-[18px] font-[400] leading-[120%] text-[#0E1112]">
        {quantity}
      </div>

      <button
        onClick={onIncrease}
        className="text-[#014162] text-[16px] font-bold flex items-center justify-center w-6 h-6 hover:bg-gray-100 rounded"
      >
        <FaPlus className="text-[#014162] text-[12px]" />
      </button>
    </div>
  );
}
