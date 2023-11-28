
import AboutCopy from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import Project from './Component/Project'
import Skill from './Component/Skill'

function App() {


  return (
    <div>
    <Navbar />
    <div id="home">
      <Intro />
    </div>
    <div id="about">
      <AboutCopy />
    </div>
    <div id="skills">
      <Skill />
    </div>
    <div id="projects">
      <Project />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
  )
}

export default App
