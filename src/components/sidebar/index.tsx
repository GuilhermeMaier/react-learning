import React, { useState } from "react";
import { SidebarProps } from "./dto/sidebar.dto";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuItemIcon,
  SidebarMenuItemsContainer,
  SidebarMenuItemText,
} from "./sidebar.styles";

const Sidebar = (props: SidebarProps) => {
  const { backgroundImage, sidebarHeader, sidebarMenuItems } = props;

  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sidebarMenuItems[0].name
  );

  const menuItemsJSX = sidebarMenuItems.map((item, index) => {
    return (
      <SidebarMenuItem key={index} selected={selectedMenuItem === item.name}>
        <SidebarMenuItemIcon>
          {React.createElement(item.icon)}
        </SidebarMenuItemIcon>
        <SidebarMenuItemText>{item.name}</SidebarMenuItemText>
      </SidebarMenuItem>
    );
  });

  return (
    <SidebarContainer backgroundImage={backgroundImage}>
      <SidebarHeader>{sidebarHeader}</SidebarHeader>
      <SidebarMenuItemsContainer>{menuItemsJSX}</SidebarMenuItemsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
