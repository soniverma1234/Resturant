import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import HeroSection from "../Components/HeroSection";
import PopularDishes from "../Components/PopularDishes";
import Reservation from "../Components/Reservation";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularDishes />
      <AboutUs />
      <Reservation />
      <Gallery />
    </>
  );
};

export default Home;