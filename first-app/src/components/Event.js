import React from 'react'

function Event(props) {
    function ClickHandler(){ 
        alert(`Hello My name is ${props.name}`)
    }
  return (
    <>
    <button onClick={ClickHandler}>Click</button>
    </>
  )
}

export default Event