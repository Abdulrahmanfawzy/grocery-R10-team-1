import { useState, useEffect } from "react";

const TOKEN_KEY = "token";

export const useToken = () => {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem(TOKEN_KEY);
  });

  // Save token to localStorage
  const setToken = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setTokenState(newToken);
  };

  // Get token from localStorage
  const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  };

  // Remove token from localStorage
  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    setTokenState(null);
  };

  // Sync with localStorage changes (useful for multiple tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === TOKEN_KEY) {
        setTokenState(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return {
    token,
    setToken,
    getToken,
    removeToken,
  };
};
