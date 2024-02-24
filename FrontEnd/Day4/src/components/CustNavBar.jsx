import { useEffect, useState } from "react";
import "../assets/css/CustNavBar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Custbtn from "../components/Custbtn"
import { Link } from "react-router-dom";

function CustNavBar()
{
    const [profboxvisibility,setProfboxvisibility]=useState("profboxhide");
    const handleMouseOver=()=>{
        setProfboxvisibility("profboxvis");
    }
    useEffect(()=>{
        const el=document.getElementById('profilediv');
        el.addEventListener('mouseover',handleMouseOver);
        return ()=>el.removeEventListener('mouseover',handleMouseOver);
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
    
    return(
        <div className="custnavbar">
            <div className="navbar">
                <div id="profilediv">
                <button className="profile" id="profile"><AccountCircleIcon fontSize="large"/>
                    <div className="profname">Hariprasath</div>
                </button> 
                <div className={profboxvisibility} id={profboxvisibility}>
                        <Link to='/profile'><Custbtn lable="Profile"/></Link>
                        <Link to='/login'><Custbtn lable="Logout"/></Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CustNavBar;