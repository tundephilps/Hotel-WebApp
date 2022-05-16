import React, { useState } from 'react'
import Dcard from './Dcard'
import SData from './SData';
import './Destination.css';

const AllItems = () => {

    const [items] = useState(SData)

  return (
    <section className='gallery desi mtop' id='gallery'>
        <div className='container' id='destination'>
            <div className='content grid'>
                {
                    items.map((item) =>{
                        return <Dcard key={item.id} item={item} />
                    })
                }

            </div>

        </div>

    </section>
  )
}

export default AllItems