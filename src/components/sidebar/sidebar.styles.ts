import styled from "styled-components";
import defaultTheme from "../../common/styles/colors";
import {
  SidebarContainerProps,
  SidebarMenuItemProps,
  SidebarSubmenuItemProps,
  SidebarTogglerProps,
} from "./dto/sidebar.dto";

export const SidebarContainer = styled.div<SidebarContainerProps>`
  min-width: 80px;
  max-width: 280px;
  width: ${(props) => (props.isOpen ? "20%" : "5%")};
  background-image: linear-gradient(
      230deg,
      ${defaultTheme.secondary.rgbOpaque95} 0%,
      ${defaultTheme.secondary.rgbOpaque98} 74%
    ),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  color: ${defaultTheme.fourth.hex};
  height: 100vh;
  transition: all 0.5s ease;
`;

export const SidebarHeader = styled.div<SidebarTogglerProps>`
  > div {
    width: 100%;
    margin: 10px 0 !important;
  }
`;

export const SidebarMenuItemsContainer = styled.div``;

export const SidebarMenuItem = styled.div<SidebarMenuItemProps>`
  padding: 0px 20px;
  text-align: ${(props) => (props.isOpen ? "left" : "center")};
  font-weight: 600;
  margin-bottom: 10px;
  white-space: nowrap;
  position: relative;
  transition: all 0.5s ease;

  & > .submenu {
    margin-top: 10px;
  }

  & > span {
    ${(props) => !props.isOpen && "right: -15px;"};
  }

  &:hover {
    opacity: 0.8;
    transition: 0.5s ease all;
    cursor: pointer;
  }

  &:after {
    content: "";
    border: ${(props) =>
      props.selected
        ? `1.4px solid ${defaultTheme.fourth.hex}`
        : `1px solid ${defaultTheme.third.hex}`};
    background: ${(props) =>
      props.selected
        ? `${defaultTheme.fourth.hex}`
        : `${defaultTheme.third.hex}`};
    display: block;
    margin: 8px 0;
    filter: ${(props) =>
      props.selected
        ? `drop-shadow(3px -4px 5px ${defaultTheme.fourth.hex})`
        : `drop-shadow(0px 0px 0px ${defaultTheme.fourth.hex})`};
  }
`;

export const SidebarSubmenuItem = styled.div<SidebarSubmenuItemProps>`
  padding-left: 20px;
  text-align: ${(props) => (props.isSubmenuOpened ? "left" : "center")};
  font-weight: 600;
  margin-bottom: 10px;
  white-space: nowrap;
  position: relative;
  display: ${(props) => (props.isSubmenuOpened ? "block" : "none")};

  &:hover {
    opacity: 0.8;
    transition: 0.5s ease all;
    cursor: pointer;
  }

  &:after {
    content: "";
    border: ${(props) =>
      props.selected
        ? `1.4px solid ${defaultTheme.fourth.hex}`
        : `1px solid ${defaultTheme.third.hex}`};
    background: ${(props) =>
      props.selected
        ? `${defaultTheme.fourth.hex}`
        : `${defaultTheme.third.hex}`};
    display: block;
    margin: 8px 0;
    filter: ${(props) =>
      props.selected
        ? `drop-shadow(3px -4px 5px ${defaultTheme.fourth.hex})`
        : `drop-shadow(0px 0px 0px ${defaultTheme.fourth.hex})`};
  }
`;

export const SidebarMenuItemText = styled.p<SidebarTogglerProps>`
  display: ${(props) => (props.isOpen ? "inline" : "none")};
`;

export const SidebarDropdownIcon = styled.span<{ isSubmenuOpened: boolean }>`
  position: absolute;
  right: 0;
  padding-right: inherit;
  font-size: 18px;
  padding-left: 10px;
  margin-top: 5px;

  & > svg {
    transition: all 0.5s ease;
    transform: ${(props) =>
      props.isSubmenuOpened ? "rotate(180deg)" : "rotate(0deg)"};
  }

  &:hover {
    transition: 0.5s ease all;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const SidebarMenuItemIcon = styled.i<SidebarTogglerProps>`
  font-size: 20px;
  padding-right: ${(props) => (props.isOpen ? "10px" : "0")};
  transition: all 0.5s ease;
  bottom: -3px;
  position: relative;
`;

export const SidebarTogglerContainer = styled.div<SidebarTogglerProps>`
  position: absolute;
  min-width: 80px;
  max-width: 280px;
  width: ${(props) => (props.isOpen ? "20%" : "5%")};
  bottom: 2.5%;
  transition: all 0.5s ease;
`;

export const SidebarToggler = styled.div<SidebarTogglerProps>`
  display: flex;
  position: ${(props) => (props.isOpen ? "absolute" : "relative")};
  right: ${(props) => (props.isOpen ? "10%" : "unset")};
  bottom: 0;
  font-size: 22.5px;
  align-items: center;
  justify-content: center;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease all;
    cursor: pointer;
    transform: scale(1.1)
      rotate(${(props) => (props.isOpen ? "0deg" : "180deg")});
  }
`;
