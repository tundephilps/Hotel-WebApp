import React from 'react'
import abouthead from "../images/abouthead.jpg"
import AllItems from './AllItems';


const Destination = () => {
  return (<>
    <div>
    <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
</div>
<AllItems />
</>
  )
}

export default Destination;