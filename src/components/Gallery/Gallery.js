import React from 'react'
import "./Gallery.css"
import abouthead from "../images/abouthead.jpg"
import Card from './Card'
import GalleryData from './GalleryData'



const Gallery = () => {
  return (<>    <div>
    <img src={abouthead}  style={{ height: "50vh", width: "100%"}} alt="" />
</div>

    <section className='gallery top'>
      <div className='container grid'>
        {GalleryData.map((value) => {
          return <Card images={value.img} title={value.title} />
        })}


      </div>

    </section>

    </>

  )
}

export default Gallery