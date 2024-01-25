import React from 'react'
import Tag from './Tag'

export default function ProjectCard({title, text, imageUrl,tags, addToRefs}) {
  return (
    <div className="projectItem" ref={addToRefs}>
            <img src={imageUrl} alt="Kasa project" />
            <div className="projectInfo">
                <h3>{title}</h3>
                <Tag tags={tags}/>

            </div>
        </div>
  )
}
