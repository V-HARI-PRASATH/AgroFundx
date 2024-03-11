import { useEffect, useState } from "react";
import "../assets/css/CustNavBar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Custbtn from "../components/Custbtn"
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";


// eslint-disable-next-line react-refresh/only-export-components
function CustNavBar(props)
{
    const navigate=useNavigate();
    const [profboxvisibility,setProfboxvisibility]=useState("profboxhide");
    const handleMouseOver=()=>{
        setProfboxvisibility("profboxvis");
    }
    useEffect(()=>{
        const el=document.getElementById('profilediv');
        if(el)
        {
            // const el=document.getElementById('profilediv');
            el.addEventListener('mouseover',handleMouseOver);
            return ()=>el.removeEventListener('mouseover',handleMouseOver);
        }
    })
    const handleMouseOut=()=>{
        setProfboxvisibility("profboxhide");
    }
    useEffect(()=>{
        const el=document.getElementById('profilediv');
        if(el)
        {
            el.addEventListener('mouseout',handleMouseOut);
            return ()=>el.removeEventListener('mouseout',handleMouseOut);
        }
    })
    const logout=()=>{
        localStorage.removeItem('JWTtoken');
        props.setUsername();
        props.setRoles();
        props.setId();
        navigate("/login");
    }
    
    return(
        <div className="custnavbar">
            <div className="navbar">
            {(props.username!=null && <div id="profilediv">
                <button className="profile" id="profile"><AccountCircleIcon fontSize="large"/>
                    <div className="profname">{props.username}</div>
                </button> 
                <div className={profboxvisibility} id={profboxvisibility}>
                        <Link to='/profile'><Custbtn lable="Profile"/></Link>
                        <Custbtn lable="Logout" func={logout}/>
                </div>
                </div>)||<Link className="loginsignup" to='/login'><Custbtn lable="Login/SignUp"/></Link>}
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
        setUsername:()=>{dispatch({type:"setUsername",username:null})},
        setRoles:()=>{dispatch({type:"setRoles",roles:null})},
        setId:()=>{dispatch({type:"setId",id:null})},
    }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapstateToprops,mapdispactToprops)(CustNavBar);