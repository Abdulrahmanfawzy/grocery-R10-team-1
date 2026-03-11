export function Badge({ label }: { label: string }) {
  return (
    <span className="bg-[#014162] text-white text-[9.5px] font-medium flex items-center justify-center w-[72px] h-[26px] px-[8px] py-[4px] rounded-tl-[15px] rounded-br-[15px]">
      {label}
    </span>
  );
}
