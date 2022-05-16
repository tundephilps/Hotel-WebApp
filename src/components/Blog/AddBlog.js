import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'
import "./Blog.css";

const AddBlog = () => {

        const [items] = useState(BlogData)

  return (

    <section className='blog top'>
        <div className='container'>
            <div className='content grid'>
                {items.map((item) => {
                    return <BlogCard key={item.id} item={item} />
                })}
                
            </div>

        </div>

    </section>
  )
}

export default AddBlog