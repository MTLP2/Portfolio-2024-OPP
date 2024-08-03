// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
console.log(Lenis);

import './assets/style/style.css';

import Nav from './Component/Nav';
import ScrollSmoother from '../src/utils/ScrollSmoother';
import Accueil from './Pages/Accueil';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import CGU from './Pages/CGU';
import Blog from './Pages/Blog';
import Articles from './Pages/Articles/Articles';

function App() {
  const [data, setData] = useState([]);
  const dataAccueil = data.slice(0, 3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://matheolopes.com/api/project')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useGSAP(() => {
    gsap.fromTo(".nav", { opacity: 0, y: -30 }, { opacity: 1, y: 0, delay: 1 });
  });

  return (
    <>
      <Nav />
        <ScrollSmoother>
      <div className='Container'>
          {loading ? (
            <p>Chargement en cours...</p>
          ) : (
            <Routes>
              <Route path='*' element={<Accueil data={dataAccueil} />} />
              <Route path='/About' element={<About />} />
              <Route path='/Le-Blog' element={<Blog/>} />
              <Route path='/Le-Blog/article' element={<Articles/>} />
              <Route path='/Project' element={<Project data={data} />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/CGU' element={<CGU />} />
            </Routes>
          )}
      </div>
        </ScrollSmoother>
    </>
  );
}

export default App;
