import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievement from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function page() {
  return (
    <main className="bg-[#0f172a] text-white pt-20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}