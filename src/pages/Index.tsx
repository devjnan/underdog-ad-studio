
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <StatsBar />
      <CategoryFilter />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
