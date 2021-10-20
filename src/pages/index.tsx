import React from "react";
import GlobalStyle from "../common/styles/global.styles";
import Sidebar from "../components/sidebar";
import App, { MainContainer, SidebarContainer } from "./index.styles";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeader = "Símbolos de Fé";
  const menuItems = ["Home", "Bible"];

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
