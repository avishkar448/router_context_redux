import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>My name is {this.props.name} I am live in {this.props.city} </h1>
      </div>
    );
  }
}
export default Hello;
