import React from 'react'
import '../styles/Offers.css'
import Offer from '../components/Offer'




const Offers = ({offer}) => {
  return (
    <div className='offerSection'>
        {offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
  )
}

export default Offers