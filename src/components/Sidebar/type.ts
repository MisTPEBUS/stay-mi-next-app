type NavItemType = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SidebarProps = {
  navItemProps: NavItemType[];
};

export type { NavItemType, SidebarProps };
