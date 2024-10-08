import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import FeaturedAndLatestArticles from '../Component/FeaturedAndLatestArticles';
import { Helmet } from 'react-helmet';

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
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.backgroundColor = 'white';

    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.style.transition = 'background-color 1s ease';
      navElement.style.backgroundColor = '#7ed957';
    }

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

    return () => {
      document.body.style.backgroundColor = 'rgb(31, 30, 29)';
      if (navElement) {
        navElement.style.backgroundColor = 'rgb(31, 30, 29)';
      }
    };
  }, []);

  useEffect(() => {
    fetch('https://admindash.matheolopes.com/api/article/previews')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des articles');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
      })
      .catch(error => console.error('Erreur:', error));
  }, []);

  const handleArticleClick = (slug) => {
    navigate(`/Le-Blog/article/${slug}`);
  };

  return (
    <>
    <Helmet>
      <title>Blog de Mathéo Lopes - Articles sur React, Next.js et plus</title>
      <meta name="description" content="Découvrez des articles approfondis sur React, Next.js, et bien d'autres technologies modernes. Astuces, animations captivantes et plus encore." />
      <meta name="keywords" content="React, Next.js, JavaScript, Développement Web, Blog Tech, Mathéo Lopes" />
      <meta name="author" content="Mathéo Lopes" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Blog de Mathéo Lopes - Articles sur React, Next.js et plus" />
      <meta property="og:description" content="Découvrez des articles approfondis sur React, Next.js, et bien d'autres technologies modernes." />
      <meta property="og:image" content="https://mathlpbucket.s3.eu-west-3.amazonaws.com/Mathe%CC%81o+Lopes.jpeg" />
      <meta property="og:url" content="http://matheolopes.com/Le-Blog" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog de Mathéo Lopes - Articles sur React, Next.js et plus" />
      <meta name="twitter:description" content="Découvrez des articles approfondis sur React, Next.js, et bien d'autres technologies modernes." />
      <meta name="twitter:image" content="https://mathlpbucket.s3.eu-west-3.amazonaws.com/Mathe%CC%81o+Lopes.jpeg" />

      <link rel="canonical" href="http://matheolopes.com/Le-Blog" />
  </Helmet>

    <section className='mt-[400px] w-full items-center gap-[200px] flex flex-col'>
      <div className='w-[800px] gap-20 items-center flex flex-col'>
        <div className='flex flex-col items-center'>
          <h2 ref={titleRef} className='text-center text-[#f8496c] font-rubikOne text-[50px] md:text-[80px]'>
            L'ILOT <br />DE MATHÉO
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div ref={lineLeftRef} className="h-[2px] bg-[#f8496c] w-[50px] mr-4"></div>
            <p>Le Blog officiel de Mathéo Lopes</p>
            <div ref={lineRightRef} className="h-[2px] bg-[#f8496c] w-[50px] ml-4"></div>
          </div>
        </div>
        <p className='font-bold text-center w-[40%] md:w-[90%]' ref={textRef}>
          🔥 Ici, vous trouverez des articles approfondis sur React, Next.js, et bien d'autres technologies modernes. Des animations captivantes, et des astuces pour rester à la pointe de l'innovation. Que vous soyez un développeur débutant ou expérimenté, ce blog est votre destination pour tout ce qui concerne la tech. 🏝️
        </p>
        <img ref={img1Ref} className=' hidden lg:block absolute w-[500px] -top-[110px] right-[3%] h-[500px] transform mt-28 -rotate-[160deg]' src="/img/Palm.png" alt="Palm 1" />
        <img ref={img2Ref} className=' hidden lg:block absolute w-[500px] md:-left-[30%] xl:-left-[15%] h-[600px] transform mt-3 rotate-[40deg]' src="/img/Palm.png" alt="Palm 2" />
      </div>

      <div className='flex flex-col lg:flex-row pb-20 w-[80%]'>
        <div className='flex flex-col md:w-[75%] mt-11 lg:mt-0 gap-32 order-2 lg:order-1'>
          {articles.map((article, i) => (
            <div g  
              key={i}
              ref={(el) => articleRefs.current[i] = el} 
              className='flex md:gap-16 flex-col md:flex-row cursor-pointer' 
              onClick={() => handleArticleClick(article.slugNavigation)}
            >
              <img className='w-[100%] lg:w-[40%] h-[350px] rounded-lg shadow-md' ref={(el) => imgRefs.current[i] = el} src={article.mainImageUrl} alt="" />
              <div className='flex flex-col gap-6 w-[45%]'>
                <ul className='flex gap-10 text-[#f8496c] font-bold'>
                  {article.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
                <h4 className='text-2xl font-[RubikBold] font-thin text-[#f8496c]'>{article.mainTitle}</h4>
                <p className='text-lg font-medium' dangerouslySetInnerHTML={{ __html: article.mainTxt }}></p>
                <div>
                  <div>
                    <h5 className='font-semibold'>Mathéo Lopes</h5>
                    <p className=' font-bold uppercase'>{new Date(article.updatedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col lg:w-[25%] h-full gap-5 order-1 lg:order-2'>
          <FeaturedAndLatestArticles 
          />
        </div>
      </div>
    </section>
    </>
  );
}