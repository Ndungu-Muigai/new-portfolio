import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from "react-scroll-to-top"
import { ToastContainer, Bounce } from 'react-toastify'

import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() 
{
  const handleScrollToTop = () => 
  {
    window.history.replaceState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="colored" transition={Bounce}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop smooth onClick={handleScrollToTop} className="rounded-full" component={
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 flex items-center justify-center text-white transition-all duration-300 border-2 border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        } />
    </>
  )
}

export default App

