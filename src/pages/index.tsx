import Link from "next/link";
import React, { useState } from "react";
import ROUTES from "../common/routes/routes.dto.ts";
import GlobalStyle from "../common/styles/global";
import Sidebar from "../components/sidebar";
import Home from "./home";
import { App, MainContainer } from "./index.styles";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeader = "Símbolos de Fé";
  const menuItems = ["Home", "Bible", "Westminster"];

  return (
    <>
      <GlobalStyle />
      <App id="App">
        <Sidebar
          backgroundImage={sidebarBackgroundImage}
          sidebarHeader={sidebarHeader}
          sidebarMenuItems={menuItems}
        />
        <MainContainer>
          <Home />
        </MainContainer>
      </App>
    </>
  );
}

export default Application;
