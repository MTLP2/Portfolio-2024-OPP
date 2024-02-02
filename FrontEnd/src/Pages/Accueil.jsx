import React from 'react'
import { useRef } from "react";
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Textmove from '../Component/Textmove'
import Skillbox from '../Component/Skillbox';
import ProjetComponent from '../Component/ProjetComponent';
import CommentComponent from '../Component/CommentComponent';
import ButtonLink from '../Component/ButtonLink';
import ImgBox from '../Component/ImgBox';
import Footer from '../Component/Footer';





export default function Accueil({data}) {
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
      }, [location.pathname]);

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
    <Helmet>
        <title>Matheo Lopes Developer Web</title>
        <meta name="description" content="Matheo Lopes, développeur web freelance à Paris, ouvert aux projets du monde entier.  spécialisé en Three.js, JavaScript, React, Node.js, et WordPress. Engagé à construire des sites performants, et à transformer vos idées en réalités digitales marquantes." />
    </Helmet>
    <div className='principalContainer'>
        <ImgBox text={"MATHEO LOPES"}/>
    </div>
        <Textmove/>
        <div className="principalContainer secondContainer">
            <div className="characterInfo">
                <div>
                    <p>Je suis Mathéo Lopes, un développeur web basé à Paris avec une expertise forgée sur de nombreuses années de programmation. Ma passion me pousse à transformer vos visions en réalités digitales, spécialisé dans le développement sur mesure, depuis la modélisation 3D innovante jusqu'aux sites web classiques, avec un souci constant pour l'organisation et la qualité.
                        <br /> <br />
                    Mon approche met l'accent sur l'esthétique et la fonctionnalité, visant à offrir une bonne expérience utilisateur. Je propose mes services aux entreprises B2B et B2C, offrant des solutions web personnalisées qui répondent à une gamme variée d'exigences. Mon but est de livrer des projets qui allient beauté, innovation, et performance.</p>
                    <ButtonLink link={'/Project'} name={"VIEW MY WORK"}/>
                </div>
                <ul>
                    <li><h2>Availible for</h2></li>
                    <li>Fullstack Développeur Web</li>
                    <li>3D Web Développement</li>
                    <li>WordPress/PrestaShop</li>
                    <li>Intégrateur Web </li>
                </ul>
            </div>
            <h2 className='titleSection'>COMPETENCE</h2>
            <Skillbox/>
            <h2 className='titleSection'>PROJECT</h2>
            <ProjetComponent data={data}/>
            <ButtonLink link={'/Project'} name={"SEE MY OTHER WORK"}/>
            <h2 className='titleSection'>Testimonies</h2>
            <CommentComponent/>
            
            



        </div>
        <Footer/>

    </>
    
  )
}
