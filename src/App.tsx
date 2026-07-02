import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FactsSection } from "./components/FactsSection";
import { StatsSection } from "./components/StatsSection";
import { SpeciesSection } from "./components/SpeciesSection";
import { ConservationSection } from "./components/ConservationSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bat-dark">
      <Navigation />
      <HeroSection />
      <FactsSection />
      <StatsSection />
      <SpeciesSection />
      <ConservationSection />
      <Footer />
    </div>
  );
}

export default App;
