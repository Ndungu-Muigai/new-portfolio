import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { Slide, ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Components/404 Page';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="min-h-screen flex flex-col">
        <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme='light' transition={Slide}/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route exact path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
