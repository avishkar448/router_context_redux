import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Avishkar"
      }
      console.log("Life Cycle constructor")
    }

    static getDerivedStateFromProps(props,state){ 
        console.log("Life Cycle getDerivedStateFromProps")
        return null
    }

    componentDidMount(){ 
        console.log("Life cycle componentdidmount method")
    }
    
  render() {
    console.log("Life cyle render method")
    return (
      <div>
        LifeCycle
      </div>
    )
  }
}

export default LifeCycle
