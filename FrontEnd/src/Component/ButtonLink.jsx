import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonLink({name, link}) {
  return (
    <Link to={link}>
      <button className='defaultButton'>{name}</button>
    </Link>
  )
}
