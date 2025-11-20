import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyWebsitePortfolio from "./MyWebsitePortfolio.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./auth/loginPage/page.tsx";
import DashboardEditPortfolio from "./dashboard/editPortfolio/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyWebsitePortfolio />,
  },
  {
    path: "/auth/loginPage",
    element: <LoginPage />,
  },
  {
    path: "/dashboard/editPortfolio",
    element: <DashboardEditPortfolio />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
