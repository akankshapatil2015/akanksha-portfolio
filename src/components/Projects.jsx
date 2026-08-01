import antigravityImage from '../assets/antigravity.png';
import dashboardImage from '../assets/dashboard.png';
import portfolioImage from '../assets/portfolio.png';

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Anti-Gravity Interactive Simulation',
      description: 'A browser-based physics experiment with Matter.js, Canvas rendering, collision detection, and responsive interactions.',
      technologies: ['JavaScript', 'Matter.js', 'HTML5 Canvas', 'Physics Simulation', 'Performance'],
      image: antigravityImage,
      liveDemoLink: 'https://antigravity-clone-psi.vercel.app/',
      githubLink: 'https://github.com/akankshapatil2015/antigravity-clone',
    },
    {
      number: '02',
      title: 'Interactive React Dashboard',
      description: 'A dashboard concept centered on reusable React components, flexible layouts, and clear interactive states.',
      technologies: ['React', 'JavaScript', 'CSS', 'Responsive UI'],
      image: dashboardImage,
      liveDemoLink: 'https://dashboard-ui-virid-three.vercel.app/',
      githubLink: 'https://github.com/akankshapatil2015/dashboard-ui',
    },
    {
      number: '03',
      title: 'Personal Portfolio',
      description: 'A responsive portfolio bringing together frontend work, professional experience, technical capabilities, and AI-assisted workflow.',
      technologies: ['React', 'JavaScript', 'CSS', 'Responsive UI', 'AI Tooling', 'Performance'],
      image: portfolioImage,
      liveDemoLink: 'https://personal-portfolio-blush-mu.vercel.app/',
      githubLink: 'https://github.com/akankshapatil2015/personal-portfolio',
    },
  ];

  return (
    <section id='projects' className='projects section'>
      <div className='projects-heading'>
        <div>
          <span className='projects-label'>04 / FEATURED WORK</span>
          <h2>Selected <span>projects.</span></h2>
        </div>
        <div className='heading-line'></div>
      </div>

      <div className='projects-grid'>
        {projects.map((project) => (
          <article className='project-item' key={project.number}>
            <a href={project.liveDemoLink} target='_blank' rel='noreferrer' className='project-image-wrapper'>
              <img src={project.image} alt={`${project.title} project screenshot`} className='project-image' />
              <span className='project-number'>{project.number}</span>
            </a>
            <div className='project-title-row'>
              <h3>{project.title}</h3>
              <a href={project.liveDemoLink} target='_blank' rel='noreferrer' className='project-external-link' aria-label={`Open ${project.title}`}>↗</a>
            </div>
            <p className='project-description'>{project.description}</p>
            <div className='project-tech'>
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <div className='project-links'>
              <a href={project.liveDemoLink} target='_blank' rel='noreferrer'>Live Demo ↗</a>
              <a href={project.githubLink} target='_blank' rel='noreferrer'>GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>

      <div className='projects-view-all'>
        <a href='https://github.com/akankshapatil2015' target='_blank' rel='noreferrer'>View All Projects ↗</a>
      </div>
    </section>
  );
}

export default Projects;
