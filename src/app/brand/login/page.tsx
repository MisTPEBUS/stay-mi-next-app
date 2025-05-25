import { generateMetadata } from "@/utils/seo";

import StoreLoginForm from "./LoginForm";

export const metadata = generateMetadata({
  title: "會員登入",
  description: "會員登入",
  url: "https://staymi.vercel.app/brand/login",
});

const StoreLogin = () => {
  return (
    <div className="flex justify-center bg-white md:py-20">
      <StoreLoginForm />
    </div>
  );
};

export default StoreLogin;
