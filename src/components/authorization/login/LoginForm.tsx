import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      {/* Email Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Mail className="size-4 md:size-5" />
        </div>
        <Input
          type="email"
          placeholder="Sarahen@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Lock className="size-4 md:size-5" />
        </div>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
          required
        />
      </div>

      {/* Forgot Password */}
      <div className="text-left">
        <a
          href="#"
          className="text-xs md:text-sm text-gray-600 hover:text-gray-900 hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-10 md:h-12 bg-[#014162] hover:bg-[#014162]/90 text-white font-medium text-sm md:text-base"
      >
        Continue
      </Button>
    </form>
  );
}
