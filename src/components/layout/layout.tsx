import React from "react";
import { MdAccountBalance, MdAccountTree, MdAnchor } from "react-icons/md";
import ROUTES from "../../common/routes/routes.dto";
import App from "../../pages/index.styles";
import MainContainer from "../main-view/main-view.styles";
import Sidebar from "../sidebar";
import { SidebarMenuItemDTO } from "../sidebar/dto/sidebar.dto";

function Layout(props) {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeaderImage = "/images/celtic-cross.svg";
  const menuItems: SidebarMenuItemDTO[] = [
    { name: "Home", path: ROUTES.HOME, icon: MdAccountBalance },
    { name: "Bíblia", path: ROUTES.BIBLE, icon: MdAccountTree },
    {
      name: "Westminster",
      path: "#",
      icon: MdAnchor,
      submenuItems: [
        {
          name: "Catecismo Menor",
          path: ROUTES.WESTMINSTER_SHORTER_CATECHISM,
          icon: MdAnchor,
        },
        {
          name: "Catecismo Maior",
          path: ROUTES.WESTMINSTER_LARGER_CATECHISM,
          icon: MdAnchor,
        },
      ],
    },
  ];

  return (
    <App>
      <Sidebar
        backgroundImage={sidebarBackgroundImage}
        sidebarHeaderImage={sidebarHeaderImage}
        sidebarMenuItems={menuItems}
      />
      <MainContainer>{props.children}</MainContainer>
    </App>
  );
}

export default Layout;
