import rightWave from "@/assets/waves/authWaveRight.svg";
import authBackground from "@/assets/auth_background.png";
import { Toolbar } from "@mui/material";
import { Image, Wave, WhiteBackground } from "@/shared/ui";
import { WelcomeNavbar } from "@/widgets";
import { Outlet } from "react-router";
import {
  StyledAuthContentContainer,
  StyledAuthContentWrapper,
  StyledImageOpacity,
  StyledImageWrapper,
  StyledLayoutWrapper,
} from "./AuthLayout.styles";

const AuthTemplate = () => {
  return (
    <>
      <WelcomeNavbar showButton={false} />
      <Toolbar />

      <StyledLayoutWrapper>
        <StyledImageWrapper>
          <StyledImageOpacity>
            <Image
              src={authBackground}
              width={"100%"}
              height={"100%"}
              fit="cover"
            />
          </StyledImageOpacity>
          <Wave
            waveImage={rightWave}
            horizontal="right"
            vertical="bottom"
            isHorizontalWave={false}
          />
        </StyledImageWrapper>
        <WhiteBackground>
          <StyledAuthContentContainer>
            <StyledAuthContentWrapper>
              <Outlet />
            </StyledAuthContentWrapper>
          </StyledAuthContentContainer>
        </WhiteBackground>
      </StyledLayoutWrapper>
    </>
  );
};

export default AuthTemplate;
