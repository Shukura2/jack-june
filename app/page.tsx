import Accesories from "@/components/Accesories";
import BlogNews from "@/components/BlogNews";
import Cards from "@/components/Cards";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Subscribe from "@/components/Subscribe";
import Wilderness from "@/components/Wilderness";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Featured />
      <Wilderness />
      <Accesories />
      <Subscribe />
      <BlogNews />
    </div>
  );
};

export default Home;
