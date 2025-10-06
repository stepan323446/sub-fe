import { Container, Logo } from "@shared/ui";
import {
  StyledSpecialText,
  StyledNavbar,
  StyledNavbarInner,
} from "./WelcomeNavbar.styles";
import { Button } from "@mui/material";
import { Link } from "react-router";
import { useAuthContext } from "@entities/User";

interface WelcomeNavbarProps {
  showButton?: boolean;
}

const WelcomeNavbar = ({ showButton = true }: WelcomeNavbarProps) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <StyledNavbar>
      <Container>
        <StyledNavbarInner>
          <Link to="/">
            <Logo />
          </Link>
          <StyledSpecialText>No more surprise charges</StyledSpecialText>

          {!isAuthenticated && showButton && (
            <Button component={Link} to={"/login"}>
              Login
            </Button>
          )}
          {isAuthenticated && showButton && (
            <Button component={Link} to={"/app"}>
              Dashboard
            </Button>
          )}
        </StyledNavbarInner>
      </Container>
    </StyledNavbar>
  );
};

export default WelcomeNavbar;
