import React from "react";
import './Video.css';
import YouTube from 'react-youtube';

function Video(props)
{
    const opts = {
        width: '300',
        height: '150',
        
      };
    return(
    <div className="vid" id={props.id}>
        <div className="protext">
        <YouTube videoId={props.video} opts={opts} />
        </div>
    </div>)
}
export default Video;