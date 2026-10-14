import Hero from "@/section/Hero";
import Projects from "../section/Projects";
import Navbar from "../section/navbar";
import Skill from "@/section/Skill";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url('/images/Pastel%20Coding%20Workspace%20with%20City%20Views.png')",
        }}
      >
        <Navbar />
        <Hero />
      </main>
      <Projects />
      <Skill/>
    </>
  );
}
