export type MenuType = {
  title: string;
  href: string;
}[];

export type NavProps = {
  menuList: MenuType;
  className?: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export type UserMenuType = {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[];
