import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Lock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <User className="size-4 md:size-5" />
        </div>

        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Mail className="size-4 md:size-5" />
        </div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Phone className="size-4 md:size-5" />
        </div>
        <Input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Lock className="size-4 md:size-5" />
        </div>
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={formData.rememberMe}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, rememberMe: checked as boolean })
          }
        />
        <label
          htmlFor="remember"
          className="text-xs md:text-sm text-gray-700 cursor-pointer select-none"
        >
          Remember me
        </label>
      </div>

      <Button
        type="submit"
        className="w-full h-10 md:h-12 bg-[#014162] hover:bg-[#014162]/90 text-white font-medium text-sm md:text-base"
      >
        Continue
      </Button>
    </form>
  );
}
