import React from 'react'
import ProjetComponent from '../Component/ProjetComponent';
import Footer from '../Component/Footer';


export default function Project({data}) {
  return (
    <div className='principalContainer projetContainer'>
      <h2 className='titleSection'>Projet</h2>
      <ProjetComponent data={data}/>
    <Footer/>

    </div>
    
  )
}
