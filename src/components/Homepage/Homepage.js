import React from 'react'
import Data from './Data'
import Slide from './Slide'
import "../Homepage/Homepage.css"
import DestinationHome from './DestinationHome'
import Download from './Download'
import Works from '../Work/Works'
import Slick from '../Slick/Slick'


const Homepage = () => {
  return (<div>
    <Slide slides={Data} />
    <DestinationHome />
    <Download />
    <Works />
    <Slick />
    </div>
  )
}

export default Homepage;