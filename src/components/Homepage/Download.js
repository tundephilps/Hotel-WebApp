import React from 'react'
import "./Download.css";
import appstore from "../images/appstore.png";

import app from "../images/app.png";
import google from "../images/google.png";

const Download = () => {
  return (
    <section className='download top'  id='phone'>
        <div className='container flex_space'>
            <div className=''  >
                <h3>Download our app</h3>
                <h1>Wow Get This App Now</h1>
                <ul>
                <li>&#10003; Up to 3milions downloads </li>
                <li>&#10003; Easy to use </li>
                <li>&#10003; Sleek Design </li>
                <li>&#10003; Acceptable Worldwide </li>
                
            </ul>
            <div className='img flex' id='apps'>
                <img src={appstore} alt="" />
                <img src={google} alt="" />
            </div>
            
            </div>
            <div>
            <img src={app} alt="apps" />
         
            </div>

           </div>


    </section>
  )
}

export default Download