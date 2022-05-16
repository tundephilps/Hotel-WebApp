import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css";
import "../Styles.css"
import React, { Component } from 'react';
import Estate from "../images/Estate.png"
import { BsList } from "react-icons/bs"
import { MdCancel } from "react-icons/md"



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      show: true,
    }
  }
  state = {  }
  render() { 
    return (<>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <img src={Estate} class="navbar-brand text-info"href='#' alt='' />
  <button class="navbar-toggler border border-info text-info"
   onClick={ ()=>{ this.setState({show: !this.state.show})}}>
     {this.state.show ? <BsList /> : <MdCancel />}
     
      
   </button> 

  <div class={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
      <a class="nav-link text-light" href="/">Home</a> 
      </li>
      <li class="nav-item">
      <a class="nav-link text-light"  href="/About">About</a> 
      </li>
      
      <li class="nav-item">
      <a class="nav-link text-light" href="/Gallery">Gallery</a> 
      </li>
      
      <li class="nav-item">
      <a class="nav-link text-light" href="/Blog">Blog</a> 
      </li>
      
    </ul>
<div style={{flexDirection: "row", display: 'flex', alignItems: "center"}}>
    <li className='login-area'>
  <Link to="/Login">
    <i className='far fa-chevron-right'>Sign In    | </i>
  </Link>
</li>
<li className='login-area'>
  <Link to="/Signup">
    <i className='far fa-chevron-right'>   Sign Up</i>
  </Link>
</li>
<li className='login-area' style={{marginLeft: "10px"}}>
  <Link to="/Rooms">
    <Button className='primary-btn'  >Book a Room</Button>
  </Link>
</li>
</div>
  </div>

        </div>
      </nav>
      <h1>{this.state.show}</h1>
      </>  );
  }
}
 
export default Navbar;







/*
   <div className='container flex_space'>
            <div className='menu-icon'>
              <i className='fas fa-times'></i>
        </div>

<ul className='nav-menu active'>
  <li> <Link to="/">Home</Link></li>
 <li>   <Link to="/About">About</Link></li>
 <li>   <Link to="/Rooms">Find Room</Link></li>
  <li>  <Link to="/Destination">Destination</Link></li>
  <li>  <Link to="/Gallery">Gallery</Link></li>
 <li>   <Link to="/Blog">Blog</Link></li>
  
</ul>
<div className='login-area flex'>
<li>
  <Link to="/Signin">
    <i className='far fa-chevron-right'>Sign In</i>
  </Link>
</li>
<li>
  <Link to="/Register">
    <i className='far fa-chevron-right'>Sign Up</i>
  </Link>
</li>
<li>
  <Link to="/Room">
    <Button className='primary-btn'>Book a Room</Button>
  </Link>
</li>


</div>
    </div>

*/