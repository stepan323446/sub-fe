import { useState, type ReactNode } from "react";
import { StyledContent, StyledMobileButton } from "./Sidebar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "..";

interface SidebarProps {
  title: string;
  icon?: IconProp;
  children?: ReactNode;
}

const Sidebar = ({ children, title, icon = faCaretDown }: SidebarProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <StyledMobileButton onClick={() => setOpenDrawer(true)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={icon} />
      </StyledMobileButton>
      <StyledContent>{children}</StyledContent>
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Sidebar;
