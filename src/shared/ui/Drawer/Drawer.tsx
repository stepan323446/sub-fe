import { Drawer as MuiDrawer } from "@mui/material";
import type { ComponentProps } from "react";

type DrawerProps = ComponentProps<typeof MuiDrawer>;

const Drawer = (props: DrawerProps) => {
  return <MuiDrawer {...props}>{props.children}</MuiDrawer>;
};

export default Drawer;
