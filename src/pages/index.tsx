import React from "react";
import GlobalStyle from "../common/styles/global.styles";
import App, { MainContainer, SidebarContainer } from "./index.styles";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeader = "Símbolos de Fé";
  const menuItems = ["Home", "Bible"];

  return (
    <>
      <App>
        <GlobalStyle />
        <SidebarContainer />
        <MainContainer />
      </App>
    </>
  );
}

export default Application;
