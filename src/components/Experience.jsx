function Experience() {
  return (
    <section id='experience' className='experience section'>
      <div className='section-heading'>
        <span>02</span>
        <h2>
          Professional <strong>Experience</strong>
        </h2>
      </div>

      <div className='experience-list'>
        <article className='experience-card'>
          <div className='experience-top'>
            <div>
              <span className='experience-period'>May 2026 — Present</span>
              <h3>Plootus</h3>
              <p className='experience-role'>Software Engineer</p>
            </div>
            <span className='experience-location'>Remote</span>
          </div>

          <div className='experience-content'>
            <p>
              Developed and maintained React.js and Next.js applications while
              implementing technical SEO improvements across 4,000+ pages.
            </p>

            <ul>
              <li>
                Built reusable SEO utilities and JSON-LD schemas including FAQ,
                Article, Breadcrumb, VideoObject, Dataset, Organization and
                WebSite.
              </li>
              <li>
                Conducted SEO audits and implemented improvements for indexing,
                crawlability, Core Web Vitals, accessibility and mobile
                responsiveness.
              </li>
              <li>
                Optimized frontend performance using Next.js Image, WebP images
                and responsive UI enhancements.
              </li>
              <li>
                Used AI-assisted development tools including Cursor, ChatGPT,
                Claude, GitHub Copilot and Gemini to accelerate debugging, code
                exploration and refactoring while reviewing and validating
                generated code.
              </li>
              <li>
                Collaborated with cross-functional teams using Git/GitLab and
                Agile practices to deliver scalable frontend and SEO
                improvements.
              </li>
            </ul>
          </div>

          <div className='experience-tech'>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Technical SEO</span>
            <span>JSON-LD</span>
            <span>AI Tooling</span>
            <span>GitLab</span>
          </div>
        </article>

        <article className='experience-card'>
          <div className='experience-top'>
            <div>
              <span className='experience-period'>Jan 2022 — Oct 2024</span>
              <h3>Cybage Software Pvt. Ltd</h3>
              <p className='experience-role'>Software Engineer</p>
            </div>
            <span className='experience-location'>Pune</span>
          </div>

          <div className='experience-content'>
            <p>
              Built scalable frontend solutions for web and e-commerce
              platforms using React.js, Next.js, Redux and TypeScript.
            </p>

            <ul>
              <li>
                Led migration of legacy applications to Next.js, improving
                performance, SEO and overall user experience.
              </li>
              <li>
                Improved application load time by up to 47% through state
                management and frontend performance optimization.
              </li>
              <li>
                Implemented lazy loading, code splitting, image optimization
                and SSR for faster page loads.
              </li>
              <li>
                Integrated Shopify (Liquid), Klaviyo, Mixpanel and Hotjar for
                analytics and user engagement.
              </li>
              <li>
                Improved SEO, accessibility (WCAG), page speed and responsive
                mobile-first experiences.
              </li>
              <li>
                Maintained code quality through Git, Agile, JIRA and peer code
                reviews.
              </li>
            </ul>
          </div>

          <div className='experience-tech'>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Redux</span>
            <span>TypeScript</span>
            <span>SSR</span>
            <span>Shopify</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
