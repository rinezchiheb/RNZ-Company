import HeroSection from "./components/HeroSection";
import ChallengesSection from "./components/sections/ChallengesSection";
import AutomationSection from "./components/sections/AutomationSection";

export default function Home() {
  return (
    <main className="flex-1 bg-[#05070d]">
      <HeroSection />
      <ChallengesSection />
      <AutomationSection />
    </main>
  );
}
