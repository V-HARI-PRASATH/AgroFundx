import React, { useState } from "react";
import "./Custsidbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Listele=(props)=>{
    if(props.loc==="/"+props.name.toLowerCase().replace(" ",""))
    {
        return(<Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="ssidele">{props.name}</div></Link>
        )
    }
    return(
        <Link to={"/"+props.name.toLowerCase().replace(" ","")}><div className="sidele">{props.name}</div></Link>
    )
}
function Custsidbar(props)
{
    const list=(props.role=="TRAINER" && ["Home","Workout Plans","Schedule","Clients","Top trainers","Products","Settings","help"])||["Workout Plan","Schedule","Top trainers","Products","About","Settings","help"];
    const sidelelist=list.map((ele)=><Listele name={ele} loc={props.loc}/>);
    const [visiblity,setVisiblity]=useState("hide");
    const handleClick=()=>{
        // console.log(props.role);
        if(visiblity==="hide")
        {
            setVisiblity("visible");
        }
        else{
            setVisiblity("hide");
        }
    }
    return(
        ( props.username!=="" &&
        <div className="custsidbar">
            <div className="indicate">
                <button className="menu" onClick={handleClick}><MenuIcon style={{color:"white"}}/></button>
            </div>
            <div className={visiblity}>
                {sidelelist}
            </div>
        </div>)
    )
}
const mapstateToprops=(state)=>{
    return{
        username:state.username,
        role:state.user.role
    }
}
export default connect(mapstateToprops)(Custsidbar);