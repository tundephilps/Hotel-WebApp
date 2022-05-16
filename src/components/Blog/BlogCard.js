import React from 'react'
//import { Link } from 'react-router-dom';
import "./Blog.css";
import { AiOutlineRight } from "react-icons/ai";



const BlogCard = ({ item: { id, date, category, title, cover, para, desc }}) => {
  return (
    <div className='items'>
        <div className='img'>
            <img src={cover} alt="" />
        </div>
        <div className='category flex_space'>
            <span>{date}</span>
            <label>{category}</label>
        </div>
        <div className='details'>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
        <a href='/Article' /*{`/blogsingle/${id}`}*/  className="blogItem-link">
            READ MORE <AiOutlineRight />
        </a>
    </div>
  )
}

export default BlogCard