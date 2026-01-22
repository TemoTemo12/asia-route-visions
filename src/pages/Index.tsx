import Navigation from "@/components/presentation/Navigation";
import HeroSlide from "@/components/presentation/HeroSlide";
import RouteMapSlide from "@/components/presentation/RouteMapSlide";
import SeasSlide from "@/components/presentation/SeasSlide";
import IslandsSlide from "@/components/presentation/IslandsSlide";
import DiarySlide from "@/components/presentation/DiarySlide";
import ConclusionSlide from "@/components/presentation/ConclusionSlide";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="hero">
        <HeroSlide />
        <RouteMapSlide />
        <SeasSlide />
        <IslandsSlide />
        <DiarySlide />
        <ConclusionSlide />
      </main>
    </div>
  );
};

export default Index;
