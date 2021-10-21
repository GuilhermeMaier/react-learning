import styled from "styled-components";
import { SidebarContainerProps, SidebarMenuItemProps } from "./dto/sidebar.dto";

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

export const SidebarMenuItemsContainer = styled.div``;

export const SidebarMenuItem = styled.div<SidebarMenuItemProps>`
  padding: 0px 20px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.8;
    transition: 0.5s ease all;
  }

  &:after {
    content: "";
    border: ${(props) =>
      props.selected ? "1.4px solid white" : "1px solid #8db597"};
    background: ${(props) => (props.selected ? "white" : "#8db597")};
    display: block;
    margin: 8px 0;
    filter: ${(props) =>
      props.selected
        ? "drop-shadow(3px -4px 5px white)"
        : "drop-shadow(0px 0px 0px white)"};
  }
`;

export const SidebarMenuItemText = styled.p`
  display: inline;
`;

export const SidebarMenuItemIcon = styled.i`
  font-size: 20px;
  padding-right: 10px;
  bottom: -3px;
  position: relative;
`;
