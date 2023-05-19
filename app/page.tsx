import Cards from "@/components/Cards";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Wilderness from "@/components/Wilderness";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Featured />
      <Wilderness />
    </div>
  );
};

export default Home;
