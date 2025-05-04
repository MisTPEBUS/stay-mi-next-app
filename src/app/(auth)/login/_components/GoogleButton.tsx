import { Button } from "@/components/ui/button";
import { useAsPathStore } from "@/store/useAsPathStore";

const GoogleButton = () => {
  const { prevAsPath } = useAsPathStore((state) => state.asPath);

  const redirectToLine = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/users/google?redirectTo=${encodeURIComponent(prevAsPath)}`;
  };
  return (
    <Button type="button" onClick={redirectToLine} variant="googleLogin" className="rounded-lg pl-2">
      <div className="flex size-8 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-6">
          <path
            fill="#EA4335"
            d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.41 2.28 29.49 0 24 0 14.61 0 6.7 5.84 2.88 14.12l7.5 5.82C12.06 13.11 17.56 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.1 24.5c0-1.58-.14-3.1-.41-4.56H24v9.31h12.44c-.54 2.9-2.15 5.36-4.56 7.05l7.36 5.73C43.78 37.48 46.1 31.41 46.1 24.5z"
          />
          <path
            fill="#FBBC05"
            d="M10.38 28.24a14.43 14.43 0 0 1 0-8.49l-7.5-5.82A24 24 0 0 0 0 24c0 3.84.92 7.47 2.88 10.71l7.5-6.47z"
          />
          <path
            fill="#4285F4"
            d="M24 48c6.49 0 11.91-2.14 15.88-5.83l-7.36-5.73a13.7 13.7 0 0 1-8.52 2.73c-6.44 0-11.94-3.61-14.62-8.99l-7.5 6.47C6.7 42.16 14.61 48 24 48z"
          />
        </svg>
      </div>
      <p className="flex-1 border-l border-[#000000]/8 pl-3 font-medium text-black">使用 Google 帳戶登入</p>
    </Button>
  );
};

export default GoogleButton;
