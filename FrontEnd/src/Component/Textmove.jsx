import React from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Textmove() {
  useGSAP(() => {
    // gsap code here...
    gsap.fromTo(".text", {x:"-25%"},{x:"0%",repeat: -1,duration: 50, ease:"none" })


  
  })

  return (
    <div className=' font-[RubikOne] textMove'>
        <h2 data-text="DEVELOPPEUR WEB - React - NodeJs - Next- DEVELOPPEUR WEB - React - NodeJs - Next " className='text'>DEVELOPPEUR WEB - React - NodeJs - Next- DEVELOPPEUR WEB - React - NodeJs - Next -  DEVELOPPEUR WEB</h2>
    </div>
  )
}
