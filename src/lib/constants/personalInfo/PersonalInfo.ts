import { Mail, Phone, User } from "lucide-react";

export const formFields = [
  {
    name: "firstname",
    label: "First Name",
    type: "text",
    icon: User,
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
    icon: User,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    icon: Mail,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    icon: Phone,
  },
] as const;