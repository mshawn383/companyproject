import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

import youtube,{baseParams} from './youtube'
import Videodetail from './VideoDetail';

export default class App extends Component{
    state={videos:[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('Dragon Ball Super')
    }
    onTermSubmit= async (term)=>{
         const response=await youtube.get('/search',{
            params:{
                ...baseParams,
                q:term
            }
        })
        this.setState({videos:response.data.items,
        
        selectedVideo:response.data.items[0]})
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    render(){
        return (<div>
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">You Tube Clone</a>
</nav>
           <SearchBar onFormSubmit={this.onTermSubmit}/><br/>
       
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-9">
                <Videodetail video={this.state.selectedVideo}/>
                </div>
                <div className="col-md-3">
                <VideoList   onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
            </div>
        </div>
    
        </div>)
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))