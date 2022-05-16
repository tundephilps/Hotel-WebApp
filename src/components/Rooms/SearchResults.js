import React from 'react'
import { RiHeartLine, RiStarFill } from "react-icons/ri"
import "./Rooms.css"



export const SearchResults = ({img, location, title, description, star, price, total}) => {
  return (<>
    <div className='searchResult'>
        <img src={img} alt="" />
        <RiHeartLine
        className="searchResult_heart" />

        <div
        className='searchResult_info'>
        <div
        className='searchResult_infoTop'>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>____</p>
            <p>{description}</p>
        </div>

        <div
                className='searchResult_infoBottom'>
               <div
                className='searchResult_stars'>
                <RiStarFill 
                className="searchResult_star" /> 
                <p><strong>{star}</strong></p>
                   
                </div> 
<div className='searchResult_price'>
<h4>{price}</h4>
<p>{total}</p>
</div>

        </div>


        </div>
    </div>


    
    </>
  )
}
