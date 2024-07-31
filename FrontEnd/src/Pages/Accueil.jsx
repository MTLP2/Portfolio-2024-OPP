import React from 'react'
import {Helmet} from "react-helmet";
import { useEffect } from 'react';

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
        timeline.from(".imgCharacter", {duration: 1, scaleY: 0});
        timeline.to(".imgCharacter", {scaleY:1})
        timeline.fromTo(".titleCharacter", {opacity:0, y: 30},{opacity:1, y: 0, delay:0.5}, "+0.5")
        timeline.fromTo(".secondContainer ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")
        timeline.fromTo(".textMove ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")


      
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
                    <p>Je suis <strong>Mathéo Lopes</strong>, développeur web basé à <strong>Paris</strong>, spécialisé en <strong>React, Node.js et Next.js</strong>. Fort de nombreuses années d'expérience, j'offre des solutions web performantes et sur mesure, en me concentrant sur une programmation moderne et efficace. <br /> <br />

                    Récemment, j'ai collaboré avec divers clients dans des secteurs tels que <strong>l'immobilier</strong>, <strong>les PME</strong>  et le développement de <strong>CRM</strong>  pour le marché du <strong>diagnostic immobilier</strong> . J'ai conçu des algorithmes de diagnostics personnalisés pour des terrains, tout en travaillant au sein d'équipes de développeurs selon une <strong>méthodologie agile</strong> .<br /> <br />

                    J'accompagne mes clients de <strong>A à Z</strong> avec des réunions hebdomadaires, en optimisant leur <strong>SEO</strong> et en utilisant des outils comme <strong>Google Analytics</strong>, <strong>Google My Business</strong> et <strong>AWS</strong>. Je gère également les déploiements sur <strong>VPS et Vercel</strong>, garantissant des solutions complètes et adaptées à leurs besoins.</p>
                    <ButtonLink link={'/Project'} name={"VOIR MES PROJETS"}/>
                </div>
                <img className=' md:w-[40%] h-[80%] rounded-xl' src="/img/Img_Team.jpg" alt="" />
            </div>
            <h2 className='titleSection text-[40px] lg:text-[80px] font-[RubikOne] '>COMPETENCES</h2>
            <Skillbox/>
            <h2 className='titleSection text-[40px] lg:text-[80px] font-[RubikOne]'>PROJETS</h2>
            <ProjetComponent data={data}/>
            <ButtonLink link={'/Project'} name={"VOIR MES PROJETS"}/>
            <h2 className='titleSection text-[30px] lg:text-[80px] font-[RubikOne]'>RECOMMANDATIONS</h2>
            <CommentComponent/>
            
            



        </div>
        <Footer/>

    </>
    
  )
}
