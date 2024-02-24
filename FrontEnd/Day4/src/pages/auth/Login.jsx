import "../../assets/css/Login.css";
import CustInput from "../../components/CustInput";
import Custbtn from "../../components/Custbtn";
import loginimg from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function Login()
{
    const navigate=useNavigate();
    const [uname,setUname]=useState("");
    const [unameer,setUnameer]=useState("");
    const [pass,setPass]=useState("");
    const [passer,setPasser]=useState("");
    const [uclass,setUclass]=useState("");
    const [pclass,setPclass]=useState("");
    const onChangeUname=(event)=>{
        setUname(event.target.value);
    }
    const onChangePass=(event)=>{
        setPass(event.target.value);
    }
    const valid=()=>{
        var flag=true;
        if(uname=="")
        {
            setUnameer("Please enter valid username");
            setUclass("err");
            flag=false;
        }
        else
        {
            setUclass("");
            setUnameer("");
        }
        if(pass=="")
        {
            setPasser("Please enter valid password");
            setPclass("err");
            flag=false;
        }
        else
        {
            setPclass("");
            setPasser("");
        }
        return flag;
    }
    const handleClick= async ()=>{
        if(valid())
        {
            navigate('/');
        }
    }
    return(
            <div className="logindiv">
                <div><img className="loginimg" src={loginimg}/></div>
                <div className="login">
                    <h1>LOGIN</h1>
                    <CustInput className={uclass} type="text" lable="Username" func={onChangeUname} ermsg={unameer}/>
                    <CustInput className={pclass} type="password" lable="Password" func={onChangePass} ermsg={passer}/>
                    <Custbtn lable="Login" func={handleClick}/>
                    <h2>Don&apos;t have an account? <Link to="/signup">Signup</Link></h2>
                </div>
            </div>
    )

}

export default Login;