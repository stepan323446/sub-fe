import type { OnlyChildrenProps } from "@/shared/index";
import { AuthContext } from "./AuthContext";
import useLoginMutation from "../model/hooks/useLoginMutation";
import useCurrentUser from "../model/hooks/useCurrentUser";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: OnlyChildrenProps) => {
  const {
    data: user,
    refetch: refetchUser,
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
  } = useCurrentUser();
  const loginMutation = useLoginMutation();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (isLoadingUser) setIsAuthenticated(null);

    setIsAuthenticated(!!user);
  }, [user, isLoadingUser]);

  const login = (email: string, password: string) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          refetchUser();
        },
      },
    );
  };

  const refreshUserData = () => {
    refetchUser();
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    queryClient.removeQueries({ queryKey: ["current-user"] });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        refreshUserData,
        isFetchingUser,
        isFetchingLogin: loginMutation.isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
