

import React, { useEffect, useState } from "react";
import "./Workoutplan.css";
import Eachworkout from "../Components/EachWorkout";
import axios from "axios";
import { connect } from "react-redux";


function Workoutplan(props)
{
    const [exercises,setExercises]=useState();
    useEffect(
        ()=>{
            async function func()
            {
                const token=localStorage.getItem('jwtToken');
                var url="http://localhost:8080/getexercise/"+props.clientId;
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setExercises(response.data.map((res)=><Eachworkout id={res.id} role={props.role} name={res.name} description={res.description} totalreps={res.totalreps} completedreps={res.completedreps}></Eachworkout>));
                }
                catch(error)
                {
                    console.error(error.message);
                }
            }
            func();
        },[]
    )
    return(<>
        <div className="das">
            {exercises}
        </div>
        </>
    )
}
const mapstateToprops=(state)=>{
    return{
        role:state.user.role,
        clientId:state.client.id
    }
  }
export default connect(mapstateToprops)(Workoutplan);