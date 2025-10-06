import { Button } from "@mui/material";
import type { ComponentProps } from "react";
import {
  faGoogle,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AuthType = "google";

type AuthSocialButtonProps = {
  authType: AuthType;
} & ComponentProps<typeof Button>;

interface AuthConfig {
  icon: IconDefinition;
  color: string;
}
const types: Record<AuthType, AuthConfig> = {
  google: {
    icon: faGoogle,
    color: "#FF5E5E",
  },
};

const AuthSocialButton = ({ authType, ...props }: AuthSocialButtonProps) => {
  const type = types[authType];

  return (
    <Button sx={{ background: type.color }} {...props}>
      <FontAwesomeIcon icon={type.icon} />
      {props.children}
    </Button>
  );
};

export default AuthSocialButton;
