import React, { useEffect, useState } from "react";
import './VideoLibrary.css';
import Video from "../Components/Video";
import axios from "axios";
function VideoLibrary()
{
    const [videos,setVideos]=useState();
    useEffect(
        ()=>{
            async function func()
            {
                const token=localStorage.getItem('jwtToken');
                const url="http://localhost:8080/getvideo";
                try{
                    const response=await axios.get(url,{
                        headers:{
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    console.log(response.data);
                    setVideos(response.data.map((tri)=><Video id={tri.id} video={tri.video}/>));
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
        <div className="videolibrary">
            <div className="allvideos">
                {videos}
            </div>
        </div>
    )
}
export default VideoLibrary;