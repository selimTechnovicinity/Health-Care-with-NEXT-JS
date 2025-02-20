import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";
import Specialist from "@/components/ui/Specialist/Specialist";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
    </>
  );
};

export default HomePage;
