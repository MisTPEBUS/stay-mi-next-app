import ProfileForm from "./components/ProfileForm";
import SubscriptionStatus from "./components/SubscriptionStatus";

const ProfilePage = () => {
  return (
    <div className="p-6">
      <ProfileForm />
      <SubscriptionStatus />
    </div>
  );
};

export default ProfilePage;
