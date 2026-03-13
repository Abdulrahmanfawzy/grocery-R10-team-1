import { Input } from "@/components/ui/input";
import { useState } from "react";

const HomeAuthInput = ({
  icon,
  placeholder,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  placeholder: string;
  label: string;
  className?: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-[12px]s font-extralight">{label}</label>
      <div className="flex w-full items-center">
        <span className="bg-white text-[#ADADAD] rounded-l-md p-[6px]">
          {icon}
        </span>
        <Input
          placeholder={placeholder}
          className=" bg-white text-sm rounded-l-none border-l-0 text-gray-600"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HomeAuthInput;
