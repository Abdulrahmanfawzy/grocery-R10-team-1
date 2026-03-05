import { Facebook, Instagram, Linkedin } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <Instagram className="h-6 w-6 text-gray-800" />

      <Linkedin className="h-6 w-6 text-gray-800" />
      <Facebook className="h-6 w-6 text-gray-800" />
    </div>
  );
};

export default SocialIcons;
