'use client'

import React from 'react';
import anime from 'animejs';
import styles from './card.module.css';

interface CardProps {
  title: string;
  description: string;
  languages: string[];
  link: string;
  backgroundImage: string;
}

const Card: React.FC<CardProps> = ({ title, description, languages, link, backgroundImage }) => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Configura a animação do título
    anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: ['-1rem', 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 200,
    });

    // Configura a animação da descrição
    anime({
      targets: descriptionRef.current,
      opacity: [0, 1],
      translateY: ['1rem', 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 400,
    });
  }, []);

  return (
    <a href={link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
    <div className={styles.card} style={{ backgroundImage: `url(/assets/projects/${backgroundImage})`, boxShadow: "inset 0px 0px 400px 110px rgba(0, 0, 0, .7)",backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
      <div className={styles.cardTitle} ref={titleRef}>
        {title}
      </div>
      <div className={styles.cardDescription} ref={descriptionRef}>
        {description}
        <div className={styles.cardLanguages}>{languages.join(', ')}</div>
      </div>
    </div>
    </a>
  );
};

export default Card;