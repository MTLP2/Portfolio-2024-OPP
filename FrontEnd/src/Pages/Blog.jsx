import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

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
      "+=0.5"
    )
    .fromTo(
      [lineLeftRef.current, lineRightRef.current],
      { opacity: 0, width: 0 },
      { opacity: 1, width: '50px', duration: 1 },
      "-=0.5"
    )
    .fromTo(
      img1Ref.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 },
      "+=0.5"
    )
    .fromTo(
      img2Ref.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      "<"
    );

    // Animation des articles
    articleRefs.current.forEach((article, index) => {
      const img = imgRefs.current[index];

      gsap.fromTo(article, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', 
          scrollTrigger: {
            trigger: article,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Animation de hover
      article.addEventListener('mouseenter', () => {
        gsap.to(img, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      article.addEventListener('mouseleave', () => {
        gsap.to(img, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

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

      <div className='flex pb-20 w-[80%]'>
        <div className='flex flex-col w-[75%] gap-32'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Link to={`/Le-Blog/article`} className='flex gap-16' ref={(el) => articleRefs.current[i] = el} key={i}>
              <img className='w-[40%] rounded-lg shadow-md' ref={(el) => imgRefs.current[i] = el} src="/img/Img_Team.jpg" alt="" />
              <div className='flex flex-col gap-6 w-[45%]'>
                <ul className='flex gap-10 text-[#f8496c] font-bold'>
                  <li>Tag1</li>
                  <li>Tag2</li>
                </ul>
                <h4 className='text-2xl font-[RubikBold] font-thin text-[#f8496c]'>Mon premier article</h4>
                <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae neque cupiditate quia, vero, voluptas, ullam vel hic necessitatibus nisi voluptatum exercitationem dolores sapiente...</p>
                <div>
                  <img src="" alt="" />
                  <div>
                    <h5 className='font-semibold'>Mathéo Lopes</h5>
                    <p>2024</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex flex-col w-[25%] h-full gap-5'>
          <h2 className='text-4xl font-[Rubik] text-gray-400'>À l’affiche</h2>
          <Link to={`/featured`} className='flex flex-col gap-4' ref={featuredArticleRef}>
            <img className='w-full h-[200px] object-cover rounded-2xl shadow-md' src="/img/Img_Team.jpg" alt="" />
            <h4 className='w-[80%] font-[RubikBold] text-[#f8496cc0]'>Mon premier article qui est vraiment super cool</h4>
          </Link>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-[Rubik] text-gray-400'>Derniers articles</h2>
            <div className='flex flex-col gap-10'>
              {Array.from({ length: 3 }).map((_, i) => (
                <Link to={`/latest/${i}`} className='flex gap-6 items-center' ref={(el) => latestArticleRefs.current[i] = el} key={i}>
                  <img className='w-[20%] h-[20%] object-cover rounded-lg shadow-md' src="/img/Img_Team.jpg" alt="" />
                  <div className='flex flex-col'>
                    <h4 className='w-[80%] font-[Rubik] text-[#f8496cc0]'>Mon premier article qui est vraiment super cool</h4>
                    <p className='text-[14px]'>17 Juillet 2024</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
