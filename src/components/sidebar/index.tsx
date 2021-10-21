import React, { useState } from "react";
import { MdSwitchRight } from "react-icons/md";
import { SidebarProps } from "./dto/sidebar.dto";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuItemIcon,
  SidebarMenuItemsContainer,
  SidebarMenuItemText,
  SidebarToggler,
  SidebarTogglerContainer,
} from "./sidebar.styles";

const Sidebar = (props: SidebarProps) => {
  const { backgroundImage, sidebarHeader, sidebarMenuItems } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sidebarMenuItems[0].name
  );

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };

  const menuItemsJSX = sidebarMenuItems.map((item, index) => {
    return (
      <SidebarMenuItem
        key={index}
        selected={selectedMenuItem === item.name}
        onClick={() => handleMenuItemClick(item.name)}
      >
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
      <SidebarTogglerContainer>
        <SidebarToggler
          isOpen={isSidebarOpen}
          onClick={() => {
            setSidebarOpen(!isSidebarOpen);
          }}
        >
          <MdSwitchRight />
        </SidebarToggler>
      </SidebarTogglerContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
