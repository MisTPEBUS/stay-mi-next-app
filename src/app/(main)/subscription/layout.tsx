import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata({
  title: "訂閱方案",
  description: "訂閱方案",
  url: "https://staymi.vercel.app/subscription",
});

const SubscriptionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 pb-16 md:pb-24">{children}</div>
    </div>
  );
};

export default SubscriptionLayout;
