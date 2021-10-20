import { IconType } from "react-icons";

export class SidebarProps {
  backgroundImage: string = "";
  sidebarHeader: string = "";
  sidebarMenuItems?: SidebarMenuItems[] = [];
}

export class SidebarMenuItems {
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
