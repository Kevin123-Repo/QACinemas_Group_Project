import React from 'react';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const InteractiveCalendar = () => {

  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

 

  return (
    <>
      <div>
        <h5 style={{ fontWeight: 'bold' }}>Select a Date</h5>
        <Calendar

         
          // maxDate={}
          minDate ={new Date()}
          onChange={onChange}
          value={date}
          

        />
        {"You have selected: " + date.toLocaleDateString()}
        
      </div>

    </>
  )
}

export default InteractiveCalendar;