function Skills() {
  const skillGroups = [
    {
      title: 'Frontend Engineering',
      number: '01',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'Next.js',
        'Redux',
        'jQuery',
      ],
    },
    {
      title: 'UI & Design',
      number: '02',
      skills: [
        'Tailwind CSS',
        'Material UI',
        'Ant Design',
        'Responsive Design',
        'Flexbox',
        'CSS Grid',
        'Mobile-First Development',
        'Figma',
      ],
    },
    {
      title: 'API & Integrations',
      number: '03',
      skills: [
        'REST APIs',
        'Shopify',
        'Klaviyo',
        'Mixpanel',
        'Hotjar',
        'Context API',
      ],
    },
    {
      title: 'SEO & Performance',
      number: '04',
      skills: [
        'Technical SEO',
        'Google Search Console',
        'JSON-LD Schema',
        'Core Web Vitals',
        'Lighthouse',
        'PageSpeed Insights',
        'Semrush',
        'Lazy Loading',
        'Code Splitting',
        'SSR',
      ],
    },
    {
      title: 'AI-Assisted Development',
      number: '05',
      skills: [
        'ChatGPT',
        'GitHub Copilot',
        'Cursor AI',
        'Claude',
        'Gemini',
        'AI-assisted Development',
      ],
    },
    {
      title: 'Developer Tools',
      number: '06',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'npm',
        'Yarn',
        'Vite',
        'Webpack',
        'Chrome DevTools',
        'JIRA',
        'Agile / Scrum',
      ],
    },
  ];

  return (
    <section id='skills' className='skills section'>
      <div className='section-heading'>
        <span>05</span>
        <h2>
          Technical <strong>Skills</strong>
        </h2>
      </div>

      <div className='skills-grid'>
        {skillGroups.map((group) => (
          <div className='skill-group' key={group.title}>
            <div className='skill-group-header'>
              <span>{group.number}</span>
              <h3>{group.title}</h3>
            </div>

            <div className='skill-tags'>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
