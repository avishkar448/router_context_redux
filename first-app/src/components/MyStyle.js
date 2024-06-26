import React from 'react'
import './w.css'
function MyStyle(props){
    let className=props.x ? "x":" ";
  return (
    <> 
    <div className={className}>
        Hello World
    </div>
    </>
  )
}

export default MyStyle