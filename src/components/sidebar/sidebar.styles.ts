import React from "react";
import styled from "styled-components";
import * as celtic from "../../common/images/celtic-cross.jpg";

export const SidebarContainer = styled.div`
  min-width: 80px;
  max-width: 280px;
  width: 20%;
  background-image: linear-gradient(
      230deg,
      rgba(3, 177, 77, 0.9) 0%,
      rgba(4, 98, 29, 0.9) 74%
    ),
    url("images/celtic3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
`;
