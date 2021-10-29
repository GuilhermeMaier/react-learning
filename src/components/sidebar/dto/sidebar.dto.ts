import { IconType } from "react-icons";

export class SidebarProps {
  backgroundImage: string = "";
  sidebarHeaderImage: string = "";
  sidebarMenuItems?: SidebarMenuItem[] = [];
}

export class SidebarMenuItem {
  name: string;
  path?: string;
  icon: IconType;
  submenuItems?: SidebarSubmenuItems[];
}

export class SidebarSubmenuItems {
  name: string;
  path: string;
  icon: IconType;
}

export class SidebarContainerProps {
  backgroundImage: string = "";
  isOpen: boolean;
}

export class SidebarMenuItemProps {
  key: number;
  selected: boolean;
  isOpen: boolean;
}

export class SidebarSubmenuItemProps {
  key: number;
  selected: boolean;
  isSubmenuOpened: boolean;
}
export class SidebarTogglerProps {
  isOpen: boolean;
}
