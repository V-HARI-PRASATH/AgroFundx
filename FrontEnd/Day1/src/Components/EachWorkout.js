import React, { useState } from "react";
import "./Eachworkout.css";
import { CircularProgress } from "@mui/joy";
import Custbtn from "./Custbtn";
import axios from "axios";

function Eachworkout(props)
{
    const [completedreps,setCompletedreps]=new useState(props.completedreps);
    const handleClick=async()=>{
        const token=localStorage.getItem('jwtToken');
                var url="http://localhost:8080/putexercise/"+props.id;
                try{
                    const response=await axios.put(url,{},{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    setCompletedreps(completedreps+1)
                }
                catch(error)
                {
                    console.error(error.message);
                }
    }
    return(
        <div className="eachwork">
        <div className="progress">
        <CircularProgress sx={{ '--CircularProgress-size': '125px' }} determinate value={(completedreps/props.totalreps)*100}>
            {completedreps}/{props.totalreps}
        </CircularProgress>
        </div>
        <div className="wtext">
        <h2>Workout Name:{props.name}</h2>
        <h2>Workout Description:{props.description}</h2>
        {props.role=="TRAINER"?<Custbtn lable="Delete"></Custbtn>:<Custbtn lable="Grind" func={handleClick}></Custbtn>}
        </div>
        </div>
    )
}

export default Eachworkout;