import Hero from "@/section/Hero";
import FlowingCursor from "@/components/FlowingCursor";
import Projects from "../section/Projects";
import Navbar from "../section/navbar";
import Skill from "@/section/Skill";
import AchievementSection from "@/section/AchievementSection";
import ContactSection from "@/section/ContactSection";
import EyeFollowButton from "@/components/EyeFollowButton";

export default function Home() {
  return (
    <>
      <div className="relative z-50 bg-[#080d10]">
        <Navbar />
      </div>
      <main className="relative isolate min-h-screen overflow-hidden bg-[#080d10]">
        <FlowingCursor
          className="pointer-events-none absolute inset-0 z-0 opacity-100"
          backgroundColor="#080d10"
          simResolution={128}
          dyeResolution={512}
          densityDissipation={1.2}
          velocityDissipation={0.3}
          pressure={0.8}
          curl={25}
          splatRadius={0.25}
          splatForce={6000}
          colorUpdateSpeed={8}
          shading
        />
        <div className="relative z-10">
          <Hero />
        </div>
      </main>
      <Projects />
      <Skill/>
      <AchievementSection/>
      <ContactSection/>
      <EyeFollowButton />
    </>
  );
}
