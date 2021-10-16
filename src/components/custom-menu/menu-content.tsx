import React from "react";
import ROUTES from "../../common/routes.dto.ts";
import { MdBook, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const MenuContent = [
  {
    title: "Bíblia",
    path: ROUTES.BIBLE,
    icon: <MdBook />,
    iconOpened: <MdKeyboardArrowUp />,
    iconClosed: <MdKeyboardArrowDown />,
  },
  {
    title: "Catecismos",
    icon: <MdBook />,
    iconOpened: <MdKeyboardArrowUp />,
    iconClosed: <MdKeyboardArrowDown />,
    subMenu: [
      {
        title: "Westminster",
        icon: <MdBook />,
        iconOpened: <MdKeyboardArrowUp />,
        iconClosed: <MdKeyboardArrowDown />,
        subMenu: [
          {
            title: "Breve",
            path: ROUTES.WESTMINSTER_SHORTER_CATECHISM,
            icon: <MdBook />,
            iconOpened: <MdKeyboardArrowUp />,
            iconClosed: <MdKeyboardArrowDown />,
          },
          {
            title: "Maior",
            path: ROUTES.WESTMINSTER_LARGER_CATECHISM,
            icon: <MdBook />,
            iconOpened: <MdKeyboardArrowUp />,
            iconClosed: <MdKeyboardArrowDown />,
          },
        ],
      },
    ],
  },
];
