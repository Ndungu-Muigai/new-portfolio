import './App.css'
import "./assets/CSS/Skills.css"

import Intro from './Pages/Intro'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experiences from './Pages/Experience'
import Footer from './Pages/Footer'

function App() 
{

  return (
    <div id='intro' className='dark-navy min-h-screen text-slate-400'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className="p-4 md:p-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-16 space-y-4">
          <Intro/>
        </header>
        <div className='lg:w-[52%] p-4 md:p-8 lg:py-16'>
          <div id='about'>
            <About/>
          </div>
          <div id='skills'>
            <Skills/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
          <div id="experience">
            <Experiences/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
