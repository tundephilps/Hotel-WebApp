import React from 'react'
import "./Rooms.css"

export const Card = ({
    src, title, description, price
}) => {
  return (
    <div id='card'>
        <img src={src} alt="" />
        <div className='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
        </div>
    </div>
  )
}
