import ButtonChroma from './components/buttonChroma/button'
import Card from './components/card/card'
import Contact from './components/contact/contact';
import ProgrammingLanguages from './components/programmingLanguages/programmingLanguages';
import styles from './page.module.css'

const projects = [
  {
    title: 'IAbstract',
    description: 'IAbstract is an NLP (Natural Language Processing) project, developed by UFPB - TAIL, which allows you to generate an abstract and title for your academic article summaries.',
    languages: ['Python', 'Transformers', 'PyTorch'],
    link: 'https://github.com/ralfferreira/iabstract',
    backgroundImage: 'iabstract.webp',
  },
  {
    title: 'ETEC Horácio Blog',
    description: '"ETEC Horácio" is one of the best public schools in São Paulo, and their role is to offer free and quality education to everyone. This project consists of their blog and website.',
    languages: ['PHP', 'Wordpress', 'JavaScript'],
    link: 'https://github.com/ralfferreira/etec-horacio',
    backgroundImage: 'etechoracio.webp',
  },
  {
    title: 'Hexperience',
    description: '"Hexperience" is an app with the purpose of providing experiences, which are activities guided by a host. This project was presented as a final paper at ETEC Professor Horácio Augusto da Silveira in 2021."',
    languages: ['TypeScript', 'React Native', 'MySQL', 'MongoDB', 'Redis'],
    link: 'https://github.com/ralfferreira/hexperience-api',
    backgroundImage: 'hexperience.webp',
  },
  {
    title: 'Gender representation in games',
    description: 'The article discusses the common practice of playing video games and its evolution from simple entertainment to incorporating culture and influencing people. However, there is a significant gender gap in the representation of characters in games and in the development team, with men being more predominant. The work aims to investigate this discrepancy in the video game industry.',
    languages: ['Python', 'Pandas', 'Seaborn', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/ralfferreira/representacao-genero-jogos',
    backgroundImage: 'gender.webp',
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Hi! I'm Ralf Dewrich, 
          </h1>
          <h1 className={styles.title}>
            a software engineer.  
          </h1>
          <br />
          <ButtonChroma>Contact me</ButtonChroma>
        </div>
      </div>

      <main>
        <div className={styles.aboutBackground}>
          <div className={styles.aboutTitle} id="about">
            <h2>About me</h2>
          </div>
          <section className={styles.about}>
            <div className={styles.aboutMe}>
              <p>Hello, my name is Ralf, I'm 18 years old and I'm a software developer passionate about technology. Currently, I'm studying Computer Engineering at the Federal University of Paraíba and have already completed the technical course in Systems Analysis and Development at ETEC.</p>
              <p>I have experience in development in several programming languages, including Python, C++ and Javascript. I love learning new technologies and I'm always looking to improve my skills.</p>
              <p>Additionally, I'm highly motivated and committed to my projects, always striving to deliver the best possible results. I enjoy working in a team and I am open to feedback to improve my performance.</p>
              <p>Feel free to get in touch, it would be a pleasure to know you.</p>
            </div>
            <ProgrammingLanguages />
          </section>
        </div>

        <section className={styles.projects} id="projects">
          <h2>My Projects</h2>
          <br />
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </section>

        <div className={styles.contactTitle} id="contact">
          <h2>Let's talk</h2>
        </div>
        <section className={styles.contact}>
          <div className={styles.contactMe}>
            <Contact />
          </div>
        </section>

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} - Ralf Dewrich Ferreira
        </footer>
      </main>
    </>
  )
}
