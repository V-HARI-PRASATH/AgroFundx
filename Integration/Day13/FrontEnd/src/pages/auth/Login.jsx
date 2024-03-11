import "../../assets/css/Login.css";
import CustInput from "../../components/CustInput";
import Custbtn from "../../components/Custbtn";
import loginimg from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../apis/Auth";
import { connect } from 'react-redux';
import {jwtDecode} from 'jwt-decode';



// eslint-disable-next-line react-refresh/only-export-components
function Login(props)
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
            const token=(await login(uname,pass)).data;
            if(token!=null)
            {
                localStorage.setItem("JWTtoken",token);
                props.setUsername(uname);
                const decodedToken = jwtDecode(token);
                const userRole = decodedToken.roles;
                const id=decodedToken.id;
                props.setRoles(userRole);
                props.setId(id);
                navigate('/');
            }
            else
            {
                setUnameer("Please enter valid username");
                setUclass("err");
                setPasser("Please enter valid password");
                setPclass("err");
            }
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

const mapdispactToprops=(dispatch)=>{
    return{
        setUsername:(uname)=>{dispatch({type:"setUsername",username:uname})},
        setRoles:(roles)=>{dispatch({type:"setRoles",roles:roles})},
        setId:(id)=>{dispatch({type:"setId",id:id})},
    }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(null,mapdispactToprops)(Login);