import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/Slider.css'

const Slider = ({start}) => {
  return (
        <Carousel fade >
            {start.map((obj)=>(

                <Carousel.Item>
                <img 
                src={obj}
                className= "slideImages"
                alt="First slide" />
                </Carousel.Item> 
                
            ))}
        </Carousel>
  )
}

export default Slider