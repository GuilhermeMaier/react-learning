import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  const { backgroundImage, sidebarHeaderImage, sidebarMenuItems } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sidebarMenuItems[0].name
  );

  useEffect(() => {
    setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    const updateView = () => {
      setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    };
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

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
        <Image src={sidebarHeaderImage} height={60} width={60} />
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
