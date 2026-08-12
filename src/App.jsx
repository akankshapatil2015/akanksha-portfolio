import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import SkillsMarquee from './components/SkillsMarquee';
import './App.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

useEffect(() => {
  const recordVisit = async () => {
    const hasVisited = sessionStorage.getItem('portfolioVisited');

    try {
      const response = await fetch('/api/visits', {
        method: hasVisited ? 'GET' : 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch visitor count');
      }

      const data = await response.json();

      setVisitorCount(data.count);

      if (!hasVisited) {
        sessionStorage.setItem('portfolioVisited', 'true');
      }
    } catch (error) {
      console.error('Failed to process visitor count:', error);
    }
  };

  recordVisit();
}, []);

  return (
    <>
      <Navbar />
      <main>
        <div className='visitor-counter'>
          <span className='visitor-icon'>👁</span>
          <span>{visitorCount.toLocaleString()} portfolio views</span>
        </div>
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Highlights />
        <Contact />
      </main>
    </>
  );
}

export default App;
