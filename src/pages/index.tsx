import React from "react";
import ROUTES from "../common/routes/routes.dto";
import Sidebar from "../components/sidebar";
import { SidebarMenuItem } from "../components/sidebar/dto/sidebar.dto";
import App, { MainContainer } from "./index.styles";
import { MdAccountBalance, MdAccountTree, MdAnchor } from "react-icons/md";
import { NextSeo } from "next-seo";
import MainView from "../components/main-view";
import Layout from "../components/layout/layout";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeaderImage = "/images/celtic-cross.svg";
  const menuItems: SidebarMenuItem[] = [
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
    <>
      <App>
        <NextSeo title="Símbolos de Fé" />
        {/* <Sidebar
          backgroundImage={sidebarBackgroundImage}
          sidebarHeaderImage={sidebarHeaderImage}
          sidebarMenuItems={menuItems}
        /> */}
        <Layout>
          <div>Teste</div>
        </Layout>
        {/* <MainView /> */}
      </App>
    </>
  );
}

export default Application;
