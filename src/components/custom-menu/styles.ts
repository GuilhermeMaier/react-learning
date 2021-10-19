import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background: red;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 25px;
  font-size: 16px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuNav = styled.div`
  background: red;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MenuWrap = styled.div`
  width: 100%;
`;

export default Nav;
