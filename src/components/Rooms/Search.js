import React, { useState } from 'react'
import "./Rooms.css"
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@material-ui/core';
import { FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router';


export const Search = () => {

    let navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div className='Search'>
        <DateRangePicker ranges={
            [selectionRange]} onChange=
            {handleSelect}
            />
            <h4>
                Number of guests
                <FaUsers />
            </h4>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button onClick={() => {navigate("/Search");}} >Search Hotel</Button>
    </div>
  )
}
