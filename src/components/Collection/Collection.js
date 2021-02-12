import React from 'react'

import CollectionItem from '../CollectionItem/CollectionItem'

import './collection.styles.scss'

const Collection = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)  // Using filter to display only 4 of the itens 
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} { ...otherItemProps } />
        ))
      }
    </div>
  </div>
)

export default Collection