import React from 'react'
import { connect } from 'react-redux'
import setBill from '../actions'
 class Cook extends React.Component {
    state={
        name:"COOK",
        startTime:'7:00' ,
        closeTime:'18:00',
        charge:200,
        info:'Sorry You cannot Proceed',
        hour:0,
        total:0
       }
    validateBooking=(val)=>{
        var date=new Date()
        if( date.getHours()>0 && date.getHours()<24){
        
            this.setState({total:this.state.charge*val },()=>{
                this.props.setBill(this.state.name,this.state.total)
             })
        }else{
       //  var valStore=24-val;
       //     console.log(this.state.charge*valStore)
        console.log(this.state.info)}
    }
    render(){
    return (
        <div>
            <div>
              <div>
                        <div>


<div className="container-fluid">
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="row">

            <div className="col-md-3">
            <br/><br/>
            
            <label htmlFor="start">Starting Time</label>
<input
 type="time"
 id="start"className="form-control" 
 defaultValue="8:00:00 "
/></div>
            <div className="col-md-3">
            <br/><br/>
            <label htmlFor="close">Closing Time</label>
<input type="time" id="close"className="form-control" min="7:00 " defaultValue={this.state.closeTime}
max="18:00 "/>
            </div>
            </div>
            <br/>
            <label htmlFor="charge">Charge Per Hour(in dollar)</label>
        <input className="form-control" type="number" onChange={(e)=>{this.setState({charge:e.target.value})}} defaultValue={this.state.charge}/>

        <br/>
        <form onSubmit={(e)=>{
            e.preventDefault();

        }}>

        <label htmlFor="book">Book For Certain Hours</label>
        <input type="number" className="form-control" onChange={(e)=>{
            this.setState({hour:e.target.value})}}/>

        <br/>

        <button className="btn btn-outline-primary" onClick={()=>{this.validateBooking(this.state.hour)}}>Book</button>
        </form>

        <br/><br/>
        <h3>Your Total Amount : {this.state.total}$</h3>
        </div>
    
      
        <div className="col-md-3"></div>
    </div>
</div>

</div>
            </div>
        </div>
        </div>
    )
        }
}
const mapDispatchToProps=(dispatch)=>({
    setBill(name,price){
        dispatch(setBill(name,price))
    }

})
export default connect(null,mapDispatchToProps)(Cook)