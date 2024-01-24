import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";



import './assets/style/style.css'

import Nav from './Component/Nav';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import Textmove from './Component/Textmove';



function App() {
  useGSAP(() => {
    // gsap code here...
    gsap.fromTo(".nav", {opacity:0, y: -30},{opacity:1, y: 0, delay:1}, "+2")

  
  })

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
