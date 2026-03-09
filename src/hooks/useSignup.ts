import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { registerUser, type SignupCredentials } from "@/lib/api/auth.api";
import { useToken } from "./useToken";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useToken();
  const navigate = useNavigate();

  const signup = async (credentials: SignupCredentials) => {
    setIsLoading(true);
    try {
      const response = await registerUser(credentials);

      if (response.success) {
        // Save token
        setToken(response.data.token);

        // Show success message
        toast.success(response.message || "Registration successful!");

        // Log user data (optional)
        console.log("User registered:", response.data.user);

        // Navigate to home page
        navigate("/");

        return { success: true, data: response.data };
      }
    } catch (error: unknown) {
      // Handle error
      const axiosError = error as AxiosError<{
        message?: string;
        errors?: Record<string, string[]>;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        "Registration failed. Please try again.";

      // Show field-specific errors if available
      const fieldErrors = axiosError.response?.data?.errors;
      if (fieldErrors) {
        Object.entries(fieldErrors).forEach(([field, messages]) => {
          toast.error(`${field}: ${messages.join(", ")}`);
        });
      } else {
        toast.error(errorMessage);
      }

      console.error("Signup error:", error);

      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signup,
    isLoading,
  };
};
