import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Skills } from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
