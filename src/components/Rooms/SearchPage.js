import { Button } from '@material-ui/core'
import React from 'react'
import "./Rooms.css"
import { SearchResults } from './SearchResults'
import room3 from "../images/room-3.jpg"
import room2 from "../images/room-2.jpg"
import room1 from "../images/room-1.jpg"
import room4 from "../images/blog-3.jpg"
import room5 from "../images/blog-1.jpg"


const SearchPage = () => {
  return (<>
    <section className='searchsection'>
      <div className='header_center'>
        <input type="text" className='input' />
          <i className='fa fa-search' id='searchicon'></i>
      </div>
      </section>
      
    <div className='searchPage'>
        <div className='searchPage_info'>
            <p>62 Stays - 26 august to 30 august - 2 guest</p>
            <h1>Stay nearby</h1>
            <Button variant='outlined'>Flexibility</Button>
        
            <Button variant='outlined'>Types of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and Beds</Button>
            <Button variant='outlined'>More Filters</Button>
        </div>

        <SearchResults
        img={room3}
        location="Egypt"
        title="Stay in this spacious house"
        description="1 guest - 1 bedroom - 1 bed - 2 bathroooms - Kitchen- Wifi - Washing Machine"
        star={3.9}
        price="55 /night"
        total="$800 total" />

<SearchResults
        img={room2}
        location="London"
        title="Live in paradise"
        description="1 guest - 1 bedroom - 1 bed - 2 bathroooms - Kitchen- Wifi - Washing Machine"
        star={4.5}
        price="42 /night"
        total="$400 total" />

<SearchResults
        img={room1}
        location="New York"
        title="Luxury at its best"
        description="1 guest - 1 bedroom - 1 bed - 2 bathroooms - Kitchen- Wifi - Washing Machine"
        star={5}
        price="37 /night"
        total="$420 total" />

<SearchResults
        img={room4}
        location="Sydney"
        title="All Ensuite"
        description="1 guest - 1 bedroom - 1 bed - 2 bathroooms - Kitchen- Wifi - Washing Machine"
        star={3.73}
        price="38 /night"
        total="$550 total" />

<SearchResults
        img={room5}
        location="Lagos"
        title="No place like Home"
        description="1 guest - 1 bedroom - 1 bed - 2 bathroooms - Kitchen- Wifi - Washing Machine"
        star={4}
        price="40 /night"
        total="$380 total" />


    </div>
    </>
  )
}

export default SearchPage;