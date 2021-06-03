import React from 'react';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const InteractiveCalendar = ({date, changeDate}) => {

  return (
    <>
      {/* <div>
        <h5 style={{ fontWeight: 'bold' }}>Select a Date</h5>
        <Calendar

         
          // maxDate={}
          minDate ={new Date()}
          onChange={changeDate}
          value={date}
         

        />
        {"You have selected: " + date.getDay()}
      </div> */}
      
    </>
  )
}

export default InteractiveCalendar;