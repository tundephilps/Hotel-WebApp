import React, { useState } from 'react'
import "./Login.css";
import "../Styles.css"
import abouthead from "../images/abouthead.jpg"
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    




const [allValue, setAllValue] = useState([])
const formSubmit = (e) => {
    e.preventDefault()
    const newValue = { email, password }
    setAllValue([...allValue, newValue])

    setEmail("")
    setPassword("")
    
}

  return (
    <>
    
<div>
      <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
  </div>
    <section className='forms top'>
        <div className='container'>
            <div className='sign-box'>
                <p>Enter your email and password below</p>
                <form onSubmit={formSubmit}>
               
                    <input type="text" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
               
                <div className='flex_space'>
                    <div className='flex'>
                        <input  type="checkbox" />
                        <label>Remeber Me </label>
                    </div>
                    <div className='flex'>
                        <span>I forgot my password</span>
                    </div>
                    </div>

                    <button type='submit' className='primary-btn'>Sign In</button>
                    <p>
                        Dont HAVE ACCOUNT <Link to="/Signup"> Sign Up</Link>

                    </p>
                
                </form>
            </div>

        </div>

    </section>



    </>
  )
}

export default Login




/**
    <section className='show-data'>
        {allValue.map((currentValue) => {
            const { email, password } = currentValue
        
        return (
            <div className='sign-box'>
                    <h1>Send Sucessful</h1>
            </div>
        )
        })}
    </section> */