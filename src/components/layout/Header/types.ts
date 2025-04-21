export type MenuType = {
  title: string;
  href: string;
}[];

export type MenuProps = {
  menuList: MenuType;
  className: string;
};
