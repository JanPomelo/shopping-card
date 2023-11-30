"use strict";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/Errorpage";
import Root from "./Root/Root";
import Terms from "./Terms/Terms";
import Faq from "./FAQ/Faq";
import Home from "./Home/Home";
import Item from "./Item/Item";
import { useEffect, useState } from "react";
import * as job from "node-schedule";
import Shop from "./Shop/Shop";
import Character from "../types/character";
import * as shlaami from "rickmortyapi";

const Router = () => {
  const [numbers, setNumbers] = useState([88, 22, 810, 432, 398]);
  const [card, setCard] = useState([] as Character[]);

  const bookHours = async () => {
    const locationPath = window.location.pathname;
    const location: number = Number(locationPath.substring(locationPath.lastIndexOf("/") + 1));
    const char: Character = await shlaami.getCharacter(location).then((data) => {
      return data.data;
    });
    const newChars = [...card];
    newChars.push(char);
    setCard(newChars);
  };

  useEffect(() => {
    const jobbi = job.scheduleJob({ hour: 0, minute: 0 }, () => {
      const arr: number[] = [];
      while (arr.length < 5) {
        const num: number = Math.floor(Math.random() * 826 + 1);
        let inside = false;
        for (let j = 0; j < arr.length; j++) {
          if (num === arr[j]) {
            inside = true;
          }
        }
        if (!inside) {
          arr.push(num);
        }
      }
      setNumbers(arr);
      job.cancelJob(jobbi);
    });
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root card={card} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home numbers={numbers} />,
        },
        {
          path: "shop",
          element: <Shop numbers={numbers} />,
        },
        {
          path: "/shop/:id",
          element: (
            <Item
              numbers={numbers}
              onBookClick={() => {
                bookHours();
              }}
            />
          ),
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
