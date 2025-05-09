import { generateMetadata } from "@/utils/seo";

import SignUpForm from "../_components/signUpForm/page";

export const metadata = generateMetadata({
  title: "會員註冊",
  description: "會員註冊",
  url: "https://staymi.vercel.app/signUp",
});

const SignUp = () => {
  return (
    <div className="flex justify-center bg-[#F5F5F5] px-4 py-4">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
