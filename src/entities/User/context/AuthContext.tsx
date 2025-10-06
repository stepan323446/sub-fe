import { createContext, useContext } from "react";
import type { User } from "../model/types";

interface AuthContextType {
  user: User | undefined;
  isAuthenticated: boolean | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  refreshUserData: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");

  return context;
};
