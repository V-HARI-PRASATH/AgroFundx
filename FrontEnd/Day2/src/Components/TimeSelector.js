import React, { useEffect, useState } from 'react';
import './TimeSelector.css'; // Import your CSS file

function TimeSelector(props) {
  const [selectedTime, setSelectedTime] = useState(props.time);
    useEffect(
        ()=>{
            props.onTimeUpdate(selectedTime);
        },[selectedTime]
    )
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="time-selector-container">
      <h2>Select a Time:</h2>
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        step="1"
        className="time-input" // Apply CSS class to input
      />
      <p>You selected: {selectedTime}</p>
    </div>
  );
}

export default TimeSelector;
