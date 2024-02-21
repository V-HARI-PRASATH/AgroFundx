import React, { useEffect, useState } from "react";
import "./Workoutplans.css";
import ClientSelector from "../Components/ClientSelector";
import axios from "axios";
import Eachworkout from "../Components/EachWorkout";
import Custbtn from "../Components/Custbtn";
import Inptxt from "../Components/Inptxt";
import { Input } from "@mui/material";
import { connect } from "react-redux";

function Workoutplans(props)
{
    const [client,setClient]=useState();
    const [exercises,setExercises]=useState();
    const [mode,setMode]=useState(true);
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    const [totalreps,setTotalreps]=useState();
    const handleClick=()=>{
        setMode(!mode);
    }
    const onSubmit=async()=>{
        console.log({name:name,description:description,totalreps:totalreps,tid:props.trainerId,cid:client});
        const token=localStorage.getItem('jwtToken');
                var url="http://localhost:8080/postexercise";
                try{
                    const response=await axios.post(url,{name:name,description:description,totalreps:totalreps,tid:props.trainerId,cid:client},{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                }
                catch(error)
                {
                    console.error(error.message);
                }
        setMode(!mode);
    }
    useEffect(
        ()=>{
            async function func()
            {
                const token=localStorage.getItem('jwtToken');
                var url="http://localhost:8080/getexercise/"+client;
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setExercises(response.data.map((res)=><Eachworkout id={res.id} role="TRAINER" name={res.name} description={res.description} totalreps={res.totalreps} completedreps={res.completedreps}></Eachworkout>));
                }
                catch(error)
                {
                    console.error(error.message);
                }
            }
            func();
        },[client,mode]
    )
    const handleClientUpdate=(client)=>{
        setClient(client);
    }
    const onNameChange=(event)=>{
        setName(event.target.value);
    }
    const onDescriptionChange=(event)=>{
        setDescription(event.target.value);
    }
    const onTotalrepsChange=(event)=>{
        setTotalreps(event.target.value);
    }
    if(mode)
    {
        return(
            <>
            <ClientSelector onClientUpdate={handleClientUpdate}/><center><Custbtn lable="Add" func={handleClick}/></center>
            <div className="dass">
                {exercises}
            </div>
            </>
        )
    }
    else
    {
        return(
        <>
            <div className="das">
                <center>
                    <Inptxt lable="Exercise Name" func={onNameChange}></Inptxt>
                    <Inptxt lable="Exercise Description" func={onDescriptionChange}></Inptxt>
                    <div>
                    <Input type="number" func={onTotalrepsChange} placeholder="Total No of Reps" onChange={onTotalrepsChange}></Input>
                    </div>
                    <Custbtn lable="Submit" func={onSubmit}></Custbtn>
                </center>
            </div>
        </>)
    }
}
const mapstateToprops=(state)=>{
    return{
        trainerId:state.trainer.id,
    }
  }
export default connect(mapstateToprops)(Workoutplans);