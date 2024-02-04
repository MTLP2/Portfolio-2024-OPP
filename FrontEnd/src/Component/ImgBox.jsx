import React from 'react'

export default function ImgBox({text}) {
  return (
    <div className='characterRole'>
            <img className='imgCharacter' src="/img/PP.png" alt="" />
            <h2 className='titleCharacter'>{text}</h2>
    </div>
  )
}
