import Hero from "@/components/Hero";
import Contact from "@/components/sections/Contact";
import Profile from "@/components/sections/Profile";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Hobbies from "@/components/sections/Hobbies";
import Awards from "@/components/sections/Awards";
import Footer from "@/components/Footer";
import NavDots from "@/components/NavDots";

export default function Home() {
  return (
    <>
      <NavDots />
      <Hero />
      <main className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-6 md:space-y-8">
          <Contact />
          <Profile />
          <Skills />
          <Experience />
          <Education />
          <Languages />
          <Hobbies />
          <Awards />
        </div>
      </main>
      <Footer />
    </>
  );
}
