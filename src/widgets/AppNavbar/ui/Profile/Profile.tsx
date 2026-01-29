import { Avatar, Skeleton, type SxProps } from "@mui/material";
import {
  StyledLimit,
  StyledNickname,
  StyledProfile,
  StyledProfileInfo,
} from "./Profile.styles";
import type { User } from "@/entities/User";

interface ProfileProps {
  user?: User;
  sx?: SxProps;
  onClick?: () => void;
}

const Profile = ({ user, sx, onClick }: ProfileProps) => {
  if (!user) return <Skeleton width={150} height={43} />;

  return (
    <StyledProfile sx={sx} to="/app/settings/general" onClick={onClick}>
      <Avatar />
      <StyledProfileInfo>
        <StyledNickname>{user.username}</StyledNickname>
        <StyledLimit>
          0 / {user.limit} {user.currencyDetail.code} per moth
        </StyledLimit>
      </StyledProfileInfo>
    </StyledProfile>
  );
};

export default Profile;
