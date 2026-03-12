import { Key, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const DailyBestSellsForm = () => {
  return (
    <div className="bg-[#396B85] p-2 text-[#F7FCFF] min-w-[217px] min-h-[377px] text-center rounded">
      <div className="mb-6">
        <h3 className="text-[32px] font-bold text-center">10% OFF</h3>
        <p className="text-sm">For new Member Sign up at the first time </p>
      </div>
      <div className="space-y-4 mb-12">
        <InputItem
          icon={<Key size={24} className="" />}
          placeholder="Maximum 8 character"
        />
        <InputItem
          icon={<Mail size={24} className="" />}
          placeholder="grocery@gmail.com"
        />
      </div>
      <Button className="bg-[#014162] w-full p-2">Register Now</Button>
    </div>
  );
};

const InputItem = ({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-1">
      <label className="text-[12px]s font-extralight">Email Address</label>
      <div className="flex w-full items-center">
        <span className="bg-white text-[#ADADAD] rounded-l-md p-[6px]">
          {icon}
        </span>
        <Input
          placeholder={placeholder}
          className=" bg-white text-sm rounded-l-none border-l-0 text-[#AdADAD]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DailyBestSellsForm;
