import React from 'react'
import Tag from './Tag'
import { Link, NavLink } from 'react-router-dom'


export default function ProjectCard({title, text, imageUrl,tags, addToRefs, linkproject}) {
  return (
    <Link className='Link' to={linkproject}>
      <div className="projectItem" ref={addToRefs}>
              <img src={imageUrl} alt={title} />
              <div className="projectInfo">
                  <h3 className=' font-[RubikOne]'>{title}</h3>
                  <Tag tags={tags}/>

              </div>
          </div>
    </Link>
  )
}
