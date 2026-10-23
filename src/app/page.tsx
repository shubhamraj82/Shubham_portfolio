import Hero from "@/section/Hero";
import Projects from "../section/Projects";
import Navbar from "../section/navbar";
import Skill from "@/section/Skill";
import AchievementSection from "@/section/AchievementSection";
import ContactSection from "@/section/ContactSection";
import EyeFollowButton from "@/components/EyeFollowButton";

export default function Home() {
  return (
    <>
      <div className="relative z-50 bg-[#080A08]">
        <Navbar />
      </div>
      <main className="relative isolate min-h-screen overflow-hidden bg-[#080A08]">
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
