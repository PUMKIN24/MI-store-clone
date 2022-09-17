import React from 'react'
import HotItemCard from './HotItemCard'

const HotAccessories = ({music,musicCover}) => {
  return (
    <div className='hotAccessories'>
        <div>
            <img src={musicCover} alt='Cover' />
        </div>
        <div>
            {music.map((item,index)=>(
                <HotItemCard key={item.image} name={item.image} price={item.price} image={item.image} index={index} />
            ))}
        </div>
    </div>
  )
}

export default HotAccessories