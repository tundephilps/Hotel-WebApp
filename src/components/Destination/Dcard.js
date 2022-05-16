import React from 'react'

import { useNavigate } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";


const Dcard = ({ item: { id, image, title, desc, sidepara,  paraImage_one,  paraImage_two }}) => {


    const navigate = useNavigate();

  return (<>    <div className='items'>
        <div className='img' id='gall'>
            <img src={image} alt='' />

            <a href className="blogItem-link"  onClick={() => navigate(`/SinglePage/${id}`)}  >
                <i><CgWebsite  className='fas fa-external-link-alt' /></i>
            </a>

        </div>
        <div className='title'>
            <h3>{title} </h3>
        </div>
        </div>
        </>

  )
}

export default Dcard