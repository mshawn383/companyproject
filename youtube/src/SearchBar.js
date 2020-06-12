import React,{Component} from'react'

export default class SearchBar extends Component{
state={
    term:''
}
    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"><br/><br/>
<h5>From Youtube Api</h5>
                        </div>
                        <div className="col-md-8"><form onSubmit={(event)=>{event.preventDefault()
                        this.props.onFormSubmit(this.state.term)
                        
                        }}>
                            <label className="lead" htmlFor="input"> Video Search</label>
                            <input type="text" id="input"className="form-control" value={this.state.term} onChange={(e)=>{
                                    this.setState({term:e.target.value})
                            }}/>
                            </form>
                            </div>
                        <div className="col-md-2">
                            
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}