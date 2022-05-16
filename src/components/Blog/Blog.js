import React from 'react'

import abouthead from "../images/abouthead.jpg"
import AddBlog from './AddBlog'

const Blog = () => {
  return (
   <>
  <div>
      <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
  </div>
   <AddBlog />


   </>  )
}

export default Blog