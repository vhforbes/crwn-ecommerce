import React, { useState } from 'react'
import SectionData from './directory.data'
import MenuItem from '../MenuItem/MenuItem'

import './directory.scss'

const Directory = () => {


  const [sections, setSection] = useState(SectionData)

  return (
    <div className="directory-menu">    
      {sections.map(section => (
        <MenuItem
        key={section.id}
        title={section.title}
        linkUrl={section.linkUrl} 
        imageUrl={section.imageUrl}
        size={section.size}
        />
      ))}
    </div>
  )
}
  

export default Directory