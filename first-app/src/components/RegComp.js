import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
      console.log("Rrgular Component")
    return (
      <div>
        <h3>This is Regular Component {this.props.name}</h3>
      </div>
    )
  }
}

export default RegComp
