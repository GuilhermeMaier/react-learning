import { IconType } from "react-icons";

export class SidebarProps {
  backgroundImage: string = "";
  sidebarHeader: string = "";
  sidebarMenuItems?: SidebarMenuItem[] = [];
}

export class SidebarMenuItem {
  name: string;
  path?: string;
  icon: IconType;
  // icon: string;
  submenuItems?: SidebarSubmenuItems[];
}

export class SidebarSubmenuItems {
  name: string;
  path: string;
}

export class SidebarContainerProps {
  backgroundImage: string = "";
}

export class SidebarMenuItemProps {
  key: number;
  selected: boolean;
}
