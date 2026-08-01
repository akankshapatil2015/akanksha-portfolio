import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import SkillsMarquee from './components/SkillsMarquee';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
