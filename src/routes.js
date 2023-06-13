import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import ReturnPage from "./pages/ReturnPage";
import CategoriesPage from "./pages/CategoriesPage";
import SubCategories from "./pages/SubCategories";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import BrandPage from "./pages/BrandPage";
import PurchesePage from "./pages/PurchesePage";
import DashboardAppPage from "./pages/DashboardAppPage";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "categories", element: <CategoriesPage /> },
        { path: "sub_categories", element: <SubCategories /> },
        { path: "products", element: <ProductsPage /> },
        { path: "brand", element: <BrandPage /> },
        { path: "purchese", element: <PurchesePage /> },
        { path: "return", element: <ReturnPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
