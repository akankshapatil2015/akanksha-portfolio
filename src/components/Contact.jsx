function Contact() {
  return (
    <section id='contact' className='section contact'>
      <p className='section-label'>CONTACT</p>
      <h2>
        Let's build something <span>useful.</span>
      </h2>
      <p className='contact-description'>
        Looking for a frontend engineer? Let's talk about your product, team, or
        next build.
      </p>
      <a href='mailto:akankshapatil2015@gmail.com' className='primary-button'>
        Get in Touch
      </a>
      <div className='contact-info'>
        <a href='tel:7840967248'>7840967248</a>
        <span>Pune, India</span>
      </div>
      <div className='contact-links'>
        <a
          href='https://www.linkedin.com/in/akankshapatil2015/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn ↗
        </a>
        <a
          href='https://github.com/akankshapatil2015'
          target='_blank'
          rel='noreferrer'
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
