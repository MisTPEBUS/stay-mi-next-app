"use client";
import { useRef } from "react";

import LoginForm, { LoginFormHandle } from "./_components/LoginForm";

const Login = () => {
  const formRef = useRef<LoginFormHandle>(null);

  const handleDemoClick = () => {
    formRef.current?.setEmail("lobinda@gmail.com");
    formRef.current?.setPassword("11111111");
    formRef.current?.setRememberMe(true);
  };
  return (
    <div className="flex justify-center bg-white py-20">
      <div
        onClick={handleDemoClick}
        className="fixed top-14 right-4 z-40 h-10 w-10 cursor-pointer rounded-full bg-red-500 shadow-md transition-all duration-300 hover:bg-red-600 md:h-10 md:w-10"
        title="DEMO"
      ></div>
      <LoginForm ref={formRef} />
    </div>
  );
};

export default Login;
