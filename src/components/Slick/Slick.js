import React from 'react'
import Data from './SlickData';
import "./Slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Slick = () => {
        const settings = {
            
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            };

  return (
    <section className='collection'>
        <div className='container top'>
            <Slider {...settings}>
                            {Data.map((value) => {
                return (
                    <div className='box'>
                        <img src={value.cover} alt="" />

                    </div>
                )
            })}
            </Slider>
        </div>
    </section>
  )
}

export default Slick