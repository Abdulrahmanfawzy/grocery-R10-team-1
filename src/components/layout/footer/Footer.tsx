import { Mail, MapPin } from "lucide-react";
import SocialIcons from "./footer/SocialIconst";
import Logo from "../common/Logo";
import FooterList from "./footer/FooterList";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-primary-foreground py-8 border-t border-gray-200 text-gray-900  ">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto md:grid md:grid-cols-3  gap-16 space-y-12 px-10">
          {/*  TODO: Logo,  social icons, p, address, email   */}
          <div className="flex flex-col  items-start gap-8">
            <Logo />
            <SocialIcons />
            <p className="text-sm text-balance ">
              Grocery platform offering fresh produce, daily essentials,
              personalized recommendations, and seamless ordering with secure
              payments and real-time tracking.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <p className="text-sm">
                  5th Settlement, New Cairo, Cairo, Egypt
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <p className="text-sm">help@groceryplus.com</p>
              </div>
            </div>
          </div>
          {/* TODO: each Item contain the Link & the name */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12  col-span-2">
            <FooterList
              title="Support"
              items={["Contact Us", "FAQs", "Shipping & Returns"]}
            />
            <FooterList
              title="Services"
              items={["Order Tracking", "contact Us ", "Sign Up"]}
            />
            <FooterList
              title="Terms and Policies"
              items={[
                "About Us",
                "Terms of Use",
                "Privacy Policy",
                "Return Policy",
                "Cookie Policy",
              ]}
              className="col-span-2 sm:col-span-1"
            />
          </div>
        </div>
      </div>
      <div className="text-center bg-primary text-primary-foreground py-1">
        <p>
          &copy; {currentYear} GroceryPlus - Smart Grocery, Delivered Fast. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
