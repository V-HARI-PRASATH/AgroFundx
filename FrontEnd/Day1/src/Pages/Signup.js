import React from "react";
import "./Signup.css";
import Inptxt from "../Components/Inptxt";
import Custbtn from "../Components/Custbtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

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
    const [role,setRole]=useState("Trainer");
    useEffect(()=>{
        passStrength();
    },[pass]);
    const onClickRole=(n)=>{
        setRole(n);
    }
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
        const emailRegex =new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@+gmail.com|mail.com+$/, "gm");
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
            const url="http://localhost:8080/api/v1/auth/register";
            const data={
                name: uname,
                email: email,
                password: pass,
                role: role.toUpperCase()
            }
            try
            {
                const response=await axios.post(url, data);
                const jwtToken=response.data.token;
                localStorage.setItem('jwtToken',jwtToken);
                console.log(response.data);
                navigate("/");
            }    
            catch(error)
            {
               console.error('Error:Login Failed', error.message);
            }
    }

    }
    return(
        <div className="signup">
            <center>
                <h1>Signup</h1>
                <div className="roles">
                    <div className={role=="Trainer"? "srole":"role"} onClick={()=>{onClickRole("Trainer")}}>Trainer</div>
                    <div className={role=="Client"? "srole":"role"} onClick={()=>{onClickRole("Client")}}>Client</div>
                </div>
                <Inptxt class={emailclass} lable="Email" func={onChangeEmail} ermsg={emailer}/>
                <Inptxt class={uclass} lable="Username" func={onChangeUname} ermsg={unameer}/>
                <Inptxt class={pclass} lable="Password" func={onChangePass} ermsg={passer}/>
                <Inptxt class={cpclass} lable="Confirm Password" func={onChangeCpass} ermsg={cpasser}/>
                <Custbtn lable="Signup" func={handleClick}/>
                <h2>Already have an account? <Link to="/">Login</Link></h2>
            </center>
        </div>
    )
}
export default Signup;