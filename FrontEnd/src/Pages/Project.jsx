import React from 'react'
import ProjetComponent from '../Component/ProjetComponent';
import Footer from '../Component/Footer';
import {Helmet} from "react-helmet";


export default function Project({data}) {
  return (
    <div className='principalContainer projetContainer'>
      <Helmet>
        <title>My z</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <h2 className='titleSection'>Projet</h2>
      <ProjetComponent data={data}/>
    <Footer/>

    </div>
    
  )
}
