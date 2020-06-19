import React from 'react'


export default function  Videodetail({video}){
    if(!video){
       return <div><center><br/>
       <br/><br/>
       <br/><br/>
           <h4 className="display-4">Search for the Query and Press Enter 

           </h4>
           </center></div>
    }
    return  (<div>
<h4>{video.snippet.title}</h4>
<iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`} width="1000px"  height="400px"></iframe>


<br/>
    <h4 className="lead">{video.snippet.description}</h4>
    </div>)
}