import React from 'react'

export default function VideoList({video,onVideoSelect}){
    return (
           
                <div 
              className="list-group" style={{width:'18rem'}}> 
  <img className="img-responsive"  key={video.id.videoId} onClick={()=>{onVideoSelect(video)}}
    alt={video.snippet.description} 
    src={video.snippet.thumbnails.medium.url}/>
  
    <p className="list-group-item"> {video.snippet.title}</p>
    <br/>  
  </div>

           

           
    )
}