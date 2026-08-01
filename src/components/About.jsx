function About() {
  return (
    <section id='about' className='about section'>
      <div className='section-heading'>
        <span>01</span>
        <h2>About <strong>Me</strong></h2>
      </div>

      <div className='about-grid'>
        <div className='about-content'>
          <p className='about-intro'>
            I enjoy turning complex requirements into interfaces that feel
            simple, responsive, and reliable. My core stack is React.js,
            Next.js, TypeScript, and JavaScript.
          </p>
          <p>
            My work spans reusable UI, REST integrations, technical SEO,
            accessibility, Core Web Vitals, and frontend architecture. At
            Plootus, that includes SEO work across more than 4,000 pages.
          </p>
          <p>
            AI tools are part of my everyday toolkit. I use Cursor, Claude,
            ChatGPT, GitHub Copilot, and Gemini to investigate problems, compare
            approaches, speed up repetitive work, and review implementation
            ideas—while keeping engineering decisions and validation manual.
          </p>
        </div>

        <div className='about-focus'>
          <div className='focus-card'>
            <span className='focus-number'>01</span>
            <h3>Frontend Engineering</h3>
            <p>React, Next.js, TypeScript and reusable UI patterns for maintainable products.</p>
          </div>
          <div className='focus-card'>
            <span className='focus-number'>02</span>
            <h3>Performance &amp; SEO</h3>
            <p>Core Web Vitals, structured data, accessibility and technical SEO at scale.</p>
          </div>
          <div className='focus-card'>
            <span className='focus-number'>03</span>
            <h3>AI-Augmented Workflow</h3>
            <p>AI-assisted exploration, debugging and refactoring with human review at every step.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
