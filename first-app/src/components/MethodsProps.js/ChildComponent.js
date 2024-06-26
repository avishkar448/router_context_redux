import React from 'react'

function ChildComponent(props) {
  return (
    <>
        <div>ChildComponent</div>

        <button onClick={props.xyz}>Click</button>
    </>
  )
} 
export default ChildComponent