import React, { Component } from 'react'
import Child2 from './Child2'

export class Parent2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         x:"Gujrat Titen"
      }
    this.king=this.king.bind(this)
    }
    
    king(){ 
        this.setState({ 
            msg:"Kolkata Knight Rider"
        })
    }

  render() {
    return (
      <div>
        Parent Component 
        <h2>{this.state.x}</h2>
        <Child2 a={this.king}/>
      </div>
    )
  }
}

export default Parent2
