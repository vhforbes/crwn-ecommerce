import { React, useState } from 'react'

import SHOP_DATA from './shop.data'

import Collection from '../../components/Collection/Collection'

const ShopPage = () => {

  const [ CollectionData ] = useState(SHOP_DATA)

  console.log(CollectionData)

  return(
    <div>
      {
        CollectionData.map(({id, ...OtherCollectionProps}) => (
          <Collection
            key={id}
            {...OtherCollectionProps}
          />
        ))
      }
    </div>
  )
}

export default ShopPage