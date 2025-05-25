import GoogleButton from "../GoogleButton";
import LineButton from "../LineButton";
import FbButton from "../fbButton";

const SocialLoginButtons = () => (
  <div className="flex flex-col gap-3">
    <GoogleButton />
    <LineButton />
    <FbButton />
  </div>
);
export default SocialLoginButtons;
