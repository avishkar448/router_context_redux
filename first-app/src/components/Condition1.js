import React, { Component } from 'react'

export class Condition1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:true
      }
    }
    
  render() {
    // if(this.state.x){ 
    //     return <div><h2>Avishkar Gawali</h2></div>
    // }
    // else{ 
    //     return <div><h2>Abhay Gawali</h2></div>
    // }

    // return(this.state.x)?<h2>Virat Kohli</h2>:<h2>MS Dhoni</h2>

    return (this.state.x)&&<h2>Hardik Pandya</h2>
  }
}

export default Condition1
