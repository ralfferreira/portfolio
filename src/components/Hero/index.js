import React from 'react'
import { Container, HeroTitle, HeroText ,HeroDescriptionText, ScrollImage, Scroll, Link } from './styles';
import ProgammingLanguages from '../ProgammingLanguages'
import Arrow from '../../assets/arrow-down.gif'
const Hero = () => {
  return (
    <Container>
        <ProgammingLanguages />
        <HeroText>
          <HeroTitle>Ralf Dewrich.</HeroTitle>
          <HeroDescriptionText>Sou Desenvolvedor Full-Stack, moro em Brasília e atualmente estou desenvolvendo aplicações usando Javascript.</HeroDescriptionText>
        </HeroText>
        <Scroll>
          <Link to="about" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            <ScrollImage src={Arrow} />
          </Link>
        </Scroll>
    </Container>
  );
};

export default Hero;
