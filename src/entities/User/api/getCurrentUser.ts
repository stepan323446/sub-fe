import type { UserDto } from "./types";
import { axiosInstance } from "@shared";

const getCurrentUser = async () => {
  const results = await axiosInstance.get<UserDto>("/api/users/user-info/");

  return results.data;
};

export default getCurrentUser;
