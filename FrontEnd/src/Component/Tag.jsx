import React from 'react'

export default function Tag({tags}) {
  return (
    <div className='containerTag'>
        {tags && tags.map(element => (
            <h4 className=' font-[RubikOne]' key={element}>{element}</h4>
        ))}
    </div>
  )
}
