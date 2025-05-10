type NavItemType = {
  label: string;
  href: string;
};

const navItems: NavItemType[] = [
  { label: "通知", href: "/account/notification" },
  { label: "我的帳戶", href: "/account/profile" },
  { label: "修改密碼", href: "/account/profile/change-password" },
  { label: "歷史清單", href: "/account/currentlyList" },
  { label: "訂單管理", href: "/account/booking" },
] as const;

export const labelMap = Object.fromEntries(
  navItems.map(({ href, label }) => {
    const lastSegment = href.split("/").pop()!;
    return [lastSegment, label];
  })
);
