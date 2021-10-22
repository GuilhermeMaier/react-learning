import styled from "styled-components";
import {
  SidebarContainerProps,
  SidebarMenuItemProps,
  SidebarTogglerProps,
} from "./dto/sidebar.dto";

export const SidebarContainer = styled.div<SidebarContainerProps>`
  min-width: 80px;
  max-width: 280px;
  width: ${(props) => (props.isOpen ? "20%" : "5%")};
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

export const SidebarHeader = styled.div<SidebarTogglerProps>`
  > h3 {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
  > img {
    display: ${(props) => (props.isOpen ? "none" : "table")};
    margin: 0 auto;
    width: 50px;
  }
`;

export const SidebarHeaderText = styled.h3`
  padding: 20px 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SidebarMenuItemsContainer = styled.div``;

export const SidebarMenuItem = styled.div<SidebarMenuItemProps>`
  padding: 0px 20px;
  text-align: ${(props) => (props.isOpen ? "left" : "center")};
  font-weight: 600;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.8;
    transition: 0.5s ease all;
    cursor: pointer;
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

export const SidebarMenuItemText = styled.p<SidebarTogglerProps>`
  display: ${(props) => (props.isOpen ? "inline" : "none")};
`;

export const SidebarMenuItemIcon = styled.i<SidebarTogglerProps>`
  font-size: 20px;
  padding-right: ${(props) => (props.isOpen ? "10px" : "0")};
  bottom: -3px;
  position: relative;
`;

export const SidebarTogglerContainer = styled.div<SidebarTogglerProps>`
  position: absolute;
  min-width: 80px;
  max-width: 280px;
  width: ${(props) => (props.isOpen ? "20%" : "5%")};
  bottom: 2.5%;
`;

export const SidebarToggler = styled.div<SidebarTogglerProps>`
  display: ${(props) => (props.isOpen ? "flex" : "table")};
  position: ${(props) => (props.isOpen ? "absolute" : "relative")};
  right: ${(props) => (props.isOpen ? "10%" : "unset")};
  bottom: 0;
  font-size: 22.5px;
  margin: ${(props) => (props.isOpen ? "" : "0 auto")};

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease all;
    cursor: pointer;
    transform: scale(1.1) rotate(180deg);
  }
`;
