import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GlobalStyles from './styles/GlobalStyles'
import { SectionOne, SectionTwo, SectionThree} from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About {...SectionOne} />
      <Projects {...SectionTwo} />
      <Contact {...SectionThree} />
      <Footer />
      <GlobalStyles />
    </Router>
  );
}

export default App;
