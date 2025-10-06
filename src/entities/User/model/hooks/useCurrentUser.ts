import { useQuery } from "@tanstack/react-query";
import getCurrentUser from "../../api/getCurrentUser";
import { mapUserDto } from "../mappers";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    select: mapUserDto,
    enabled: !!localStorage.getItem("access_token"),
  });
};

export default useCurrentUser;
