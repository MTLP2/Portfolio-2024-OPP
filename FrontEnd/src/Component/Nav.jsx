import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Nav() {
  const ilotRef = useRef(null);
  const palmRef = useRef(null);

  useEffect(() => {
    const ilotElement = ilotRef.current;
    const palmElement = palmRef.current;

    const onEnter = () => {
      gsap.fromTo(
        palmElement,
        { opacity: 0, x: -70 },
        { opacity: 1, x: -83, duration: 1 }
      );
    };

    

    const onLeave = () => {
      gsap.to(ilotElement, {backgroundColor: '' , duration: 1 });
      gsap.to(palmElement, { opacity: 0, x: -50, duration: 1 });
    };

    ilotElement.addEventListener('mouseenter', onEnter);
    ilotElement.addEventListener('mouseleave', onLeave);

    return () => {
      ilotElement.removeEventListener('mouseenter', onEnter);
      ilotElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <nav className='nav'>
      <NavLink className="Link" to="/"><h2>MATHEO LOPES</h2></NavLink>
      <ul className='flex md:gap-6'>
        <li className='p-2'><NavLink className="Link" to="/About">A PROPOS</NavLink></li>
        <li className='p-2'><NavLink className="Link" to="/Project">PROJETS</NavLink></li>
        <li className='p-2'><NavLink className="Link" to="/Contact">CONTACT</NavLink></li>
        <li className='p-2 pl-4 font-bold relative' ref={ilotRef}>
          {/* <NavLink  className="Link" to="/Le-Blog">
            L'ILOT 🏝️<span ref={palmRef} className="palm absolute right-0 opacity-0">🌴</span>
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
