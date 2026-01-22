import Navigation from "@/components/presentation/Navigation";
import ProgressIndicator from "@/components/presentation/ProgressIndicator";
import PDFExportButton from "@/components/presentation/PDFExportButton";
import HeroSlide from "@/components/presentation/HeroSlide";
import RouteMapSlide from "@/components/presentation/RouteMapSlide";
import SeasSlide from "@/components/presentation/SeasSlide";
import IslandsSlide from "@/components/presentation/IslandsSlide";
import DiarySlide from "@/components/presentation/DiarySlide";
import ConclusionSlide from "@/components/presentation/ConclusionSlide";

const sections = [
  { id: "hero", label: "დასაწყისი" },
  { id: "route-slide", label: "მარშრუტი" },
  { id: "seas-slide", label: "ზღვები" },
  { id: "islands-slide", label: "ტერიტორიები" },
  { id: "diary-slide", label: "დღიური" },
  { id: "conclusion-slide", label: "დასკვნა" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProgressIndicator sections={sections} />
      <PDFExportButton />
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
