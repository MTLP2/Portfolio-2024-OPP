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
  const articleRefs = useRef([]);
  const imgRefs = useRef([]);
  const featuredArticleRef = useRef(null);
  const latestArticleRefs = useRef([]);

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


    // Animation de l'article à l'affiche
    gsap.fromTo(featuredArticleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', 
        scrollTrigger: {
          trigger: featuredArticleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Animation des derniers articles
    latestArticleRefs.current.forEach((article, index) => {
      gsap.fromTo(article, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', 
          scrollTrigger: {
            trigger: article,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Nettoyage pour rétablir le fond d'écran et le style de la navigation par défaut
    return () => {
      document.body.style.backgroundColor = 'rgb(31, 30, 29)';
      if (navElement) {
        navElement.style.backgroundColor = 'rgb(31, 30, 29)';
      }
    };
  }, []);

  return (
    <section className='mt-[400px] w-full items-center gap-[200px] flex flex-col'>


      <div className='flex pb-20 w-[80%]'>
        <div className='flex flex-col w-[75%] gap-32'>
        </div>
        <div className='flex flex-col w-[25%] h-full gap-5'>
          <h2 className='text-4xl font-[Rubik] text-gray-400'>À l’affiche</h2>
          <div className='flex flex-col cursor-pointer gap-4' ref={featuredArticleRef}>
            <img className='w-full h-[200px] object-cover rounded-2xl shadow-md' src="/img/Img_Team.jpg" alt="" />
            <h4 className='w-[80%] font-[RubikBold] text-[#f8496cc0]'>Mon premier article qui est vraiment super cool</h4>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-[Rubik] text-gray-400'>Derniers articles</h2>
            <div className='flex flex-col gap-10'>
              {Array.from({ length: 3 }).map((_, i) => (
                <div className='flex gap-6 cursor-pointer items-center' ref={(el) => latestArticleRefs.current[i] = el} key={i}>
                  <img className='w-[20%] h-[20%] object-cover rounded-lg shadow-md' src="/img/Img_Team.jpg" alt="" />
                  <div className='flex flex-col'>
                    <h4 className='w-[80%] font-[Rubik] text-[#f8496cc0]'>Mon premier article qui est vraiment super cool</h4>
                    <p className='text-[14px]'>17 Juillet 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
