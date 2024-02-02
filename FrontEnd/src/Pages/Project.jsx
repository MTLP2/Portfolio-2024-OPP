import React from 'react'
import ProjetComponent from '../Component/ProjetComponent';
import Footer from '../Component/Footer';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Project({data}) {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className='principalContainer projetContainer'>
      <Helmet>
        <title>Projets de Matheo Lopes | Developer Web</title>
        <meta name="description" content="Contactez Matheo Lopes pour vos besoins en développement web à Paris et au-delà. Avec compétences en Three.js, JavaScript, React, Node.js, et WordPress, je suis votre partenaire pour des solutions web réussies, en français et anglais." />
    </Helmet>
      <h2 className='titleSection'>Projet</h2>
      <ProjetComponent data={data}/>
    <Footer/>

    </div>
    
  )
}
