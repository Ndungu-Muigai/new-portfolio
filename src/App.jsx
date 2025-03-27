import './App.css'
import "./assets/CSS/Skills.css"

import { Routes, Route } from 'react-router'
import LandingPage from './Pages/Landing Page'
import AllProjects from './Pages/All Projects'

function App() 
{

  return (
    <div className='dark-navy min-h-screen text-slate-400'>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/projects' element={<AllProjects/>}></Route>
      </Routes>
    </div>
  )
}

export default App
