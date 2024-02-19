import React from "react";
import './Inptxt.css';
function Inptxt(props)
{
    return(
        <div className="inptxt">
            <input className={props.class} type={props.type} placeholder={props.lable} onChange={props.func}></input>
            <p className={props.class}>{props.ermsg}</p>
        </div>
    )
}
export default Inptxt;