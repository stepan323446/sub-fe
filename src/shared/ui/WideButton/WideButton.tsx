import type { ButtonProps } from "@mui/material";
import { StyledWideButton } from "./WideButton.styles";

const WideButton = (props: ButtonProps) => {
  return <StyledWideButton {...props}>{props.children}</StyledWideButton>;
};

export default WideButton;
