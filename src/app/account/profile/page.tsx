import ProfileForm from "./components/ProfileForm";
import SubscriptionHistory from "./components/SubscriptionHistory";
import SubscriptionStatus from "./components/SubscriptionStatus";

const ProfilePage = () => {
  return (
    <div className="p-6">
      <ProfileForm />
      <SubscriptionStatus />
      <SubscriptionHistory />
    </div>
  );
};

export default ProfilePage;
