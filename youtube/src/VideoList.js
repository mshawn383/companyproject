import React from 'react';
import VideoItem from './VideoItem'

export default function VideoList({videos,onVideoSelect}){
  
    const renderlist=videos.map((video)=>{
      
        console.log(video.id.videoId)
return <VideoItem  key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
return <div>{renderlist}</div>
}