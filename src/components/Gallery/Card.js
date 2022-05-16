import React from 'react'
import { Button } from 'react-bootstrap';
import { AiFillCamera } from "react-icons/ai"
import "./Gallery.css";
import { useState } from 'react';


const Card = (props) => {

const [ popup, setPopup ] = useState(false)
const toggleModal = () => {
    setPopup(!popup)
}



  return (<>    <div className='items'>
            <div className='img'>
                    <img src={props.images} alt="" />
  <i> <AiFillCamera onClick={toggleModal} /> </i>

            </div>
            <div className='title'>
                <h3>{props.title} </h3>
            </div>
    </div>
    {popup && (
    <div className='popup'>
        <div className='hide'></div>
        <div className='popup-content'>
        <Button onClick={toggleModal}>Close</Button>
        <img src={props.images} alt='' />
        </div>
    </div>
    )}


    </>

  )
}

export default Card