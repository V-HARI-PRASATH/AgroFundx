import { useEffect, useState } from "react";
import "../assets/css/CustSideBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// eslint-disable-next-line react-refresh/only-export-components
function CustSideBar(props)
{
    const list=(props.roles=="ADMIN" && {"Home":"/","Dashboard":"/admindashboard","Loan Approval":"/loanapproval","All Loans":"/loans","About":"/about"})||(props.roles=="USER" && {"Home":"/","Dashboard":"/dashboard","Get Loans":"/loans","My Loans":"/myloans","My Transactions":"/transactionhistory","About":"/about"}||{"Home":"/home","About":"/about"})
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
                {Object.keys(list).map((key)=>
                    <Link to={list[key]} key={key}><div className="h2"><h2>{key}</h2></div></Link>
                    )}
            </div>
        </div>
    )
}
const mapstateToprops=(state)=>{
    return{
        roles:state.roles
    }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapstateToprops,null)(CustSideBar);