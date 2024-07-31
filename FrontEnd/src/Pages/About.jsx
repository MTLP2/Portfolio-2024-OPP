import React from 'react'
import { useRef } from "react";
import {Helmet} from "react-helmet";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ImgBox from '../Component/ImgBox';
import ButtonLink from '../Component/ButtonLink';
import Footer from '../Component/Footer';





export default function About() {

  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

    const timeline = gsap.timeline()
    useGSAP(() => {
        // gsap code here...
        timeline.from(".imgCharacter", {duration: 1, scaleX: 0});
        timeline.to(".imgCharacter", {scaleX:1})
        timeline.fromTo(".titleCharacter", {opacity:0, y: -700},{opacity:1, y: -460, delay:1}, "+0.1")
        timeline.fromTo(".animationbottom ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")


      
      })
  return (
    <div className='principalContainer AboutContainer'>
      <Helmet>
        <title>À propos de Matheo Lopes | Developer Web</title>
        <meta name="description" content="Faites connaissance avec Matheo Lopes, développeur freelance passionné à Paris. Expert en Three.js, React, Node.js, et WordPress, en réalisant vos projets avec sérieux et détermination." />
    </Helmet>
      <ImgBox text={"A PROPOS"}/>
      <div className='animationbottom'>

      
      <div className="AboutInfo">
        <p>Je suis Mathéo Lopes, développeur web basé à Paris, où je crée des solutions digitales aussi indispensables que les croissants du matin. Mon parcours dans le développement web a commencé avec une to-do list épique, et depuis, je n'ai cessé d'explorer et de perfectionner mon art. <br /> <br />

        Avec une spécialisation en React, Node.js, et Next.js, je me concentre sur des projets allant des e-commerces performants aux sites 3D modernes qui suscitent l'admiration. J'ai également travaillé sur des portfolios élégants et des sites de présentation qui mettent en valeur les entreprises sous leur meilleur jour. Que vous ayez besoin d'une API robuste ou de l'intégration parfaite d'une maquette, je suis là pour vous.<br /> <br />

        Mon expérience récente m'a permis de collaborer avec divers clients dans des secteurs variés, comme l'immobilier, les PME, et le développement de CRM pour le marché du diagnostic immobilier. J'ai conçu des algorithmes personnalisés pour des diagnostics de terrains, et travaillé en équipe selon des méthodologies agiles pour garantir une organisation sans faille.<br /> <br />

        En tant que freelance, j'accompagne mes clients de A à Z avec des réunions hebdomadaires, en optimisant leur SEO et en utilisant des outils comme Google Analytics, Google My Business, et AWS. Je m'occupe également des déploiements sur VPS et Vercel, assurant des solutions complètes et adaptées à leurs besoins.<br /> <br />

        Lorsque je ne code pas, je veille à maintenir un équilibre de vie avec du sport pour rester agile mentalement et physiquement. J'ai aussi développé une application Pomodoro combinée à une radio en ligne pour maximiser ma productivité tout au long de la journée.<br /> <br />

        Si vous recherchez un développeur web capable de s'intégrer efficacement à votre équipe et de concrétiser vos visions digitales, je suis prêt à collaborer avec vous. Ensemble, nous créerons des solutions numériques performantes qui se distinguent et répondent aux besoins de votre public cible. Mon expertise et mon approche professionnelle garantiront le succès de vos projets.</p>

      </div>
      <ButtonLink link={'/Contact'} name={"ME CONTACTER"}/>
      <h2 className='titleSection text-[40px] lg:text-[80px] font-[RubikOne]'>MON PARCOURS</h2>
      <ul className='journeyContainer'>
        <h3>2023</h3>
        <li>THREEJOURNEY</li>
        <li>OPENCLASSROOM</li>
        <h3>2022</h3>
        <li>MYDIGITALSCHOOL</li>
        <h3>2020</h3>
        <li>Lycee MARIE LAURENCIN - NSI</li>
      </ul>
      </div>
    <Footer/>

    </div>
  )
}
