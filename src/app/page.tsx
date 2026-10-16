import Hero from "@/section/Hero";
import Projects from "../section/Projects";
import Navbar from "../section/navbar";
import Skill from "@/section/Skill";
import AchievementSection from "@/section/AchievementSection";
import ContactSection from "@/section/ContactSection";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-[#080d10]/90 bg-[length:160px_160px,160px_160px,auto] bg-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
          backgroundSize: "160px 160px, 160px 160px, auto",
        }}
      >
        <Navbar />
        <Hero />
      </main>
      <Projects />
      <Skill/>
      <AchievementSection/>
      <ContactSection/>
    </>
  );
}
