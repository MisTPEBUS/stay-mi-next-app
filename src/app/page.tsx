import FaqSection from "./(home)/sections/FaqSection";
import Hero from "./(home)/sections/Hero";
import HotelSetion from "./(home)/sections/HotelSection";
import ScenarioSection from "./(home)/sections/ScenarioSection";
import StepSection from "./(home)/sections/StepSection";
import SubscriptionSection from "./(home)/sections/SubscriptionSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <HotelSetion />
      <ScenarioSection />
      <SubscriptionSection />
      <StepSection />
      <FaqSection />
    </div>
  );
};

export default Home;
