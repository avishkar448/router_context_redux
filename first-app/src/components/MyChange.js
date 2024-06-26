import React, { Component } from 'react'

export class MyChange extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        x:"My name is Avishkar",
        bg:"orange"
      }
    }

    msg(){ 
        this.setState({ 
            bg:"red"
        })
    } 
    
  render() {
    let text
    if(this.state.bg==="orange"){ 
         text=<h2>This is Orange Color</h2>
    }
    else{ 
        text= <h2>This is Red Color</h2>
    }

    return (
      <>
        <div className="container"  style={{backgroundColor:`${this.state.bg}`,height:"300px",width:"300px",margin:"auto"}}>
            <p>{text}</p>
        </div>
        <button onClick={()=>{this.msg()}}>Click</button>
      </>
    )
  }
}

export default MyChange
