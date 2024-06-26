import React, { Component } from 'react'

export class PureComp extends Component {
    render() {
      console.log("This is Pure component")
    return (
      <div>
        <h3>Next captain of India {this.state.name} </h3>
      </div>
    )
  }
}

export default PureComp
