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
import AddUser from "./components/form/AddUser";
import EditUser from "./components/form/EditUser";
import ViewUser from "./components/form/ViewUser";
import AddProject from "./components/form/AddProject";

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
        { path: "adduser", element: <AddUser /> },
        { path: "edituser/:id", element: <EditUser /> },
        { path: "viewuser/:id", element: <ViewUser /> },
        { path: "addproject", element: <AddProject /> },
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
