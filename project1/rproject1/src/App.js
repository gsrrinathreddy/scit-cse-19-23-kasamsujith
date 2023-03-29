import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ="AboutMe" element={<AboutMe/>}/>
      <Route path ="Hobbies" element={<Hobbies/>}/>
      <Route path ="Qualification" element={<Qualification/>}/>
      <Route path ="Skills" element={<Skills/>}/>
    
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
