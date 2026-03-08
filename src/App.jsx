import './App.css'

import ScrollToTop from "react-scroll-to-top"

import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() 
{
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop smooth className="rounded-full" component={
          <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        } />
    </>
  )
}

export default App
