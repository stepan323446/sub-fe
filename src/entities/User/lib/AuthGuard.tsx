import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, type ReactNode } from "react";

interface AuthGuardProps {
  authType: "Guest" | "User" | "Admin";
  children?: ReactNode;
}

const AuthGuard = ({ authType, children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authType == "Guest" && isAuthenticated) {
      navigate("/app");
    }
    if (authType == "User" && isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, authType]);

  return <>{children}</>;
};

export default AuthGuard;
