import type { ContactInterface } from "@/types/profile/contact/ContactTypes";
import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

interface Props {
  contactInfo: ContactInterface;
}

const Contact = ({ contactInfo }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <MessageCircle className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Live Chat</h3>
          <p className="text-sm opacity-70">Chat with our support team</p>
          <p className="text-xs mt-2 text-accent font-medium">
            Available now !
          </p>
        </div>
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <Phone className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Call Us</h3>
          <p className="text-sm opacity-70">
            {contactInfo.data.contact_info.phone}
          </p>
          <p className="text-xs mt-2 opacity-60">Mon-Sat 8AM-8PM</p>
        </div>
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <Mail className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm opacity-70">
            {contactInfo.data.contact_info.email}
          </p>
          <p className="text-xs mt-2 opacity-60">24-48 hour response</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
