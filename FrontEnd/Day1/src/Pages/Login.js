import { Link } from 'react-router-dom';
import Custbtn from '../Components/Custbtn';
import Inptxt from '../Components/Inptxt';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

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
            const url="http://localhost:8080/api/v1/auth/authenticate";
            const data={
                name: uname,
                password: pass
            }
            try
            {
                const response=await axios.post(url, data);
                const jwtToken=response.data.token;
                localStorage.setItem('jwtToken',jwtToken);
                console.log(response.data);
                props.setUsername(uname);
                const user=await axios.get("http://localhost:8080/api/v1/users/getUserInfo/"+uname,{
                    headers:{
                        "Authorization": `Bearer ${jwtToken}`,
                    },
                });
                if(user.data.role==="TRAINER")
                {
                    const trainer=await axios.get("http://localhost:8080/gettrainer/"+user.data.id,{
                        headers:{
                            "Authorization": `Bearer ${jwtToken}`,
                        },
                    });
                    console.log(trainer.data);
                    props.setTrainer(trainer.data);
                }
                else{
                    const client=await axios.get("http://localhost:8080/getclient/"+user.data.id,{
                        headers:{
                            "Authorization": `Bearer ${jwtToken}`,
                        },
                    });
                    console.log(client.data);
                    props.setClient(client.data);
                }
                props.setUser(user.data);
                navigate("/home");
            }    
            catch(error)
            {
                console.error('Error:Login Failed', error.message);
                setUnameer("Please enter valid username/password");
                setUclass("err");
                setPasser("Please enter valid username/password");
                setPclass("err");
            }
        }
    }
    return(
        <div className="login">
            <center>
                <h1>LOGIN</h1>
                <Inptxt class={uclass} type="text" lable="Username" func={onChangeUname} ermsg={unameer}/>
                <Inptxt class={pclass} type="password" lable="Password" func={onChangePass} ermsg={passer}/>
                <Custbtn lable="Login" func={handleClick}/>
                <h2>Don't have an account? <Link to="/signup">Signup</Link></h2>
            </center>
        </div>
    )
}
const mapdispactToprops=(dispatch)=>{
    return{
        setUsername:(uname)=>{dispatch({type:"setUsername",username:uname})},
        setUser:(user)=>{dispatch({type:"setUser",user:user})},
        setTrainer:(trainer)=>{dispatch({type:"setTrainer",trainer:trainer})},
        setClient:(client)=>{dispatch({type:"setClient",client:client})}
    }
}
export default connect(null,mapdispactToprops)(Login);