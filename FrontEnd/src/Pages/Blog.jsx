import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);

  useEffect(() => {
    // Changer le fond d'écran lorsque le composant est monté
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.backgroundColor = 'white';

    // Changer le style de la navigation
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.style.transition = 'background-color 1s ease';
      navElement.style.backgroundColor = '#7ed957';
    }

    // Animation GSAP avec ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "+=0.5" // Début de l'animation du texte 0.5 secondes après la fin de l'animation du titre
    )
    .fromTo(
      [lineLeftRef.current, lineRightRef.current],
      { opacity: 0, width: 0 },
      { opacity: 1, width: '50px', duration: 1 },
      "-=0.5" // Début de l'animation des traits en même temps que le texte
    )
    .fromTo(
      img1Ref.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 },
      "+=0.5" // Début de l'animation de l'image 1 et 2 en même temps après le texte
    )
    .fromTo(
      img2Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      "<" // Commence en même temps que l'animation de img1Ref
    );

    // Nettoyage pour rétablir le fond d'écran et le style de la navigation par défaut
    return () => {
      document.body.style.backgroundColor = 'rgb(31, 30, 29)';
      if (navElement) {
        navElement.style.backgroundColor = 'rgb(31, 30, 29)';
      }
    };
  }, []);

  return (
    <section className='mt-[400px] flex overflow-hidden'>
      <div className='w-[800px] gap-20 flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 ref={titleRef} className='text-center text-[#f8496c] font-rubikOne text-[80px]'>
            L'ILOT <br />DE MATHÉO
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div ref={lineLeftRef} className="h-[2px] bg-[#f8496c] w-[50px] mr-4"></div>
            <p>Le Blog officiel de Mathéo Lopes</p>
            <div ref={lineRightRef} className="h-[2px] bg-[#f8496c] w-[50px] ml-4"></div>
          </div>
        </div>
        <p className='font-bold text-center' ref={textRef}>
          🔥 Ici, vous trouverez les dernières nouvelles du monde de la tech, des articles approfondis sur React, Next.js, et bien d'autres technologies modernes. Explorez des tutoriels, des animations captivantes, et des astuces pour rester à la pointe de l'innovation. Que vous soyez un développeur débutant ou expérimenté, ce blog est votre destination pour tout ce qui concerne la tech. 🏝️
        </p>
        <img ref={img1Ref} className='absolute w-[500px] -top-[110px] right-[8%] h-[500px] transform mt-28 -rotate-[160deg]' src="/img/Palm.png" alt="Palm 1" />
        <img ref={img2Ref} className='absolute w-[500px] -left-[12%] h-[600px] transform mt-28 rotate-[40deg]' src="/img/Palm.png" alt="Palm 2" />
      </div>
    </section>
  );
}
