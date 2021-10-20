import styled from "styled-components";
import { SidebarContainerProps } from "./dto/sidebar.dto";

export const SidebarContainer = styled.div<SidebarContainerProps>`
  min-width: 80px;
  max-width: 280px;
  width: 20%;
  background-image: linear-gradient(
      230deg,
      rgba(99, 212, 113, 0.9) 0%,
      rgba(35, 51, 41, 0.9) 74%
    ),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  color: white;
  height: 100vh;
`;

export const SidebarHeader = styled.h3`
  padding: 20px 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SidebarMenuItemsContainer = styled.div`
  padding: 20px 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SidebarMenuItem = styled.div`
  padding: 6px 20px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
`;

export const SidebarMenuItemText = styled.p``;
export const SidebarMenuItemIcon = styled.i`
  padding-right: 5px;
`;
