"use strict";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/Errorpage";
import Root from "./Root/Root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
