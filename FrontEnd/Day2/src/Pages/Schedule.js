import React, { useEffect, useState } from 'react';
import './Schedule.css';
import CalendarDatePicker from '../Components/Custcalander';
import Custbtn from '../Components/Custbtn';
import TimeSelector from '../Components/TimeSelector';
import ClientSelector from '../Components/ClientSelector';
import Inptxt from '../Components/Inptxt';
import axios from 'axios';
import { connect } from 'react-redux';
import EachSchedule from '../Components/EachSchedule';

function Schedule(props)
{
  const [mode,setMode]=useState(true);
  const [date,setDate]=useState();
  const [time,setTime]=useState("00:00:00");
  const [client,setClient]=useState();
  const [eventName,setEventName]=useState();
  const [eventDis,setEventDis]=useState();
  const [error,setError]=useState("");
  const [events,setEvents]=useState();
  useEffect(
    ()=>{
        async function func()
        {
            const token=localStorage.getItem('jwtToken');
            var url="";
            if(props.role=="TRAINER")
            {
              url="http://localhost:8080/getTrainerSchedule/"+props.trainerId+"/"+date;
            }
            else
            {
              url="http://localhost:8080/getClientSchedule/"+props.clientId+"/"+date;
            }
            try{
                const response=await axios.get(url,{
                    headers:{
                        "Authorization": `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                setEvents(response.data.map((res)=><EachSchedule name={res.name} description={res.description} time={res.time}></EachSchedule>));
            }
            catch(error)
            {
                console.error(error.message);
            }
        }
        func();
    },[date]
)
  const handleEventNameChange=(event)=>{
    setEventName(event.target.value);
  }
  const handleEventDisChange=(event)=>{
    setEventDis(event.target.value);
  }
  const handleDateUpdate=(date)=>{
    const isoString = date.toISOString();
    const sqlDate = isoString.slice(0, 10);
    setDate(sqlDate);
    console.log(sqlDate);
  }
  const handleTimeUpdate=(time)=>{
    console.log(time);
    setTime(time);
  }
  
  const handleClientUpdate=(client)=>{
    setClient(client);
  }
  const handleClick=async()=>{
    if(mode===true)
    setMode(false);
    else
    {
      if(date===undefined || time===undefined || client==="" || eventDis===undefined || eventName===undefined)
      {
        setError("Fill All The Fields")
      }
      else
      {
                const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/addSchedule";
                try{
                    const response=await axios.post(url,{name:eventName,description:eventDis,date:date,time:time,cid:client,tid:props.trainerId},{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                }
                catch(error)
                {
                    console.error(error.message);
                }
                console.log({"name":eventName,description:eventDis,date:date,time:time,client:client,trainer:props.trainerId});
        setError("");
        setMode(true);
      }
    }
  }
  if(mode)
  {
    return (
      <div className='sch'>
        <h1>Schedule</h1>
        <div className='calendar'>
          <CalendarDatePicker onDateUpdate={handleDateUpdate}/>
        </div>
        <div className='events'>
          <h2>Events</h2>
          <center>
          {events}
          </center>
        </div>
        {props.role=="TRAINER"?<Custbtn lable="Schedule Event" func={handleClick}/>:<></>}
      </div>
    );
  }
  else
  {
    return (
      <div className='sch'>
        <h1>Schedule Form</h1>
        <div className='form'>
          <center>
          <Inptxt lable="Event Name" func={handleEventNameChange}></Inptxt>
          <Inptxt lable="Event Discription" func={handleEventDisChange}></Inptxt>
          </center>
          <h2>Selected Date : {date}</h2>
          <TimeSelector onTimeUpdate={handleTimeUpdate} time={time}/>
          <ClientSelector onClientUpdate={handleClientUpdate}/>
          <center>
            <h3>{error}</h3>
          <Custbtn lable="Schedule Event" func={handleClick}/>
          </center>
        </div>
      </div>
    );
  }
};
const mapstateToprops=(state)=>{
  return{
      trainerId:state.trainer.id,
      role:state.user.role,
      clientId:state.client.id
  }
}
export default connect(mapstateToprops)(Schedule);
