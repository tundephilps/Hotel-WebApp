import React from 'react'

import { Button } from 'react-bootstrap';
import "./Rooms.css"
import { Buttons } from './Buttons';
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';

const Rooms = () => {

  
  let navigate = useNavigate();

  return (
  <>
  <section className='searchsection'>
    <div className='header_center'>
      <input type="text" className='input' />
        <i className='fa fa-search' id='searchicon'></i>
    </div>
    </section>
    
    <div className='banner'>
      <div >
      
        <Buttons />
      </div>
       <div className='banner_info'>
        <h2>Let Your Wildest Pleasures Come Through</h2>
        <h5>Moving you beyond heaven can offer</h5>

        <Button variant='outlined'
        onClick={() => {navigate("/Search");}}
        >Explore Options</Button>
      </div>
    </div>
    <section className='home_'>
      <div className='home_section'>
        <Card
        src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        title="Online Experiences"
        description="Unique activities we can do together led by a world of class"
        price="$400/Night" />
        <Card
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          title="Online Experiences"
          description="Unique activities we can do together led by a world of class"
          price="$580/Night" />
          
        <Card 
          src="https://media.cntraveler.com/photos/56799015c2ebbef23e7d927b/master/pass/Hotelroom-Alamy.jpg"
          title="Online Experiences"
          description="Unique activities we can do together led by a world of class"
          price="$780/Night" />
         
        </div>

        <div className='home_section'>
    <Card
      src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title="Online Experiences"
      description="Unique activities we can do together led by a world of class"
      price="$240 per Night" />
     
    <Card
      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      title="Online Experiences"
      description="Unique activities we can do together led by a world of class" 
      price="$470 per Night"
      />
     
    <Card
      src="https://images.all-free-download.com/images/graphiclarge/hotel_room_187631.jpg"
      title="Online Experiences"
      description="Unique activities we can do together led by a world of class"
      price="$250 per Night" />
     
         </div>

    </section>
    </>
  )
}

export default Rooms;