export type MenuType = {
  title: string;
  href: string;
}[];

export type NavProps = {
  menuList: MenuType;
  className?: string;
};

export type MobileNavProps = NavProps & {
  isAuth: boolean;
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type AvatarCircleProps = {
  avatar: string;
  className?: string;
};

export type UserMenuType = {
  label: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[];

export type UserMenuProps = {
  name: string;
  avatar: string;
  className: string;
};
