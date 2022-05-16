import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//import AllItems from '../Destination/AllItems'
import SData from '../Destination/SData'
import "./SinglePage.css";
import abouthead from "../images/abouthead.jpg"
import EmptyFile from './EmptyFile'
import "../Styles.css"

const SinglePage = () => {

        const { id } = useParams()
        const [item, setItem] = useState(null)

        useEffect(() =>{
            let item = SData.find((item) => item.id == parseInt(id))
        
        if (item) {
            setItem(item)
        }
        }, [id])

  return (
      <>
    <div>
    <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
</div>
{item ? (
    <section className='single-page top'>
        <div className='container'>
    <Link to="/"></Link>

        <article className='content flex'>
            <div className='main-content'>
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className='para flex_space'>
                    <p>{item.sidepara}</p>
                    <p>{item.sidepara}</p>

                </div>
        <h1>What is the {item.title} City?</h1>
        <p>{item.desc}</p>
        
        <div className='image grid1'>
            <img src={item.paraImage_one} alt="" />
            <img src={item.paraImage_two} alt="" />

        </div>
        <p>{item.desc}</p>
</div>
<div className='side-content'>
    <div className='box'>
        <h2>How can we help you?</h2>
        <p>{item.sidepara}</p>
        <button className='outline-btn'>Contact Us</button>
    </div>
    
<div className='box2'>
<p>{item.sidepara}</p>
</div>
</div>
</article>
</div>
</section>
) : (
    <EmptyFile />
)}


</>
  )
}

export default SinglePage