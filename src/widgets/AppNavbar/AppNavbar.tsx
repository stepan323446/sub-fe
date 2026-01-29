import { Container, HeaderNavLinks } from "@/shared/ui";
import {
  StyledBurgerMenu,
  StyledLeftContent,
  StyledLogo,
  StyledMobileHidden,
  StyledNavbar,
  StyledNavbarInner,
  StyledRightContent,
} from "./AppNavbar.styles";
import { useAuthContext } from "@/entities/User";
import { useState } from "react";
import { Drawer } from "@/shared/ui";
import { Profile } from "./ui";
import { Divider } from "@mui/material";

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
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user } = useAuthContext();

  const toggleMobileDrawer = (newOpen: boolean) => {
    setMobileMenu(newOpen);
  };

  return (
    <>
      <StyledNavbar>
        <Container>
          <StyledNavbarInner>
            <StyledLeftContent>
              <StyledLogo to="/app" />
              <StyledMobileHidden>
                <HeaderNavLinks links={links} />
              </StyledMobileHidden>
            </StyledLeftContent>
            <StyledRightContent>
              <StyledBurgerMenu
                isActive={mobileMenu}
                onClick={() => toggleMobileDrawer(!mobileMenu)}
              />
              <StyledMobileHidden>
                <Profile user={user} />
              </StyledMobileHidden>
            </StyledRightContent>
          </StyledNavbarInner>
        </Container>

        <Drawer open={mobileMenu} onClose={() => toggleMobileDrawer(false)}>
          <Profile
            sx={{ padding: 1 }}
            user={user}
            onClick={() => toggleMobileDrawer(false)}
          />
          <Divider />
          <HeaderNavLinks
            links={links}
            isVertical={true}
            onClickItem={() => toggleMobileDrawer(false)}
          />
        </Drawer>
      </StyledNavbar>
    </>
  );
};

export default AppNavbar;
