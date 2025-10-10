import { Container, HeaderNavLinks } from "@/shared/ui";
import {
  StyledLeftContent,
  StyledLimit,
  StyledLogo,
  StyledNavbar,
  StyledNavbarInner,
  StyledNickname,
  StyledProfile,
  StyledProfileInfo,
  StyledRightContent,
} from "./AppNavbar.styles";
import { useAuthContext } from "@/entities/User";
import { Avatar } from "@mui/material";

const links = [
  {
    to: "/app",
    children: "Overview",
  },
  {
    to: "/app/subscriptions",
    children: "Subscriptions",
  },
  {
    to: "/app/services",
    children: "Services",
  },
  {
    to: "/app/analytics",
    children: "Analytics",
  },
  {
    to: "app/calendar",
    children: "Calendar",
  },
];

const AppNavbar = () => {
  const { user } = useAuthContext();

  return (
    <StyledNavbar>
      <Container>
        <StyledNavbarInner>
          <StyledLeftContent>
            <StyledLogo to="/app" />
            <HeaderNavLinks links={links} />
          </StyledLeftContent>
          <StyledRightContent>
            {user && (
              <StyledProfile to="/app/settings/general">
                <Avatar />
                <StyledProfileInfo>
                  <StyledNickname>{user.username}</StyledNickname>
                  <StyledLimit>
                    0 / {user.limit} {user.currencyDetail.code} per moth
                  </StyledLimit>
                </StyledProfileInfo>
              </StyledProfile>
            )}
          </StyledRightContent>
        </StyledNavbarInner>
      </Container>
    </StyledNavbar>
  );
};

export default AppNavbar;
