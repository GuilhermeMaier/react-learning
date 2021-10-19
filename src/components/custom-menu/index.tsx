import React, { useState } from "react";
import { MdOutlineClose, MdWorkspaces } from "react-icons/md";
import { StaticRouter } from "react-router-dom";
import { MenuNav, MenuWrap, Nav, NavIcon } from "./styles";

const CustomMenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <StaticRouter>
        <Nav>
          <NavIcon to="#">
            <MdWorkspaces onClick={() => setMenu(!menu)} />
          </NavIcon>
        </Nav>
      </StaticRouter>
      <MenuNav>
        <MenuWrap>
          <NavIcon to="#">
            <MdOutlineClose onClick={() => setMenu(!menu)} />
          </NavIcon>
        </MenuWrap>
      </MenuNav>
      <div>Este é o menu</div>
    </>
  );
};

export default CustomMenu;
