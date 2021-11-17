import { IconType } from "react-icons";

export class SidebarProps {
  backgroundImage: string = "";
  sidebarHeaderImage: string = "";
  sidebarMenuItems?: SidebarMenuItemDTO[] = [];
}

export class SidebarMenuItemDTO {
  name: string;
  path?: string;
  icon: IconType;
  submenuItems?: SidebarSubmenuItemsDTO[];
}

export class SidebarSubmenuItemsDTO {
  name: string;
  path: string;
  icon: IconType;
}

export class SidebarContainerProps {
  backgroundImage: string = "";
  isOpen: boolean;
}

export class SidebarMenuItemProps {
  selected: boolean;
  isOpen: boolean;
}

export class SidebarSubmenuItemProps {
  selected: boolean;
  isSubmenuOpened: boolean;
}
export class SidebarTogglerProps {
  isOpen: boolean;
}
