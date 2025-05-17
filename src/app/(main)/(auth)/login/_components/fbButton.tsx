import IconFacebook from "@/components/Icons/IconFacebook";
import { Button } from "@/components/ui/button";

const FbButton = () => {
  const handleFacebookLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/users/facebook`;
  };

  return (
    <Button type="button" variant="facebookLogin" onClick={handleFacebookLogin} className="flex rounded-lg pl-2">
      <div className="relative flex size-9 items-center justify-center">
        <IconFacebook className="size-[26px]" />
      </div>
      <p className="flex-1 disabled:text-[#1E1E1E]/20">使用 Facebook 帳號登入</p>
    </Button>
  );
};

export default FbButton;
