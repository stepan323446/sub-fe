import { Link as RouterLink } from "react-router";
import { Link as MuiLink, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";

interface LinkProps {
  to: string;
  fontSize?: number;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export const Link = ({ to, children, sx }: LinkProps) => {
  return (
    <MuiLink sx={sx} component={RouterLink} to={to}>
      {children}
    </MuiLink>
  );
};

export default Link;
