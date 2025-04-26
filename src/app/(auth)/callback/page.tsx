"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";

const Callback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { setUser } = useAuthStore();

  useEffect(() => {
    const token = searchParams.get("token") ?? "";
    const pathname = searchParams.get("pathname") ?? "/";
    const name = searchParams.get("name") ?? "使用者";
    const avatar = searchParams.get("avatar") ?? "";

    setUser({ name, avatar, token });
    router.replace(pathname);
  }, []);
  return <div>正在導向中...</div>;
};

export default Callback;
