import { useEffect, useState } from "react";
import "../assets/css/CustSideBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";

function CustSideBar()
{
    const [visiblity,setVisiblity]=useState("hide");
    const handleMouseOver=()=>{
        setVisiblity("visible");
    }
    useEffect(()=>{
        const el=document.getElementById('custsidebar');
        el.addEventListener('mouseover',handleMouseOver);
        return ()=>el.removeEventListener('mouseover',handleMouseOver);
    });
    const handleMouseOut=()=>{
        setVisiblity("hide");
    }
    useEffect(()=>{
        const el=document.getElementById('custsidebar');
        el.addEventListener('mouseout',handleMouseOut);
        return ()=>el.removeEventListener('mouseout',handleMouseOut);
    });
    return(
        <div id='custsidebar' className="custsidebar">
            <div className="icons">
                <div className="Menu"><MenuIcon fontSize="large"/></div>
                <div><HomeIcon fontSize="large"/></div>
                <div><DashboardIcon fontSize="large"/></div>
                <div><InfoIcon fontSize="large"/></div>

            </div>
            <div className={visiblity}>
                <div className="h2"><h2>Menu</h2></div>
                <Link to='/'>
                <div className="h2"><h2>Home</h2></div>
                </Link>
                <Link to='/dashboard'>
                <div className="h2"><h2>Dashboard</h2></div>
                </Link>
                <Link to='/transactionhistory'>
                <div className="h2"><h2>Transaction History</h2></div>
                </Link>
                <Link to='/loans'>
                <div className="h2"><h2>Loans</h2></div>
                </Link>
                <Link to='/admindashboard'>
                <div className="h2"><h2>Admin Dashboard</h2></div>
                </Link>
                <Link to='/about'>
                <div className="h2"><h2>About</h2></div>
                </Link>
            </div>
        </div>
    )
}

export default CustSideBar;