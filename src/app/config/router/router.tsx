import { createBrowserRouter } from "react-router";
import * as page from "@/pages";
import { AuthLayout, MainLayout } from "@/layouts";

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
    ],
  },
]);

export default router;
