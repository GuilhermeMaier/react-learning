import React from "react";
import ROUTES from "../common/routes/routes.dto";
import GlobalStyle from "../common/styles/global.styles";
import Sidebar from "../components/sidebar";
import { SidebarMenuItem } from "../components/sidebar/dto/sidebar.dto";
import App, { MainContainer } from "./index.styles";
import { MdAccountBalance, MdAccountTree, MdAnchor } from "react-icons/md";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeader = "Símbolos de Fé";
  // const menuItems: SidebarMenuItems[] = [
  //   { name: "Home", path: ROUTES.HOME, icon: "MdAccountBalance" },
  //   { name: "Bíblia", path: ROUTES.BIBLE, icon: "MdAccountTree" },
  //   {
  //     name: "Westminster",
  //     icon: "MdAnchor",
  //     submenuItems: [
  //       { name: "Catecismo Menor", path: ROUTES.WESTMINSTER_SHORTER_CATECHISM },
  //       { name: "Catecismo Maior", path: ROUTES.WESTMINSTER_LARGER_CATECHISM },
  //     ],
  //   },
  // ];
  const menuItems: SidebarMenuItem[] = [
    { name: "Home", path: ROUTES.HOME, icon: MdAccountBalance },
    { name: "Bíblia", path: ROUTES.BIBLE, icon: MdAccountTree },
    {
      name: "Westminster",
      icon: MdAnchor,
      submenuItems: [
        { name: "Catecismo Menor", path: ROUTES.WESTMINSTER_SHORTER_CATECHISM },
        { name: "Catecismo Maior", path: ROUTES.WESTMINSTER_LARGER_CATECHISM },
      ],
    },
  ];

  return (
    <>
      <App>
        <GlobalStyle />
        <Sidebar
          backgroundImage={sidebarBackgroundImage}
          sidebarHeader={sidebarHeader}
          sidebarMenuItems={menuItems}
        />
        <MainContainer />
      </App>
    </>
  );
}

export default Application;
