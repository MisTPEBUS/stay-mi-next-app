import FaqSection from "./(home)/sections/FaqSection";
import Hero from "./(home)/sections/Hero";
import StepSection from "./(home)/sections/StepSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <StepSection />
      <FaqSection />
    </div>
  );
};

export default Home;
