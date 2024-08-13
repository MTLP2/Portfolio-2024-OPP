import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedAndLatestArticles from '../../Component/FeaturedAndLatestArticles';

gsap.registerPlugin(ScrollTrigger);

export default function Articles() {
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

  const { slug } = useParams();
  
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://admindash.matheolopes.com/api/article/ReadArticle/${slug}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'article');
        }
        return response.json();
      })
      .then(data => {
        setArticleData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setLoading(false);
      });
  }, [slug]);
  
  useEffect(() => {
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.backgroundColor = 'white';

    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.style.transition = 'background-color 1s ease';
      navElement.style.backgroundColor = '#7ed957';
    }

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

  return (
    <section className='mt-[120px] w-full items-center gap-[200px] flex flex-col'>
      <div
        className='py-40 flex flex-col text-center items-center bg-[#7ed957] text-white w-full gap-5 relative'
        style={{
          backgroundImage: articleData && !loading ? `url(${articleData.mainImageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#7ed957] opacity-90 z-0"></div>
        <ul className='flex gap-20 text-[#f8496cc0] font-bold z-10'>
          {!loading && articleData && articleData.tags && articleData.tags.map((tag, index) => (
            <li key={index} className='border-2 p-2 bg-white border-[#f8496cc0]'>{tag}</li>
          ))}
        </ul>
        <h1 className='text-5xl font-bold w-[60%] z-10'>
          {!loading && articleData ? articleData.mainTitle : 'Chargement...'}
        </h1>
        <div className="z-10">
          <h3 className='font-bold'>Par Mathéo Lopes | 15 Août 2024</h3>
        </div>
      </div>

      <div className='flex pb-20 w-[80%]'>
        {loading ? (
          <div className='text-center text-lg font-medium'>
            Chargement de l'article...
          </div>
        ) : (
          <div className='w-full'>
            <div className='text-lg font-medium mb-10' dangerouslySetInnerHTML={{ __html: articleData.mainTxt }}></div>

            {articleData.sections && articleData.sections.map((section, index) => (
              <div key={index} className='flex flex-col sectionblog gap-4 mb-10'>
                <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
                <div className='flex bg-red-300  gap-4'>
                  {section.images.length === 1 && (
                    <img className='w-full h-[500px] object-cover rounded-lg shadow-md' src={section.images[0].url} alt={section.images[0].alt} />
                  )}

                  {section.images.length === 2 && (
                    section.images.map((image, i) => (
                      <img key={i} className='w-1/2 h-[300px] object-cover rounded-lg shadow-md' src={image.url} alt={image.alt} />
                    ))
                  )}

                  {section.images.length === 3 && (
                    <>
                      <div className='flex gap-4'>
                        <img className='w-1/2 h-[300px] object-cover rounded-lg shadow-md' src={section.images[0].url} alt={section.images[0].alt} />
                        <img className='w-1/2 h-[300px] object-cover rounded-lg shadow-md' src={section.images[1].url} alt={section.images[1].alt} />
                      </div>
                      <img className='w-full h-[300px] object-cover rounded-lg shadow-md mt-4' src={section.images[2].url} alt={section.images[2].alt} />
                    </>
                  )}

                  {section.images.length === 4 && (
                    <div className='grid grid-cols-2 gap-4'>
                      {section.images.map((image, i) => (
                        <img key={i} className='w-full h-[300px] object-cover rounded-lg shadow-md' src={image.url} alt={image.alt} />
                      ))}
                    </div>
                  )}

                  {section.images.length > 4 && (
                    <div className='grid grid-cols-2 gap-4'>
                      {section.images.slice(0, 4).map((image, i) => (
                        <img key={i} className={`h-[300px] object-cover rounded-lg shadow-md ${i === 3 ? 'col-span-2' : ''}`} src={image.url} alt={image.alt} />
                      ))}
                      {section.images.length > 4 && (
                        <div className='col-span-2'>
                          <div className="carousel">
                            {section.images.slice(4).map((image, i) => (
                              <img key={i} className='h-[300px] object-cover rounded-lg shadow-md' src={image.url} alt={image.alt} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='flex flex-col w-[25%] h-full gap-5'>
          <FeaturedAndLatestArticles
          />
        </div>
      </div>
    </section>
  );
}
