import Logo from "@/components/common/Logo";
import SocialIcons from "./SocialIconst";
import { Mail, MapPin } from "lucide-react";

const FooterCompanyInfo = () => {
  return (
    <div className="flex flex-col  items-start gap-8">
      <Logo />
      <SocialIcons />
      <p className="text-sm text-balance ">
        Grocery platform offering fresh produce, daily essentials, personalized
        recommendations, and seamless ordering with secure payments and
        real-time tracking.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <p className="text-sm">5th Settlement, New Cairo, Cairo, Egypt</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <p className="text-sm">help@groceryplus.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
