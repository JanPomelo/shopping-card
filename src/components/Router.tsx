"use strict";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/Errorpage";
import Root from "./Root/Root";
import Terms from "./Terms/Terms";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "shop",
          element: <></>,
        },
        {
          path: "Terms-and-conditions",
          element: <Terms />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
