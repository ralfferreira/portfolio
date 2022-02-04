import React from 'react';
import { Container, Logo, Links, LinkItem, Link, Home } from './styles';
import Curriculum from '../Curriculum';
import Ralf from '../../assets/ralf.svg'
import { animateScroll as scroll } from 'react-scroll'
const Header = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
    <Container>
      <Home to ='/' onClick={toggleHome}>
        <Logo src={Ralf} />
      </Home>
      <Links>
        <LinkItem>
          <Link to="about" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
        </LinkItem>
        <LinkItem>
          <Link to="projects" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
        </LinkItem>
      </Links>
      <Curriculum />
    </Container>
    </>
  );
};

export default Header;
