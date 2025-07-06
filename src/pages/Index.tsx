
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveStats from "@/components/InteractiveStats";
import CreativeCategories from "@/components/CreativeCategories";
import FeaturedShowcase from "@/components/FeaturedShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InteractiveStats />
      <CreativeCategories />
      <FeaturedShowcase />
      <Footer />
    </div>
  );
};

export default Index;
