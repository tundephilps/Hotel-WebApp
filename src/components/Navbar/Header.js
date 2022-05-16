import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import {BsPhone, BsEnvelope } from "react-icons/bs";
import {FiClock} from "react-icons/fi";

const Header = () => {
  return (
    <header>
        <div className='container flex_space' id='head'>
            <div>
               <h1 className='logo'> Optimum Hotels</h1>
            </div>

            <div className='contact flex_space'>
                <div className='box flex_space'>
                    <div className='icons'>
                      <i>  <FiClock /></i>
                    </div>
                    <div className='text'>
                        <h6>Working Hours</h6>
                        <Link to="/Contact">Mon - Sun: 9.00am to 6.00pm</Link>
                    </div>
                </div>

                <div className='box flex_space'>
                    <div className='icons'>
                        <i><BsPhone /></i>
                    </div>
                    <div className='text'>
                        <h6>Call Us</h6>
                        <Link to="/Contact">+44**********</Link>
                    </div>
                </div>
 
                <div className='box flex_space'>
                    <div className='icons'>
                      <i>  <BsEnvelope /></i>
                    </div>
                    <div className='text'>
                        <h5>Mail Us</h5>
                        <Link to="/Contact">Optimumhotel@gmail.com</Link>
                    </div>
                </div>
 
            </div>
        </div>
    </header>
  )
}

export default Header;