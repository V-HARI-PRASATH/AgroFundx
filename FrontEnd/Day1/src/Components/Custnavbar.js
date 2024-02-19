import React, { useState } from "react";
import "./Custnavbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Custbtn from "./Custbtn";

const Listele=(props)=>{
    if(props.loc==="/"+props.name.toLowerCase().replace(" ",""))
    {
        return(
            <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="sele">{props.name}</div></Link>
        )
    }
    return(
        <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="ele">{props.name}</div></Link>
    )
}
function Custnavbar(props)
{
    console.log(props.username);
    const list=["Home","Top Trainers","Products","Video Library","Feedback","About"];
    const elelist=list.map((ele)=><Listele name={ele} loc={props.loc}/>);
    const [profilevis,setProfilevis]=useState(props.profilevis);
    const handleClick=()=>{
        if(profilevis==="profileboxvis")
        {
            setProfilevis("profileboxhide");
        }
        else{
            setProfilevis("profileboxvis");
        }
    }
    const logout=()=>{
        localStorage.setItem("jwtToken","");
        props.setUsername();
        props.setUser();
        props.setTrainer();
        props.setClient();
        handleClick();
    }
    return(
        <div className="custnavbar">
            <div className="navbar">
            {elelist}
            {
                (props.username!=="" && <button className="profile" onClick={handleClick}><AccountCircleIcon fontSize="large"/><div className="profname">{props.username}</div></button>)||
                (props.username==="" && <Link to="/" ><Custbtn lable="Login/Signup"/></Link>)
            }
            </div>
            <div className={profilevis}>
                {profilevis==="profileboxvis"&&
                <>
                <Link to="/profile"><div className="profileele" onClick={()=>{handleClick()}}>profile</div></Link>
                <div className="profileele" onClick={logout}>Logout</div>
                </>
                 }
            </div>
        </div>
    )
}
const mapstateToprops=(state)=>{
    return{
        username:state.username
    }
}
const mapdispactToprops=(dispatch)=>{
    return{
        setUsername:()=>{dispatch({type:"setUsername",username:""})},
        setUser:()=>{dispatch({type:"setUser",user:{}})},
        setTrainer:()=>{dispatch({type:"setTrainer",trainer:{}})},
        setClient:()=>{dispatch({type:"setClient",client:{}})}
    }
}
export default connect(mapstateToprops,mapdispactToprops)(Custnavbar);