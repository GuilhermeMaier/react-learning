import React from "react";
import { MdWorkspaces } from "react-icons/md";
import { StaticRouter } from "react-router-dom";
import { Nav, NavIcon } from "../../pages/styles";

const CustomMenu = () => {
  return (
    <>
      <StaticRouter>
        <Nav>
          <NavIcon to="">
            <MdWorkspaces />
          </NavIcon>
        </Nav>
      </StaticRouter>
      <div>Este é o menu</div>
    </>
  );
};

export default CustomMenu;
