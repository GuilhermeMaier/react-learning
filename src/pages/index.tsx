import Link from "next/link";
import React, { useState } from "react";
import ROUTES from "../common/routes/routes.dto.ts";
import GlobalStyle from "../common/styles/global";
import Sidebar from "../components/sidebar";
import Home from "./home";
import { App, MainContainer } from "./index.styles";

function Application() {
  return (
    <>
      <GlobalStyle />
      <App>
        <Sidebar />
        <MainContainer>
          <Home />
        </MainContainer>
      </App>
    </>
  );
}

export default Application;
