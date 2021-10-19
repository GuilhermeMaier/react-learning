import React from "react";
import { SidebarProps } from "./dto/sidebar.dto";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuItemsContainer,
} from "./sidebar.styles";

const Sidebar = (props: SidebarProps) => {
  const { backgroundImage, sidebarHeader, sidebarMenuItems } = props;
  const menuItemsJSX = sidebarMenuItems.map((item, index) => {
    return <SidebarMenuItem key={index}>{item}</SidebarMenuItem>;
  });
  return (
    <SidebarContainer backgroundImage={backgroundImage}>
      <SidebarHeader>{sidebarHeader}</SidebarHeader>
      <SidebarMenuItemsContainer>{menuItemsJSX}</SidebarMenuItemsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
