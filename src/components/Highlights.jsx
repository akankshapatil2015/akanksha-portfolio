function Highlights() {
  const highlights = [
    { number: '4,000+', title: 'Pages Optimized', description: 'Technical SEO improvements across a large employer-page ecosystem.' },
    { number: '47%', title: 'Load Time Improvement', description: 'Faster applications through state and frontend performance optimization.' },
    { number: '3+', title: 'Years Experience', description: 'Professional frontend work across React, Next.js and TypeScript.' },
    { number: 'AI', title: 'Daily Development Tooling', description: 'Cursor, Claude, ChatGPT, Copilot and Gemini integrated into the workflow.' },
  ];

  return (
    <section id='highlights' className='highlights section'>
      <div className='section-heading'>
        <span>03</span>
        <h2>Career <strong>Highlights</strong></h2>
      </div>
      <p className='highlights-intro'>A snapshot of outcomes, experience, and the way I approach modern frontend work.</p>
      <div className='highlights-grid'>
        {highlights.map((item) => (
          <article className='highlight-card' key={item.title}>
            <div className='highlight-number'>{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className='highlight-arrow'>↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
