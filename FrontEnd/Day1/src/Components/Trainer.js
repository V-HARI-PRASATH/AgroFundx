import { Rating } from "@mui/material";
import './Trainer.css';
import Custbtn from "./Custbtn";
import axios from "axios";
import { connect } from "react-redux";

function Trainer(props)
{
    console.log(props);
    const addClientToTrainer=async(tid,cid)=>{
        const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/addclienttotrainer/"+tid+"/"+cid;
                try{
                    const response=await axios.put(url,{},{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                }
                catch(error)
                {
                    console.error(error.message);
                }
    }
    const handleClick=async()=>{
        const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/getclientId/"+props.userId;
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    addClientToTrainer(props.id,response.data);
                }
                catch(error)
                {
                    console.error(error.message);
                }
    }
    return(
    <div className="trainer">
        <img src="https://img.freepik.com/free-photo/strength-beard-headphone-power-athlete_1368-2583.jpg?w=360&t=st=1689328675~exp=1689329275~hmac=2371e0b43d7c12e3dc0f8f6d1554b25130d9817ca388a4e8b7715e5cca8f33bd"></img>
        <div className="trainertext">
            <h1>Name : {props.name}</h1>
            <h2>Experience : {props.exp}+ years</h2>
            <h2>Specialization : {props.spe}</h2>
            <p> <Rating name="read-only" value={props.rating} readOnly />   {props.rating}</p>
            <Custbtn lable="Join" func={handleClick}></Custbtn>
        </div>
    </div>)
}
const mapstateToprops=(state)=>{
    return{
        userId:state.user.id
    }
}
export default connect(mapstateToprops)(Trainer);