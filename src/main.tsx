import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyWebsitePortfolio from "./MyWebsitePortfolio.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./loginPage/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyWebsitePortfolio />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
