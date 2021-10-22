import React, { useState } from "react";
import { MdSwitchRight } from "react-icons/md";
import { SidebarProps } from "./dto/sidebar.dto";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderText,
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
        isOpen={isSidebarOpen}
        onClick={() => handleMenuItemClick(item.name)}
      >
        <SidebarMenuItemIcon isOpen={isSidebarOpen}>
          {React.createElement(item.icon)}
        </SidebarMenuItemIcon>
        <SidebarMenuItemText isOpen={isSidebarOpen}>
          {item.name}
        </SidebarMenuItemText>
      </SidebarMenuItem>
    );
  });

  return (
    <SidebarContainer backgroundImage={backgroundImage} isOpen={isSidebarOpen}>
      <SidebarHeader isOpen={isSidebarOpen}>
        <img src={"images/celtic-cross.svg"} />
        <SidebarHeaderText>{sidebarHeader}</SidebarHeaderText>
      </SidebarHeader>
      <SidebarMenuItemsContainer>{menuItemsJSX}</SidebarMenuItemsContainer>
      <SidebarTogglerContainer isOpen={isSidebarOpen}>
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
