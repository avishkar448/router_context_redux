import React from 'react'
import { useCount } from '../context/countContext'


const Count = () => {
    const [count,counter]= useCount()
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={counter}></button>
    </div>
  )
}

export default Count
