import BlogNews from "@/components/BlogNews";
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
      <BlogNews />
    </div>
  );
};

export default Home;
