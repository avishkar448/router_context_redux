import React, { Component } from "react";
import PropTypes from 'prop-types'

class Ptypes extends Component {
  render() {
    const { name, phone, marks, age, q } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>phone no: {phone}</p>
        <p>marks: {marks}</p>
        <p>age: {age} </p>
        <p>Married: {q}</p>
      </div>
    );
  }
}
Ptypes.propTypes={
  name:PropTypes.string.isRequired,
  phone:PropTypes.number.isRequired,
  marks:PropTypes.array.isRequired,
  age:PropTypes.any.isRequired,
  q:PropTypes.bool.isRequired
}

export default Ptypes;
