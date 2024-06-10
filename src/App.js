import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Projects from './Pages/Projects';
import Home from './Pages/Home';
import ErrorPage from './Components/404 Page';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* <Navbar /> */}
      <div className="mt-16 min-h-fit flex flex-col">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path="/about/*" element={<About />} />
          <Route exact path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
