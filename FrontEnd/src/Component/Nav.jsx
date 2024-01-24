import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Nav() {
  return (
    <nav className='nav'>
        <NavLink className={"Link"} to="/"><h2>MATHEO LOPES</h2></NavLink>
        <ul>
            <li><NavLink className={"Link"} to="/About">ABOUT</NavLink></li>
            <li><NavLink className={"Link"} to="/">PROJET</NavLink></li>
            <li><NavLink className={"Link"} to="/">CONTACT</NavLink></li>

        </ul>
    </nav>
  )
}
