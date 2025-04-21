type SitemapItem = { label: string; href: string };

export type SitemapSection = {
  title: string;
  items: SitemapItem[];
};

export type SitemapProps = {
  data: SitemapSection[];
};

export type SocialLink = {
  href: string;
  icon: React.ReactNode;
};
