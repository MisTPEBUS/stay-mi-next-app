import ScrollToTop from "./(home)/ScrollToTop";
import FaqSection from "./(home)/sections/FaqSection";
import Hero from "./(home)/sections/Hero";
import HotelSection from "./(home)/sections/HotelSection";
import ScenarioSection from "./(home)/sections/ScenarioSection";
import StepSection from "./(home)/sections/StepSection";
import SubscriptionSection from "./(home)/sections/SubscriptionSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <HotelSection />
      <ScenarioSection />
      <SubscriptionSection />
      <StepSection />
      <FaqSection />
      <ScrollToTop />
    </div>
  );
};

export default Home;
