import { generateMetadata } from "@/utils/seo";

import SignUpForm from "./components/signUpForm";

export const metadata = generateMetadata({
  title: "會員註冊",
  description: "會員註冊",
  url: "https://staymi.vercel.app/signUp",
});

const SignUp = () => {
  return (
    <div className="flex justify-center bg-white px-4 py-4">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
