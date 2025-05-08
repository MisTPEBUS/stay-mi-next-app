import IconFacebook from "@/components/Icons/IconFcebook";
import { Button } from "@/components/ui/button";

const FbButton = () => {
  const handleFacebookLogin = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:6543";
    window.location.href = `${backendUrl}/api/v1/users/facebook/`;
  };

  return (
    <Button type="button" variant="facebookLogin" onClick={handleFacebookLogin} className="flex rounded-lg pl-2">
      <div className="relative flex size-9 items-center justify-center">
        <IconFacebook className="absolute size-7" />
        <div className="fill-[#1877F2]"></div>
      </div>
      <p className="flex-1 border-l border-[#000000]/8 disabled:text-[#1E1E1E]/20">使用Facebook帳號登入</p>
    </Button>
  );
};

export default FbButton;
