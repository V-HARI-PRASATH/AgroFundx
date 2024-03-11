import '../assets/css/CustInput.css';

function CustInput(props)
{
    return(
        <div className="custinput">
            <input className={props.class} type={props.type} placeholder={props.lable} onChange={props.func}></input>
            <p className={props.class}>{props.ermsg}</p>
        </div>
    )
}
export default CustInput;