import { Container, PanelWrapper, Sidebar, SidebarLayout } from "@/shared/ui";
import { Typography } from "@mui/material";
import { Outlet } from "react-router";
import { MenuContent } from "./ui";

const SettingsLayout = () => {
  return (
    <Container>
      <Typography typography="h1">Settings</Typography>

      <SidebarLayout sidebarSide="left">
        <Sidebar title="Menu">
          <PanelWrapper>
            <MenuContent />
          </PanelWrapper>
        </Sidebar>
        <Outlet />
      </SidebarLayout>
    </Container>
  );
};

export default SettingsLayout;
