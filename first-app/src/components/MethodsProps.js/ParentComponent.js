import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:"Avishakar"
      }
    this.parentOne=this.parentOne.bind(this)
    }
    parentOne(){ 
        alert(`Hello ${this.state.ParentName}`)
    }
    
  render() {
    return (
      <div>        
        Parent Component 
        <ChildComponent xyz={this.parentOne}/>
      </div>
    )
  }
}

export default ParentComponent
