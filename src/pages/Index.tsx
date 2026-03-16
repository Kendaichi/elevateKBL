import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroVideoSection from "@/components/HeroVideoSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PreApplicationVideoSection from "@/components/PreApplicationVideoSection";
import ElevateApplication from "@/components/ElevateApplication";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroVideoSection />
      <AboutSection />
      <WhyJoinSection />
      <TestimonialsSection />
      <PreApplicationVideoSection />
      <ElevateApplication />
      <Footer />
    </>
  );
};

export default Index;
