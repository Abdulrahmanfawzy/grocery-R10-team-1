import{Link} from 'react-router-dom'
import { Clock, CreditCard, Crown, Gift, HelpCircle, LayoutDashboard, List, MapPin, Settings, Shield, User } from "lucide-react";
const  MenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, url: "/profile/dashboard" },
  { icon: User, label: "Personal Info", url: "/profile/info" },
  { icon: CreditCard, label: "Payment & Wallet", url: "/profile/wallet" },
  { icon: Clock, label: "Order History", url: "/profile/orders" },
  { icon: List, label: "Smart Lists", url: "/profile/list" },
  { icon: MapPin, label: "Addresses", url: "/profile/addresses" },
  { icon: Shield, label: "Security & Login", url: "/profile/security" },
  { icon: Gift, label: "Loyalty & Rewards", url: "/profile/rewards" },
  { icon: HelpCircle, label: "Help & Support", url: "/profile/support" },
  { icon: Settings, label: "Settings", url: "/profile/settings"},
];

function SideBar() {
  return (
    <aside className="w-fit h-fit hidden lg:block shrink-0 rounded-lg  border border-border ">
      {/* User Data  */}
      <div className="bg-card   p-5 border-b">
        <div className="flex items-center gap-5 mb-6 ">
          <div className="w-20 h-20 rounded-full bg-muted relative">
            <img src="/public/ImageWithFallback.png" alt="User Photo"  className="w-fit rounded-full"/>
            <span className="absolute bottom-0 right-0 bg-[#F7FCFF] p-1
            rounded-full"><Crown className=" text-yellow-400"/></span>
          </div>
          <div>
            <p className="font-semibold text-card-foreground">Sarah</p>
            <p className="text-sm text-primary font-medium">Gold Member</p>
          </div>
        </div>
      </div>
      {/* User Data  */}

      {/* Sub Routes  */}
      <nav className="py-2 flex flex-col gap-2">
        {MenuItems.map((item) => (
            <Link to={item.url} key={item.label} className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-all duration-300 ${
                item.active
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-sidebar-foreground bg-[#F7FCFF] hover:bg-primary hover:text-primary-foreground"
            }`}
            >
                <item.icon className="w-5 h-5"/>
                {item.label}
            </Link>
        ))}
      </nav>
      {/* Sub Routes  */}
    </aside>
  );
}

export default SideBar;
