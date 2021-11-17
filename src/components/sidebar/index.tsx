import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown, MdSwitchRight } from "react-icons/md";
import {
  SidebarMenuItemDTO,
  SidebarProps,
  SidebarSubmenuItemsDTO,
} from "./dto/sidebar.dto";
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
    const submenus = {};
    sidebarMenuItems.forEach((item, index) => {
      if (item.submenuItems?.length) {
        submenus[index] = {};
        submenus[index]["isOpen"] = false;
        submenus[index]["isSelected"] = null;
      }
    });
    setsidebarSubmenuState(submenus);

    setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    const updateView = () => {
      setSidebarOpen(window.innerWidth < 1024 && isSidebarOpen ? false : true);
    };
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  function handleMenuItemClick(item: SidebarMenuItemDTO, index: number) {
    const { name, path, submenuItems } = item;
    setSelectedMenuItem(name);
    const submenuStatesCopy = JSON.parse(JSON.stringify(sidebarSubmenuState));
    if (sidebarSubmenuState.hasOwnProperty(index)) {
      submenuStatesCopy[index]["isOpen"] =
        !sidebarSubmenuState[index]["isOpen"];
      setsidebarSubmenuState(submenuStatesCopy);
    }
  }

  const menuItemsJSX = sidebarMenuItems.map(
    (item: SidebarMenuItemDTO, index: number) => {
      const { icon, name, path, submenuItems } = item;
      const isSubmenuOpened = sidebarSubmenuState[index]?.isOpen;

      const submenuItemsJSX = submenuItems?.map(
        (submenuItem: SidebarSubmenuItemsDTO, submenuIndex: number) => {
          return (
            <Link href={submenuItem.path} key={submenuIndex}>
              <SidebarSubmenuItem
                className={"submenu"}
                selected={selectedMenuItem === name}
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
        <Link href={path} key={index}>
          <SidebarMenuItem
            selected={selectedMenuItem === name}
            isOpen={isSidebarOpen}
            onClick={() => handleMenuItemClick(item, index)}
          >
            <SidebarMenuItemIcon isOpen={isSidebarOpen}>
              {React.createElement(icon)}
            </SidebarMenuItemIcon>
            <SidebarMenuItemText isOpen={isSidebarOpen}>
              {name}
            </SidebarMenuItemText>
            {submenuItems?.length && (
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
    }
  );

  return (
    <SidebarContainer backgroundImage={backgroundImage} isOpen={isSidebarOpen}>
      <SidebarHeader>
        <Image src={sidebarHeaderImage} height={60} width={60} />
      </SidebarHeader>
      <SidebarMenuItemsContainer>{menuItemsJSX}</SidebarMenuItemsContainer>
      <SidebarTogglerContainer
        className={"sidebarToggler"}
        isOpen={isSidebarOpen}
      >
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
