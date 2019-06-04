import React from 'react';
import VideoItem from "../videoItem/videoItem";

const VideoList = ({videos, onVideoSelect})=>{
  const renderList =  videos.map((video, id)=>{
        return <VideoItem key={id} onVideoSelect = {onVideoSelect} video = {video}/>
    })
    return (
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideoList;