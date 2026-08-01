const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux',
  'REST APIs',
  'HTML5',
  'CSS3',
  'Git',
  'GitLab',
  'Webpack',
  'Vite',
  'Node.js',
  'ChatGPT',
  'GitHub Copilot',
  'Cursor',
  'Claude',
  'Gemini',
];

function SkillsMarquee() {
  return (
    <section className='skills-marquee' aria-label='Technologies and AI tools'>
      <div className='skills-track'>
        <div className='skills-group'>
          {skills.map((skill) => (
            <div className='marquee-skill' key={skill}>
              <span>{skill}</span>
            </div>
          ))}
        </div>

        <div className='skills-group' aria-hidden='true'>
          {skills.map((skill) => (
            <div className='marquee-skill' key={`duplicate-${skill}`}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;
