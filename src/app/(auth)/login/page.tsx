import { generateMetadata } from "@/utils/seo";

import LoginForm from "./_components/LoginForm";

export const metadata = generateMetadata({
  title: "會員登入",
  description: "會員登入",
  url: "https://staymi.vercel.app/login",
});

const Login = () => {
  return (
    <div className="flex justify-center bg-white md:py-20">
      <LoginForm />
    </div>
  );
};

export default Login;
