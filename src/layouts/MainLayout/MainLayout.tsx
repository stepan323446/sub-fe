import { AuthGuard } from "@/entities/User";
import { Toolbar } from "@mui/material";
import { AppNavbar } from "@/widgets";
import { Outlet } from "react-router";
import { StyledDistance } from "./MainLayout.styles";

const MainLayout = () => {
  return (
    <AuthGuard authType="User">
      <AppNavbar />
      <Toolbar />
      <StyledDistance />
      <Outlet />
    </AuthGuard>
  );
};

export default MainLayout;
