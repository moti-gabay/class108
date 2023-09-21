import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "../components/layout/Category";
import NotFound404 from "../pages/NotFound404";
import Layout from "../components/layout/Layout";
import AddLink from "../forms/addLink";
import LinkProvider from "../contexts/LinkContext";
import { useEffect } from "react";
import axios from "axios";
import LinkInfo from "../pages/LinkInfo";
import CategoryProvider from "../contexts/CategoryContext";
import EditLink from "../forms/EditLink"
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Category /> },
        { path: "/LinkInfo/:id", element: <LinkInfo /> },
        { path: "/addLink", element: <AddLink /> },
        { path: "/editLink/:id", element: <EditLink /> },
      ],
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);

  const getCategoryReq = async () => {
    const { data } = await axios.get(
      "http://localhost:3003/category/categoryList"
    );
    console.log(data);
  };
  const getLinkListReq = async () => {
    const { data } = await axios.get("http://localhost:3003/links/linksList");
    console.log(data);
  };

  useEffect(() => {
    //  getCategoryReq();
    // getLinkListReq();
  }, []);

  return (
    <CategoryProvider>
      <LinkProvider>
        <RouterProvider router={router} />
      </LinkProvider>
    </CategoryProvider>
  );
};
export default AppRoutes;
