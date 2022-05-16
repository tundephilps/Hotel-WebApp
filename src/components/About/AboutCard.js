import React from 'react'
import "./About.css";
import { AiOutlineCaretRight } from "react-icons/ai";
import about1 from "../images/about-2.jpg"

import about2 from "../images/about-3.jpg"
import { Button } from "react-bootstrap"
import abouthead from "../images/abouthead.jpg"



const AboutCard = () => {
  return (<> 

  <div>
      <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
  </div>
     <section className='aboutCard mtop flex_space' style={{ padding: "3rem", overflow: "hidden"}}>
        <div className='row row1' >
            <h4>About Us</h4>
            <h1>
                We <span>provide solution</span> to grow your business
            </h1>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. 

        </p>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. 
        </p>
        <Button className="secondary-btn" style={{ width: "12rem"}}>
        Explore More <i> <AiOutlineCaretRight /></i>
        </Button>
        </div>
        <div>
            <img src={about1} style={{height: "24em", width: "100%", padding: "3rem", marginRight: "12rem"}} alt="" />
        </div>

    </section>
    <section className="features top" style={{ padding: "2rem"}}>
        <div className=" flex_space">
            <div className="row row1">
                <h4 style={{ color: "lightgreen"}}>
                    Our features
                </h4>
                
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. 
        </p>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. 
        </p>
     
        <Button className="secondary-btn" style={{ width: "12rem", height: "3rem"}}>
        Find Out  <AiOutlineCaretRight />
        </Button>
            </div>
            <div>
            <img src={about2} style={{height: "30rem", width: "100%", padding: "3rem",}} alt="" />
        </div>


        </div>




    </section>
    </>


  )
}

export default AboutCard