import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/ui/Intro";
import Hero from "./public/images/hero1.png";
import Services from "./components/ui/Services";
import Skills from "./components/ui/Skills";
import Projects from "./components/ui/Projects";
import Education from "./components/ui/Education";
import Contact from "./components/ui/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col select-none">
      <Navbar />
      <div className="container mt-24 mx-auto px-5 py-4">
        <div className="intro flex flex-col md:flex-row  justify-around  items-center">
          <Intro />
          <Image
            alt="Hero Image"
            width={250}
            height={250}
            quality={75}
            src={Hero}
          />
        </div>
        <Services />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
