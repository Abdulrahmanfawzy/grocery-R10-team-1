import { Facebook, Instagram, Linkedin } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <Instagram className="h-6 w-6 text-gray-800 cursor-pointer hover:text-primary transition-colors" />

      <Linkedin className="h-6 w-6 text-gray-800 cursor-pointer hover:text-primary transition-colors" />
      <Facebook className="h-6 w-6 text-gray-800 cursor-pointer hover:text-primary transition-colors" />
    </div>
  );
};

export default SocialIcons;
