import FaqSection from "./home/sections/FaqSection";
import FlowSection from "./home/sections/FlowSection";
import Hero from "./home/sections/Hero";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FlowSection />
      <FaqSection />
    </div>
  );
};

export default Home;
