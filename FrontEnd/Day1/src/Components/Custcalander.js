import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Custcalander.css';
import Custbtn from './Custbtn';

const CalendarDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [intermediate,setIntermediate]=useState(null);
  useEffect(
    ()=>{
      props.onDateUpdate(selectedDate);
    },[selectedDate]
  )

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIntermediate(date);
    console.log(date);
  };
  const handleClick=()=>{
    setSelectedDate(null);
    setTimeout(()=>{setSelectedDate(intermediate)},0);
  }

  return (
    <div>
      <div className="calendar-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          calendarClassName="custom-calendar"
        />
      </div>
      <Custbtn lable="To Selected Date" func={handleClick}/>
    </div>
  );
};

export default CalendarDatePicker;
