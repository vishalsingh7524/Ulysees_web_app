import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LInkpage2 from './LInkpage2';
import Linkpage1 from './Linkpage1';


function App() {


  return (
    <>
      {/* <Linkpage1/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/link1' element={<LInkpage2 />} />
        <Route path='/link2' element={<Linkpage1 />} />
      </Routes>
    </>
  )
}

export default App
