import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         a:false
      }
    }
    
  render() {
    //Condition 
    // if(this.state.a){ 
    //     return <div><h1>Rohit Sharma</h1></div>
    // }
    // else{ 
    //     return <div><h1>Virat kohli</h1></div>
    // }

    //Ternary Operator
   // return (this.state.a)?<h2>Sanju Samson</h2>:<h2>KL Rahul</h2>

   //Short Circuit operator
  // return this.state.a || <h2>login......!</h2>
  }
}

export default Condition
