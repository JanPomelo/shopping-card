"use strict";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/Errorpage";
import Root from "./Root/Root";
import Terms from "./Terms/Terms";
import Faq from "./FAQ/Faq";
import Home from "./Home/Home";
import Item from "./Item/Item";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <></>,
        },
        {
          path: "/shop/:id",
          element: <Item />,
        },
        {
          path: "Terms-and-conditions",
          element: <Terms />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
