import "../assets/css/Custbtn.css";

function Custbtn(props)
{
    return(
        <button className="custbtn" onClick={props.func}>
            {props.lable}
        </button>
    )
}
export default Custbtn;