import React, { Component } from 'react'

export class Counter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    shouldComponentUpdate(nextProps,nextState){
        return nextState.count >this.state.count
    }

    handleIncrement=()=>{ 
        this.setState((prevState)=>({ 
            count:prevState.count+1
        }))
    } 

    
    
  render() {
    console.log("Render called")
    return (
      <> 
        <p>count:{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    )
  }
}

export default Counter2
