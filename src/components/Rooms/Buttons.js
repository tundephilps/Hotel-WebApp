import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Search } from './Search';
import "./Rooms.css"

export const Buttons = () => {
    const [showSearch, setShowSearch]= useState(true);



  return (
      <div className='banner_search'>
          
          <Button variant='outlined' className='banner_searchicon'
        onClick={() => setShowSearch(!showSearch)} 
       
        >{showSearch ? "Hide" : "Search Date"}</Button>
        {showSearch && <Search />}
      </div>
    
  )
}
