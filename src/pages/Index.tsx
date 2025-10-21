import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import SocialProfiles from "@/components/SocialProfiles";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <SocialProfiles />
      <Contact />
    </div>
  );
};

export default Index;
