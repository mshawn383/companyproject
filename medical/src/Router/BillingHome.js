import React, { Component } from 'react'
import { connect } from 'react-redux'
 class BillingHome extends Component {

 renderList=(props)=>{
   return  this.props.homebill.map((val)=>{
return <div>
    <div className="container-fluid">

    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-6">
                    
                <li class="list-group-item ">{val.name}</li>
                </div>
                <div className="col-md-6">
                <li class="list-group-item ">{val.price}$</li>
                </div>
                
            </div>
       
        </div>
        <div className="col-md-4"></div>
    </div>
    </div>
  
 


</div>
     })
   
}

    render() {
        return (
            <div>
                <br/>
                <div style={{border:"1px solid grey",height:"500px",width:"1000px",marginLeft:"200px",borderRadius:"10px"}}>
                <br/><br/><br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6"><ul class="list-group">
  <li class="list-group-item active">Billing Name</li></ul></div>
                                <div className="col-md-6">

                                <ul class="list-group">
  <li class="list-group-item active">Price</li></ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
             {this.props.homebill<1 ?<h4 style={{textAlign:"center",marginTop:"100px"}} >No data<br/>Fill the Form</h4>:
             <ul class="list-group"> 

{this.renderList()}
<br/>
<h1 style={{textAlign:"center"}}>Total:{this.props.homebill[0].price+this.props.homebill[1].price+this.props.homebill[2].price}</h1> 

</ul>
}
            </div>    
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    homebill:state.homebill
})

export default connect(mapStateToProps)(BillingHome)