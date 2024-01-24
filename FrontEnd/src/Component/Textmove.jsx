import React from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Textmove() {
  useGSAP(() => {
    // gsap code here...
    gsap.fromTo(".text", {x:"-25%"},{x:"0%",repeat: -1,duration: 20, ease:"none" })


  
  })

  return (
    <div className='textMove'>
        <h2 data-text="DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB" className='text'>DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB DEVELOPPEUR WEB</h2>
    </div>
  )
}
