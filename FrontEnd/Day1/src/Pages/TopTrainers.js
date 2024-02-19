import React, { useEffect, useState } from "react";
import './TopTrainers.css';
import Trainer from "../Components/Trainer";
import axios from "axios";

function TopTrainers()
{
    const [trainers,setTrainers]=useState();
    useEffect(
        ()=>{
            async function func()
            {
                const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/gettrainer";
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setTrainers(response.data.map((tri)=><Trainer id={tri.id} name={tri.user.name} exp={tri.experience} spe={tri.specialization} rating={tri.rating}/>));
                }
                catch(error)
                {
                    console.error(error.message);
                }
            }
            func();
        },[]
    )
    return(
        <div className="toptrainer">
            <div className="alltrainers">
                {trainers}
            </div>
        </div>
    )
}
export default TopTrainers;