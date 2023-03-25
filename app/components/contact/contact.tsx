'use client'

import { useRef } from 'react';
import anime from 'animejs';
import styles from './contact.module.css'
import Link from 'next/link';

const Contact = () => {
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
    </div>
  );
};

export default Contact;
