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
        timeline.fromTo(".titleCharacter", {opacity:0, y: -1000},{opacity:1, y: -660, delay:1}, "+0.1")
        timeline.fromTo(".animationbottom ", {opacity:0, y: 30},{opacity:1, y: 0, delay:1}, "+1")


      
      })
  return (
    <div className='principalContainer AboutContainer'>
      <Helmet>
        <title>À propos de Matheo Lopes | Developer Web</title>
        <meta name="description" content="Faites connaissance avec Matheo Lopes, développeur freelance passionné à Paris. Expert en Three.js, React, Node.js, et WordPress, en réalisant vos projets avec sérieux et détermination." />
    </Helmet>
      <ImgBox text={"ABOUT ME"}/>
      <div className='animationbottom'>

      
      <div className="AboutInfo">
        <p>Je suis Mathéo Lopes, votre Développeur Web basé à Paris, où les croissants sont aussi importants pour moi que les lignes de code. Mon voyage dans le monde du développement web a commencé au lycée, avec la création d'une to-do list (si épique). Depuis, je n'ai cessé de plonger tête la première dans des projets allant d'un site pour une association alimentaire - à des inventions plus personnelles comme un site de notation de livres pour ceux d'entre nous qui oublient ce qu'ils ont lu la semaine dernière. <br /> <br /> Mon amour pour le design et les expériences visuelles m'a conduit à explorer des expositions tech, à suivre des événements, et à rejoindre ou créer des groupes de développeurs <br /> <br /> En tant que freelance, je me spécialise dans le developpement d'e-commerces, à des sites 3D modernes qui font dire "Wow" plutôt que "Hmm", des portfolios qui montrent votre travail sous son meilleur jour, jusqu'à des sites de présentation pour faire briller votre commerce.Besoin d'une API, Je suis là.  Ou alors l'intégration d'une maquette, je suis la aussi. <br /> <br />Entre deux lignes de code, je garde un œil sur une vie équilibrée, avec une touche de sport pour m'assurer que je suis aussi agile physiquement que mentalement. J'ai aussi développé une application Pomodoro combinée à une radio en ligne pour garder ma productivité tout au long de la journée .Si vous êtes à la recherche d'un professionnel capable de concrétiser vos visions digitales, avec un soupçon de légèreté dans le processus, ne cherchez plus. Je suis ici pour transformer vos idées en projets numériques engageants, qui captivent, convainquent, et convertissent. Ensemble, travaillons à réaliser vos projets numériques de manière à ce qu'ils se distinguent, touchent votre public cible et contribuent au succès de vos ambitions. Qui sait ? Notre collaboration pourrait aboutir à des réalisations dignes d'attention et de reconnaissance .</p>

      </div>
      <ButtonLink link={'/Contact'} name={"WORK WITH ME"}/>
      <h2 className='titleSection'>MY JOURNEY</h2>
      <ul className='journeyContainer'>
        <h3>2023</h3>
        <li>THREEJOURNEY</li>
        <li>OPPENCLASSROOM</li>
        <h3>2022</h3>
        <li>MYDIGITALSCHOOL</li>
        <h3>2020</h3>
        <li>Lycee Marie Laurentcin</li>
      </ul>
      </div>
    <Footer/>

    </div>
  )
}
