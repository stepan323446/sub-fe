import { createBrowserRouter } from "react-router";
import * as page from "@/pages";
import { AuthLayout, MainLayout, SettingsLayout } from "@/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <page.IndexPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <page.LoginPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <page.DashboardPage />,
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "general",
            element: <page.GeneralSettingsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
