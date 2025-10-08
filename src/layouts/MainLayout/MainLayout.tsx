import { AuthGuard } from "@/entities/User";
import { Toolbar } from "@mui/material";
import { AppNavbar } from "@/widgets";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <AuthGuard authType="User">
      <AppNavbar />
      <Toolbar />
      <Outlet />
    </AuthGuard>
  );
};

export default MainLayout;
