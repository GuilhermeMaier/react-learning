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

export default Nav;
