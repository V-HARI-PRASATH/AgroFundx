import CustInput from "../../components/CustInput";
import Custbtn from "../../components/Custbtn";
import  loginimg from "../../assets/images/login.jpg"
import "../../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Signup()
{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");
    const [cpass,setCpass]=useState("");
    const [emailer,setEmailer]=useState("");
    const [unameer,setUnameer]=useState("");
    const [passer,setPasser]=useState("");
    const [cpasser,setCpasser]=useState("");
    const [uclass,setUclass]=useState("");
    const [pclass,setPclass]=useState("");
    const [cpclass,setCpclass]=useState("");
    const [emailclass,setEmailclass]=useState("");
    useEffect(()=>{
        passStrength();
    },[pass]);
    const onChangeEmail=(event)=>{
        setEmail(event.target.value);
    }
    const onChangeUname=(event)=>{
        setUname(event.target.value);
    }
    const onChangePass=(event)=>{
        setPass(event.target.value);
        // passStrength();
    }
    const onChangeCpass=(event)=>{
        setCpass(event.target.value);
    }
    const passStrength=()=>{
        var n=0;
        if(pass.length>=8)
        {
            n++;
        }
        if(/[A-Z]/.test(pass))
        {
            n++;
        }
        if(/[a-b]/.test(pass))
        {
            n++;
        }
        if(/[0-9]/.test(pass))
        {
            n++;
        }
        if(/\W|_/.test(pass))
        {
            n++;
        }
        switch(n)
        {
            case 1:
                setPasser("weak");
                setPclass("weak");
                break;
            case 2:
                setPasser("weak");
                setPclass("weak");
                break;
            case 3:
                setPasser("medium");
                setPclass("medium");
                break;
            case 4:
                setPasser("strong");
                setPclass("strong");
                break;
            case 5:
                setPasser("very strong");
                setPclass("verystrong");
                break;
        }
        return n;
    }
    const valid=()=>{
        var flag=true;
        const emailRegex =new RegExp(/^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@+gmail.com|mail.com+$/, "gm");
        if(email=="")
        {
            setEmailer("Please enter valid Email");
            setEmailclass("err");
            flag=false;
        }
        else if(emailRegex.test(email)===false)
        {
            setEmailer("Invalid Email");
            setEmailclass("err");
            flag=false;
        }
        else{
            setEmailer("");
            setEmailclass("");
        }
        if(uname==""  || /\W|_|[0-9]/.test(uname))
        {
            setUnameer("Please enter valid username");
            setUclass("err");
            flag=false;
        }
        else if(uname.length<8)
        {
            setUnameer("Username less than 8 characters");
            setUclass("err");
            flag=false;
        }
        else
        {
            setUclass("");
            setUnameer("");
        }
        if(pass=="" || passStrength()<4)
        {
            setPasser("Please enter valid Password");
            setPclass("err");
            flag=false;
        }
        else
        {
            setPclass("");
            setPasser("");
        }
        if(cpass=="")
        {
            setCpasser("Please enter valid Password");
            setCpclass("err");
            flag=false;
        }
        else if(cpass!=pass)
        {
            setCpasser("Password does not match");
            setCpclass("err");
            flag=false;
        }
        else{
            setCpasser("");
            setCpclass("");
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
                <h1>Signup</h1>
                <CustInput class={emailclass} lable="Email" func={onChangeEmail} ermsg={emailer}/>                
                <CustInput class={uclass} lable="Username" func={onChangeUname} ermsg={unameer}/>
                <CustInput class={pclass} lable="Password" func={onChangePass} ermsg={passer}/>
                <CustInput class={cpclass} lable="Confirm Password" func={onChangeCpass} ermsg={cpasser}/>
                <Custbtn lable="Signup" func={handleClick}/>
                <h2>Already have an account? <Link to="/login">Login</Link></h2>
            </div>
        </div>
    )
}

export default Signup;