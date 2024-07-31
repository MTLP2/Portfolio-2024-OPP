import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeBox() {
  const skillBoxRef = useRef(null);

  useEffect(() => {
    const skillBoxElements = skillBoxRef.current.children;

    gsap.fromTo(skillBoxElements, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: skillBoxRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  return (
    <div className='skillBox flex-col md:flex-row gap-[60px]' ref={skillBoxRef}>

      <div className='skillBoxUnique'>
        <img className='bg-white rounded-full h-[70px] p-4' src="/img/React_icon.webp" alt="React Logo" />
        <h3 className='font-[RubikOne] text-[36px] md:text-[24px] text-white'>React</h3>
      </div>

      <div className='skillBoxUnique'>
        <img className='bg-white rounded-full h-[70px] p-4' src="/img/Nodejs_icon.png" alt="NodeJS Logo" />
        <h3 className='font-[RubikOne]  text-[36px] md:text-[24px] text-white'>NodeJS</h3>
      </div>

      <div className='skillBoxUnique'>
        <img className='bg-white rounded-full h-[70px] p-4' src="/img/Three_icon.png" alt="ThreeJS Logo" />
        <h3 className='font-[RubikOne] text-[36px] md:text-[24px] text-white'>ThreeJS</h3>
      </div>

      <div className='skillBoxUnique'>
        <img className='bg-white rounded-full h-[70px] p-4' src="/img/Next_icon.png" alt="Next.js Logo" />
        <h3 className='font-[RubikOne] text-[36px] md:text-[24px] text-white'>Next.js</h3>
      </div>
    </div>
  );
}
