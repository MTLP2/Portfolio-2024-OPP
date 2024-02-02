import React, { useRef } from 'react';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Assurez-vous que c'est le chemin correct pour votre hook personnalisé
import ProjectCard from './ProjectCard';

export default function MyComponent({data}) {
  const projectRefs = useRef([]);
  projectRefs.current = [];

  // Fonction pour ajouter des éléments au tableau de références
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Enregistrement du plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Application des animations GSAP
    projectRefs.current.forEach((project, index) => {
      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: `top center`,
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "power1.out",
      });
    });
  });

  return (
    <div className='projectContainer'>
        {data.map((element)=>(
            <ProjectCard title={element.title} text={element.text} imageUrl={element.imageUrl} tags={element.tags} addToRefs={addToRefs} linkproject={element.linkproject} />
          ))}
    </div>
  );
}