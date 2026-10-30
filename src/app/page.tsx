import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveDecisionSection from "@/components/InteractiveDecisionSection";
import PillarSection from "@/components/PillarSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CuanCalculator from "@/components/CuanCalculator";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InteractiveDecisionSection />
        <PillarSection />
        <HowItWorksSection />
        <CuanCalculator />
        <SecuritySection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
