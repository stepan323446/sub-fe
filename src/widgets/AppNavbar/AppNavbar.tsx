import { Container, HeaderNavLinks } from "@shared/ui";
import {
  StyledLeftContent,
  StyledLogo,
  StyledNavbar,
  StyledNavbarInner,
  StyledRightContent,
} from "./AppNavbar.styles";

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
  return (
    <StyledNavbar>
      <Container>
        <StyledNavbarInner>
          <StyledLeftContent>
            <StyledLogo to="/app" />
            <HeaderNavLinks links={links} />
          </StyledLeftContent>
          <StyledRightContent></StyledRightContent>
        </StyledNavbarInner>
      </Container>
    </StyledNavbar>
  );
};

export default AppNavbar;
