import type { ReactNode } from "react";
import { Grid } from "..";

interface SidebarLayoutProps {
  sidebarSide: "left" | "right";
  sidebarSize?: number;
  gap?: number;
  children?: ReactNode;
}

const SidebarLayout = ({
  sidebarSide,
  children,
  sidebarSize = 300,
  gap = 25,
}: SidebarLayoutProps) => {
  const gridDefaultTemplate =
    sidebarSide == "left" ? `${sidebarSize}px 1fr` : `1fr ${sidebarSize}px`;

  return (
    <Grid gap={gap} cols={{ default: gridDefaultTemplate, md: "1fr" }}>
      {children}
    </Grid>
  );
};

export default SidebarLayout;
