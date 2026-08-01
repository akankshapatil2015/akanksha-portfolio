import { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
     return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='navbar'>
      <a href='#home' className='logo' onClick={closeMenu}>
        AP.
      </a>

      <nav className='nav-links'>
        <a href='#about'>About</a>
        <a href='#highlights'>Highlights</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
      </nav>


      <a href='#contact' className='nav-button'>
        Let's Talk
      </a>

      <button
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className='mobile-nav-links'>
          <a href='#about' onClick={closeMenu}>
            <span>01</span> About
          </a>
          <a href='#experience' onClick={closeMenu}>
            <span>02</span> Experience
          </a>
          <a href='#highlights' onClick={closeMenu}>
            <span>03</span> Highlights
          </a>
          <a href='#projects' onClick={closeMenu}>
            <span>04</span> Projects
          </a>
          <a href='#skills' onClick={closeMenu}>
            <span>05</span> Skills
          </a>
          <a href='#contact' onClick={closeMenu}>
            <span>06</span> Contact
          </a>
        </nav>

        <div className='mobile-menu-footer'>
          <p>Frontend Engineer · AI-Assisted Development</p>
          <a href='mailto:akankshapatil2015@gmail.com' onClick={closeMenu}>
            akankshapatil2015@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
