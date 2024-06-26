import React, { Component } from 'react'

export class ChangeStyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         a:{
            backgroundColor:"red",height:"300px",width:"300px",margin:"auto"
         }
      }
    }
    ChangeColor(){ 
        this.setState({ 
            a:{ 
            backgroundColor:"orange",height:"300px",width:"300px",margin:"auto"  
            } 
        })
    }
    
  render() {
    return (
      <>
        <div className="container" style={this.state.a}>

        </div>
        <button onClick={()=>{this.ChangeColor()}}>Click</button>
      </>
    )
  }
}

export default ChangeStyle
