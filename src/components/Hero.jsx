import resume from '../assets/Akanksha_Patil_Resume.pdf';
function Hero() {
  return (
    <section className='hero' id='home'>
      <div className='hero-content'>
        <div className='hero-eyebrow'>
          <span className='status-dot'></span>
          FRONTEND ENGINEER
        </div>

        <h1>
          Hi, I'm <span>Akanksha</span>
          <br />I build fast, scalable web experiences.
        </h1>

        <p className='hero-description'>
          Frontend Engineer specializing in React.js, Next.js, TypeScript,
          performance optimization, and technical SEO.
        </p>

        <div className='hero-stack'>
          <span>React.js</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Technical SEO</span>
          <span>Performance</span>
        </div>

        <div className='hero-actions'>
          <a href='#projects' className='primary-button'>
            <span>&lt;/&gt;</span>
            View Projects
          </a>

          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            className='secondary-button'
          >
            <span>↓</span>
            Download Resume
          </a>

          <a href='#contact' className='secondary-button'>
            <span>✉</span>
            Contact Me
          </a>
        </div>
      </div>

      <div className='hero-terminal-wrapper'>
        <div className='terminal-glow'></div>

        <div className='terminal'>
          <div className='terminal-header'>
            <div className='terminal-controls'>
              <span className='terminal-close'></span>
              <span className='terminal-minimize'></span>
              <span className='terminal-maximize'></span>
            </div>

            <div className='terminal-title'>akanksha@portfolio ~</div>

            <div className='terminal-spacer'></div>
          </div>

          <div className='terminal-body'>
            <div className='terminal-line'>
              <span className='terminal-prompt'>$</span>
              <span>cat developer.json</span>
            </div>

            <div className='code-content'>
              <div>
                <span className='code-bracket'>{'{'}</span>
              </div>

              <div className='code-indent'>
                <span className='code-key'>"role"</span>
                <span className='code-symbol'>:</span>{' '}
                <span className='code-string'>"Frontend Engineer"</span>
                <span className='code-symbol'>,</span>
              </div>

              <div className='code-indent'>
                <span className='code-key'>"stack"</span>
                <span className='code-symbol'>:</span>{' '}
                <span className='code-array'>
                  ["React", "Next.js", "TypeScript"]
                </span>
                <span className='code-symbol'>,</span>
              </div>

              <div className='code-indent'>
                <span className='code-key'>"focus"</span>
                <span className='code-symbol'>:</span>{' '}
                <span className='code-array'>
                  ["Performance", "SEO", "Accessibility"]
                </span>
                <span className='code-symbol'>,</span>
              </div>

              <div className='code-indent'>
                <span className='code-key'>"impact"</span>
                <span className='code-symbol'>:</span>{' '}
                <span className='code-string'>"4,000+ pages optimized"</span>
              </div>

              <div>
                <span className='code-bracket'>{'}'}</span>
              </div>
            </div>

            <div className='terminal-line terminal-bottom-line'>
              <span className='terminal-prompt'>$</span>
              <span className='typing-text'>npm run build</span>
              <span className='cursor'></span>
            </div>
          </div>
        </div>

        <div className='floating-code-card'>
          <div className='floating-code-header'>
            <span className='mini-dot'></span>
            <span>AI-assisted development</span>
          </div>

          <div className='floating-code-body'>
            <span className='code-purple'>const</span>{' '}
            <span className='code-blue'>workflow</span>{' '}
            <span className='code-white'>=</span>{' '}
            <span className='code-yellow'>[</span>
            <br />
            <span className='code-white'>
              &nbsp;&nbsp;"Build", "Debug", "Review"
            </span>
            <br />
            <span className='code-yellow'>]</span>
          </div>
        </div>

        <div className='coffee-badge'>
          <span className='coffee-icon'>☕</span>
          <span>CODE &amp; AI</span>
        </div>
      </div>

      <a href='#about' className='scroll-indicator'>
        <span>SCROLL TO EXPLORE</span>
        <span className='scroll-arrow'>↓</span>
      </a>
    </section>
  );
}

export default Hero;
