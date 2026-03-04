import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { notificationsSection } from "@/lib/types/personalInfo";
import { ChevronDown, Edit, Mail, Phone, Plus, User } from "lucide-react";

const notificationSections: notificationsSection[] = [
  {
    title: "Orders Updates",
    items: [
      { label: "Order Confirmation", checked: false },
      { label: "Order Shipped", checked: true },
      { label: "Delivery Updates", checked: false },
      { label: "Out-of-Stock Alerts", checked: true },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Email Notifications", checked: false },
      { label: "SMS Notifications", checked: true },
      { label: "Push Notifications", checked: false },
    ],
  },
  {
    title: "Account Reminders",
    items: [
      { label: "Cart Reminders", checked: false },
      { label: "Payment & Billing Notifications", checked: true },
      { label: "Account Security Alerts", checked: false },
    ],
  },
];

function PersonalInfo() {
  return (
    <div>
      <h3 className=" font-semibold mb-2">Personal Information</h3>
      <p className="text-sm opacity-70">
        Manage your personal details and preferences
      </p>

      {/*  Picture  */}
      <div className="mt-8">
        <h3 className="font-semibold">Profile Picture</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-17 h-17 overflow-hidden rounded-full">
            <img
              src="/public/ImageWithFallback.png"
              alt="User Photo"
              className="w-fit "
            />
          </div>
          <div className="">
            <input
              type="file"
              name="update-img"
              id="update-img"
              className="hidden"
            />
            <label
              htmlFor="update-img"
              className="bg-primary flex items-center gap-1 cursor-pointer rounded-sm w-fit p-1 text-accent text-xs"
            >
              <Plus className="w-4" />
              <span>Upload New Photo</span>
            </label>

            <p className="mt-4 opacity-50 text-sm">
              JPG, PNG or GIF. Max size 5MB
            </p>
          </div>
        </div>
      </div>
      {/*  Picture  */}

      {/* Basic Information */}
      <form className="bg-card rounded-lg border border-border p-6 my-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-card-foreground">
            Basic Information
          </h2>

          <Button
            className="cursor-pointer"
            type="submit"
            variant="outline"
            size="sm"
          >
            <Edit />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm text-muted-foreground mb-1 block"
            >
              First Name
            </label>

            <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="bg-transparent outline-none text-sm text-card-foreground w-full"
              />
            </div>
          </div>
          
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="text-sm text-muted-foreground mb-1 block"
            >
              Last Name
            </label>

            <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="bg-transparent outline-none text-sm text-card-foreground w-full"
              />
            </div>
          </div>
          {/* Last Name */}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm text-muted-foreground mb-1 block"
            >
              Email Address
            </label>

            <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <input
                id="email"
                name="email"
                type="email"
                className="bg-transparent outline-none text-sm text-card-foreground w-full"
              />
            </div>
          </div>
          {/* Email */}

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="text-sm text-muted-foreground mb-1 block"
            >
              Phone Number
            </label>

            <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <input
                id="phone"
                name="phone"
                type="tel"
                className="bg-transparent outline-none text-sm text-card-foreground w-full"
              />
            </div>
          </div>
          {/* Phone */}
        </div>
      </form>
      {/* Basic Information  */}

      {/* Language */}
      <form className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-3">Language</h2>

        <label
          htmlFor="language"
          className="text-sm text-muted-foreground mb-1 block"
        >
          Preferred Language
        </label>

        <div className="relative">
          <select
            id="language"
            name="language"
            className=" cursor-pointer appearance-none border border-border rounded-full px-6 py-2 text-sm text-card-foreground bg-transparent outline-none"
          >
            <option value="en-US">English (US)</option>
            <option value="en-UK">English (UK)</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>

          {/*  dropdown  */}
          <div className="pointer-events-none absolute left-28 top-1/2 -translate-y-1/2">
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </div>
          {/*  dropdown  */}
        </div>
      </form>
      {/* Language */}

      {/* Notification  */}
      <div className="bg-card rounded-lg border border-border p-4 mt-7">
        <h2 className="font-semibold text-card-foreground">
          Notification Preference
        </h2>
        <p className="text-sm my-4 text-muted-foreground mb-4">
          Manage notification based on your preference
        </p>

        {notificationSections.map((section, index) => (
          <div
            key={index}
          >
            <h3 className="font-semibold  text-card-foreground mb-3">
              {section.title}
            </h3>
            <div className={`space-y-3  bg-[#F7FCFF] p-3 rounded-md shadow ${index !== notificationSections.length -1 
              ? "mb-6"
              : ""
            }`}>
              {section.items.map((item, index) => (
                <label
                  htmlFor={`switch-${index}`}
                  key={item.label}
                  className={`flex items-center cursor-pointer justify-between p-2
                    ${index !== 0 
                      ?"border-t"
                    : ""}
                    `}
                >
                  <span className="text-sm text-card-foreground">
                    {item.label}
                  </span>
                  <Switch id={`switch-${index}`} defaultChecked={item.checked} className="cursor-pointer"/>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Notification  */}
    </div>
  );
}

export default PersonalInfo;
