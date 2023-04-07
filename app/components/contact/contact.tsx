'use client'

import { useRef } from 'react';
import { useState, ChangeEvent } from 'react';
import anime from 'animejs';
import styles from './contact.module.css'
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const contactRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    anime({
      targets: contactRef.current,
      translateY: -10,
      color: '#00D8FF',
      easing: 'easeOutExpo'
    });
  };

  const handleMouseLeave = () => {
    anime({
      targets: contactRef.current,
      translateY: 0,
      color: '#fff',
      easing: 'easeOutExpo'
    });
  };

  const contactGitRef = useRef<HTMLDivElement>(null);

  const handleMouseGitEnter = () => {
    anime({
      targets: contactGitRef.current,
      translateY: -10,
      color: '#FF4CFF',
      easing: 'easeOutExpo'
    });
  };

  const handleMouseGitOut = () => {
    anime({
      targets: contactGitRef.current,
      translateY: 0,
      color: '#fff',
      easing: 'easeOutExpo'
    });
  };

  const contactInstaRef = useRef<HTMLDivElement>(null);

  const handleMouseInstaEnter = () => {
    anime({
      targets: contactInstaRef.current,
      translateY: -10,
      color: '#F4A261',
      easing: 'easeOutExpo'
    });
  };

  const handleMouseInstaOut = () => {
    anime({
      targets: contactInstaRef.current,
      translateY: 0,
      color: '#fff',
      easing: 'easeOutExpo'
    });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLocation}>
        <p>Based in</p>
        <span>João Pessoa, Brazil.</span>
      </div>
      
      <p>Do you have a job opportunity or an idea that you want to carry out? Feel free to contact me via email or social networks:</p>
      
      <Link 
        href={"mailto:ralf.ferreira@academico.ufpb.br"} 
        target="_blank"
        rel="noopener noreferrer" >
      <div className={styles.contactEmail} 
        ref={contactRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        ralf.ferreira@academico.ufpb.br
      </div>
      </Link>
      <div className={styles.contactSocial}>
        <Link 
        href={"https://github.com/ralfferreira"} 
        target="_blank"
        rel="noopener noreferrer" >
        <div className={styles.iconSocial}
        ref={contactGitRef}
        onMouseEnter={handleMouseGitEnter}
        onMouseLeave={handleMouseGitOut}>
            <h2>Github</h2>
        </div>
        </Link>
        <Link 
        href={"https://www.instagram.com/ralf_dewrich/"}
        target="_blank"
        rel="noopener noreferrer" >
        <div className={styles.iconSocial}
        ref={contactInstaRef}
        onMouseEnter={handleMouseInstaEnter}
        onMouseLeave={handleMouseInstaOut}>
            <h2>Instagram</h2>
        </div>
        </Link>
      </div>

      {/* <div className="contactForm">
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
