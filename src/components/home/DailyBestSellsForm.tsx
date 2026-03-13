import { Key, Mail } from "lucide-react";
import { Button } from "../ui/button";
import HomeAuthInput from "./common/HomeAuthInput";

const HomeAuthForm = () => {
  return (
    <div className="bg-[#396B85] p-2 text-[#F7FCFF] min-w-[217px] min-h-[377px] text-center rounded">
      <div className="mb-6">
        <h3 className="text-[32px] font-bold text-center">10% OFF</h3>
        <p className="text-sm">For new Member Sign up at the first time </p>
      </div>
      <div className="space-y-4 mb-12">
        <HomeAuthInput
          icon={<Mail size={24} className="" />}
          placeholder="grocery@gmail.com"
          label="Email Address"
        />
        <HomeAuthInput
          icon={<Key size={24} className="" />}
          placeholder="Maximum 8 character"
          label="Password"
        />
      </div>
      <Button className="bg-[#014162] w-full p-2 cursor-pointer">
        Register Now
      </Button>
    </div>
  );
};

export default HomeAuthForm;
