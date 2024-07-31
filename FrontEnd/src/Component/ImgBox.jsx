import React from 'react'

export default function ImgBox({text}) {
  return (
    <div className='characterRole'>
            <img className='imgCharacter' src="https://mathlpbucket.s3.eu-west-3.amazonaws.com/img2.jpg" alt="" />
            <h2 className='titleCharacter font-[RubikOne]'>{text}</h2>
    </div>
  )
}
