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
import ShoppingCard from "./Shopping-Card/ShoppingCard";
import checkSale from "../globalFunctions";

const Router = () => {
  const [numbers, setNumbers] = useState([88, 22, 810, 432, 398]);
  const [card, setCard] = useState([] as Character[]);

  const bookHours = async () => {
    const hourSelect: HTMLSelectElement = document.getElementById("hours") as HTMLSelectElement;
    const hours = Number(hourSelect.value);
    const locationPath = window.location.pathname;
    const location: number = Number(locationPath.substring(locationPath.lastIndexOf("/") + 1));
    const char: Character = await shlaami.getCharacter(location).then((data) => {
      const char: Character = data.data;
      checkSale(char, numbers);
      char.hours = hours;
      return data.data;
    });
    let newChars = [] as Character[];
    if (checkCardForExist(char)) {
      newChars = [...card];
    } else {
      newChars = [...card];
      newChars.push(char);
    }
    setCard(newChars);
  };

  const checkCardForExist = (char: Character): boolean => {
    for (let i = 0; i < card.length; i++) {
      if (card[i].id === char.id) {
        card[i].hours! += char.hours!;
        return true;
      }
    }
    return false;
  };

  const plusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const index = Number(button.id.substring(0, button.id.lastIndexOf("-")));
    const newCard = [...card];
    newCard[index].hours!++;
    button.blur();
    setCard(newCard);
  };

  const minusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const index = Number(button.id.substring(0, button.id.lastIndexOf("-")));
    const newCard = [...card];
    if (newCard[index].hours! < 2) {
      newCard.splice(index, 1);
    } else {
      newCard[index].hours!--;
    }
    button.blur();
    setCard(newCard);
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
        {
          path: "shopping-card",
          element: (
            <ShoppingCard
              card={card}
              plusClick={(e) => {
                plusClick(e);
              }}
              minusClick={(e) => {
                minusClick(e);
              }}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
