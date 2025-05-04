import { Button } from "@/components/ui/button";

const GoogleButton = () => {
  const redirectToLine = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/users/google`;
  };
  return (
    <Button type="button" onClick={redirectToLine} variant={null} className="w-full px-0">
      使用 Google 帳戶登入
    </Button>
  );
};

export default GoogleButton;
