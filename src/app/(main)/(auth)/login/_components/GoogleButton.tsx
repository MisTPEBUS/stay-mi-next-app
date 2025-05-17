import IconGoogle from "@/components/Icons/IconGoogle";
import { Button } from "@/components/ui/button";
import { useAsPathStore } from "@/store/useAsPathStore";

const GoogleButton = () => {
  const { prevAsPath } = useAsPathStore((state) => state.asPath);

  const redirectToLine = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/users/google?redirectTo=${encodeURIComponent(prevAsPath)}`;
  };
  return (
    <Button type="button" onClick={redirectToLine} variant="googleLogin" className="rounded-lg pl-2">
      <div className="flex size-9 items-center justify-center">
        <IconGoogle className="size-6" />
      </div>
      <p className="flex-1 pl-3">使用 Google 帳戶登入</p>
    </Button>
  );
};

export default GoogleButton;
