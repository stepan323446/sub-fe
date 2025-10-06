import type { TokenObtainDto } from "./types";
import { axiosInstance } from "@shared";

interface postAuthFnAttrs {
  email: string;
  password: string;
}

const postAuthLogin = async ({ email, password }: postAuthFnAttrs) => {
  const results = await axiosInstance.post<TokenObtainDto>("/api/auth/login/", {
    email,
    password,
  });

  return results.data;
};

export default postAuthLogin;
