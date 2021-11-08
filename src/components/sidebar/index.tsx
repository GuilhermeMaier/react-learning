import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown, MdSwitchRight } from "react-icons/md";
import { SidebarProps } from "./dto/sidebar.dto";
import {
  SidebarContainer,
  SidebarDropdownIcon,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuItemIcon,
  SidebarMenuItemsContainer,
  SidebarMenuItemText,
  SidebarSubmenuItem,
  SidebarToggler,
  SidebarTogglerContainer,
} from "./sidebar.styles";

function Sidebar(props: SidebarProps) {
  const { backgroundImage, sidebarHeaderImage, sidebarMenuItems } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    sidebarMenuItems[0].name
  );
  const [sidebarSubmenuState, setsidebarSubmenuState] = useState({});

  useEffect(() => {
    setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    const updateView = () => {
      setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    };
    window.addEventListener("resize", updateView);
    const submenus = {};
    sidebarMenuItems.forEach((item, index) => {
      if (item.submenuItems?.length) {
        submenus[index] = {};
        submenus[index]["isOpen"] = false;
        submenus[index]["isSelected"] = null;
      }
    });
    setsidebarSubmenuState(submenus);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // useEffect(() => {
  //   const submenus = {};
  //   sidebarMenuItems.forEach((item, index) => {
  //     if (item.submenuItems?.length) {
  //       submenus[index] = {};
  //       submenus[index]["isOpen"] = sidebarSubmenuState.hasOwnProperty(index)
  //         ? sidebarSubmenuState[index]["isOpen"]
  //         : true;
  //       submenus[index]["isSelected"] = null;
  //     }
  //   });
  //   setsidebarSubmenuState(submenus);
  // }, [sidebarMenuItems]);

  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);
    const submenuStatesCopy = JSON.parse(JSON.stringify(sidebarSubmenuState));
    if (sidebarSubmenuState.hasOwnProperty(index)) {
      submenuStatesCopy[index]["isOpen"] =
        !sidebarSubmenuState[index]["isOpen"];

      setsidebarSubmenuState(submenuStatesCopy);
    }
  };

  const menuItemsJSX = sidebarMenuItems.map((item, index) => {
    const isSubmenuOpened = sidebarSubmenuState[index]?.isOpen;

    const submenuItemsJSX = item.submenuItems?.map(
      (submenuItem, submenuIndex) => {
        return (
          <Link href={submenuItem.path}>
            <SidebarSubmenuItem
              className={"submenu"}
              key={submenuIndex}
              selected={selectedMenuItem === item.name}
              isSubmenuOpened={isSubmenuOpened}
            >
              <SidebarMenuItemIcon isOpen={isSidebarOpen}>
                {React.createElement(submenuItem.icon)}
              </SidebarMenuItemIcon>
              <SidebarMenuItemText isOpen={isSidebarOpen}>
                {submenuItem.name}
              </SidebarMenuItemText>
            </SidebarSubmenuItem>
          </Link>
        );
      }
    );

    return (
      <Link href={item.path}>
        <SidebarMenuItem
          key={index}
          selected={selectedMenuItem === item.name}
          isOpen={isSidebarOpen}
          onClick={() => handleMenuItemClick(item.name, index)}
        >
          <SidebarMenuItemIcon isOpen={isSidebarOpen}>
            {React.createElement(item.icon)}
          </SidebarMenuItemIcon>
          <SidebarMenuItemText isOpen={isSidebarOpen}>
            {item.name}
          </SidebarMenuItemText>
          {item.submenuItems?.length && (
            <>
              <SidebarDropdownIcon isSubmenuOpened={isSubmenuOpened}>
                <MdKeyboardArrowDown />
              </SidebarDropdownIcon>
              {submenuItemsJSX}
            </>
          )}
        </SidebarMenuItem>
      </Link>
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
}

export default Sidebar;
