import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata({
  title: "訂閱方案",
  description: "訂閱方案",
  url: "https://staymi.vercel.app/subscription",
});

export default function SubscriptionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
