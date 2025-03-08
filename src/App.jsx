import './App.css'
import About from './Pages/About'
import Intro from './Pages/Intro'

function App() 
{

  return (
    <div className='dark-navy min-h-screen text-slate-400'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <header className="p-4 md:p-8 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-16 space-y-4">
          <Intro/>
        </header>
        <div className='lg:w-[52%] p-4 md:p-8 lg:py-16'>
          <div id='about'>
            <About/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
