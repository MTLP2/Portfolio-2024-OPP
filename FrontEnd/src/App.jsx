import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import './assets/style/style.css'

import Nav from './Component/Nav';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import Textmove from './Component/Textmove';



function App() {


  return (
    <>
    <Nav/>
    <div className='Container'>
      <Routes>
        <Route path='*' element={<Accueil />} ></Route>
        <Route path='/About' element={<About />} ></Route>
      </Routes>
    </div>

    
    </>
  )
}

export default App
