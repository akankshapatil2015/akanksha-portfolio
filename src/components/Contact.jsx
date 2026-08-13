import { useState } from 'react';
import upi from '../assets/upi.jpeg';

function Contact() {
  const [showUpi, setShowUpi] = useState(false);

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

      <div className='support-work'>
        <div className='support-content'>
          <p className='support-label'>SUPPORT MY WORK</p>

          <div className='support-row'>
            <div className='support-details'>
              <span className='upi-icon'>📱</span>

              <div>
                <strong>Support via UPI</strong>
                <span>akankshapatil20154@ybl</span>
              </div>
            </div>

            <div className='upi-qr'>
              <img src={upi} alt='PhonePe UPI QR code' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
