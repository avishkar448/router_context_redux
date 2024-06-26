import React, { Component } from 'react'

export class MyState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Channai Super Kings"
      }
    }

    xyz(){ 
        this.setState({ 
            msg:"Royal Challengers Bengaluru"
        })
    }
    
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={()=>{this.xyz()}}>Click</button>
      </div>
    )
  }
}

export default MyState
