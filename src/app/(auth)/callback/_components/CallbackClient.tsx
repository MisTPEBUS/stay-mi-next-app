"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";

const CallbackClient = () => {
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
  }, [router, searchParams, setUser]);

  return null;
};

export default CallbackClient;
