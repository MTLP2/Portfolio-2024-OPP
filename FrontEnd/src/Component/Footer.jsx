import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="contactContainer">
                <Link to={'/Contact'}> <button className='contactme Link'>CONTACTER ►</button></Link>
                <div className='socialContainer'>
                    <a href='https://www.linkedin.com/feed/' className='fa'><i aria-hidden='false' class="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://twitter.com/matholopes5' className='fa'><i class="fa-brands fa-x-twitter"></i></a>
                    <a href='https://github.com/MTLP2' className='fa'><i class="fa-brands fa-github"></i></a>

                </div>
    </div>
  )
}
