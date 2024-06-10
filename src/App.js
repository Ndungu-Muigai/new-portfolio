import './App.css';

import { Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import ErrorPage from './Components/404 Page';
import About from './Pages/About';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="min-h-fit flex flex-col">
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
