import React from 'react'
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Textmove from '../Component/Textmove'
import Skillbox from '../Component/Skillbox';
import ProjetComponent from '../Component/ProjetComponent';
import CommentComponent from '../Component/CommentComponent';





export default function Accueil({data}) {

    const timeline = gsap.timeline()
    useGSAP(() => {
        // gsap code here...
        timeline.from(".imgCharacter", {duration: 2, scaleY: 0});
        timeline.to(".imgCharacter", {scaleY:1})
        timeline.fromTo(".titleCharacter", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")
        timeline.fromTo(".secondContainer ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+2")
        timeline.fromTo(".textMove ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+2")


      
      })

  return (
    <>
    <div className='principalContainer'>
        <div className='characterRole'>
            <img className='imgCharacter' src="" alt="" />
            <h2 className='titleCharacter'>Matheo Lopes</h2>
        </div>
    </div>
        <Textmove/>
        <div className="principalContainer secondContainer">
            <div className="characterInfo">
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis placeat dicta cum minima pariatur, expedita libero ullam enim illo obcaecati quaerat tenetur, quam, nobis in! Nihil <br /><br /> vitae atque repudiandae et eveniet architecto ratione autem, veniam eum natus numquam rem laudantium? Dignissimos asperiores sint ea id quidem consectetur libero ex possimus?</p>
                    <button>View my work</button>
                </div>
                <ul>
                    <h2>Availible for</h2>
                    <li>dzq</li>
                    <li>dzq</li>
                    <li>dzq</li>
                    <li>dzq</li>
                </ul>
            </div>
            <h2 className='titleSection'>COMPETENCE</h2>
            <Skillbox/>
            <h2 className='titleSection'>PROJECT</h2>
            <ProjetComponent data={data}/>
            <button>See my other work</button>
            <h2 className='titleSection'>Testimonies</h2>
            <CommentComponent/>


        </div>

    </>
    
  )
}
