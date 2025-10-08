import promoWaveBottom from "@/assets/waves/promoWaveBottom.svg";
import { Container } from "@/shared/ui";
import {
  PromoButton,
  StyledHeaderTitle,
  StyledPromoHeader,
  StyledPromoHeaderInner,
  StyledPromoText,
} from "./PromoHeader.styles";
import { Wave } from "@/shared/ui";
import { useNavigate } from "react-router";

const PromoHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledPromoHeader>
      <Container>
        <StyledPromoHeaderInner>
          <StyledHeaderTitle>
            Subscription tracking made simple
          </StyledHeaderTitle>

          <StyledPromoText>
            Easily track, manage, and never miss a subscription payment again.
            Stay in control of your expenses with one simple tool.
          </StyledPromoText>

          <PromoButton size="large" onClick={() => navigate("/login")}>
            Start Tracking
          </PromoButton>
        </StyledPromoHeaderInner>
      </Container>
      <Wave waveImage={promoWaveBottom} />
    </StyledPromoHeader>
  );
};

export default PromoHeader;
