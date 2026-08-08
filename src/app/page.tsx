import HeroSection from "./components/HeroSection";
import ChallengesSection from "./components/sections/ChallengesSection";
import AutomationSection from "./components/sections/AutomationSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import AIComparisonSection from "./components/sections/AIComparisonSection";
import UseCasesSection from "./components/sections/UseCasesSection";

export default function Home() {
  return (
    <main className="flex-1 bg-[#05070d]">
      <HeroSection />
      <ChallengesSection />
      <AutomationSection />
      <HowItWorksSection />
      <AIComparisonSection />
      <UseCasesSection />
    </main>
  );
}
