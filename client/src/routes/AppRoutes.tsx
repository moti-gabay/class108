import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import Layout from "../components/layout/Layout";
import EditLink from "../forms/EditLink";
import Categories from "../components/layout/Category";
import { blue } from "@mui/material/colors";
import Add from "../components/layout/Add";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Categories /> },
        // { path: "/LinkInfo/:id", element: <LinkInfo /> },
        { path: "/addLink", element: <Add /> },
        { path: "/editLink/:id", element: <EditLink /> },
      ],
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);

  return (
    <div style={{ background: blue[100], height: "100vh", overflow: "auto" }}>
      <RouterProvider router={router} />
    </div>
  );
};
export default AppRoutes;
