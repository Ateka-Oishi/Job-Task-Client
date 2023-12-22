import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashHome/DashboardHome";
import Services from "../pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";
import { HideAuthRoutes } from "./HideRoutes";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "login",
        element: (
          <HideAuthRoutes>
            <Login />
          </HideAuthRoutes>
        ),
      },
      {
        path: "register",
        element: (
          <HideAuthRoutes>
            <Register />
          </HideAuthRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <DashboardLayout />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
        ],
      },
    ],
  },
]);
export default PublicRoutes;
