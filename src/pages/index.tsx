import React from "react";
import App, { MainContainer, SidebarContainer } from "./index.styles";

function Application() {
  const sidebarBackgroundImage = "images/celtic.jpg";
  const sidebarHeader = "Símbolos de Fé";
  const menuItems = ["Home", "Bible"];

  return (
    <>
      <App>
        <SidebarContainer />
        <MainContainer />
      </App>
    </>
  );
}

export default Application;
