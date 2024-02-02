import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from 'axios';





import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";



import './assets/style/style.css'

import Nav from './Component/Nav';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import Textmove from './Component/Textmove';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
import Project from './Pages/Project';



function App() {

    
    
  const [data, setData] = useState([]);
  const dataAccueil = data.slice(0, 3);


  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
      axios.get('https://matheolopes.com/api/project')
          .then(response => {
              setData(response.data);
              setLoading(false); // Mise à jour de l'état de chargement
          })
          .catch(error => {
              console.log(error);
              setLoading(false); // Mise à jour de l'état de chargement
          });
  }, []);
  
  useGSAP(() => {
    // gsap code here...
    gsap.fromTo(".nav", {opacity:0, y: -30},{opacity:1, y: 0, delay:1}, "+2")

  
  })

  

  return (
    <>
        <Nav />
        <div className='Container'>
            {loading ? (
                <p>Chargement en cours...</p> // Affichage pendant le chargement
            ) : (
                <Routes>
                    <Route path='*' element={<Accueil data={dataAccueil}/>} ></Route>
                    <Route path='/About' element={<About />} ></Route>
                    <Route path='/Project' element={<Project data={data} />} ></Route>
                    <Route path='/Contact' element={<Contact />} ></Route>
                </Routes>
            )}
        </div>
    </>
);

}

export default App
