import React, { Component } from 'react'

class StateCom extends Component {
    constructor(props){ 
        super(props)
        this.state={ 
            brand:"Royal Enfild",
            model:"GT 650",
            color:"Red",
            count:0
        }
        
    }

    changeColor=()=>{ 
      this.setState({model:"Classic"})
    }

    increment=()=>{ 
      this.setState({ 
        count:this.state.count+1
      })
    }

    decrement=()=>{ 
      if(this.state.count===0){ 
        this.setState({ 
          count:0
        })
      }
      else{
        this.setState({ 
          count:this.state.count-1
        })
      } 
    }
  render() {
    return (
      <>
      <div>
        <h3>My bike brand name is {this.state.brand}</h3>
        <h4>It is {this.state.color} color {this.state.model} </h4>
      </div>
      <div>
        <button type='button' onClick={this.changeColor}>click</button>
      </div>
      <div>
        <h2>click button count: {this.state.count}</h2>
        <button type='button' onClick={this.increment}>increment</button>
        <button type='button' onClick={this.decrement}>decrement</button>
      </div>
      </>
      
      
    )
  }
}

export default StateCom
