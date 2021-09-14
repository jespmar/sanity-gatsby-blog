import React from "react";
import "../styles/global.css";
import ReactPlayer from 'react-player'



function VideoPlayer({videoLink}) {

    const controlls = true
  
  return (
    <div className="w-full mx-auto mb-4">
        <ReactPlayer url={videoLink}  controls={controlls}/>
    </div>
  );
}

export default VideoPlayer;