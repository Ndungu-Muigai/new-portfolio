import './App.css';

import { Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import Projects from './Pages/Projects';
import Home from './Pages/Home';
import ErrorPage from './Components/404 Page';

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16 min-h-fit flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route exact path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
