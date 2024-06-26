import React, { Component } from 'react'

export class Counter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         count1:100
      }
    }
    
    shouldComponentUpdate(nextProps,nextState){ 
        return nextState.count > this.state.count ||
        nextState.count1 < this.state.count1
    }

    handleIncrement=()=>{ 
        this.setState((prevState)=>({ 
            count:prevState.count +1
        }))
    }


    handleDecrement=()=>{ 
        this.setState((prevState)=>({ 
            count1:prevState.count1 -1
        }))
    }
    
  render() {
    return (
      <>
      <div>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>

      <div>
        <h2>Count:{this.state.count1}</h2>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
      </>

    )
  }
}

export default Counter1
