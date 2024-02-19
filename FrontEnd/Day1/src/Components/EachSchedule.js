import React from "react";
import './EachSchedule.css';

function EachSchedule(props)
{
    return(
        <div className="eachschedule">
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <h5>{props.time}</h5>
        </div>
    )
}

export default EachSchedule;